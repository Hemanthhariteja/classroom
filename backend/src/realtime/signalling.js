import { WebSocketServer } from 'ws';

const classes = new Map(); // classId -> Map<userId, { ws, role }>

function getClassMap(classId) {
  if (!classes.has(classId)) classes.set(classId, new Map());
  return classes.get(classId);
}

function broadcast(classId, payload, excludeUserId = null) {
  const map = classes.get(classId);
  if (!map) return;
  for (const [uid, info] of map.entries()) {
    if (excludeUserId && uid === excludeUserId) continue;
    try {
      info.ws.send(JSON.stringify(payload));
    } catch (e) {
      console.log('Broadcast error to user', uid, ':', e.message);
    }
  }
}

function broadcastToRole(classId, payload, targetRole, excludeUserId = null) {
  const map = classes.get(classId);
  if (!map) return 0;
  
  let count = 0;
  for (const [uid, info] of map.entries()) {
    if (excludeUserId && uid === excludeUserId) continue;
    if (info.role === targetRole) {
      try {
        info.ws.send(JSON.stringify(payload));
        count++;
      } catch (e) {
        console.log('Broadcast error to', targetRole, uid, ':', e.message);
      }
    }
  }
  return count;
}

export function initSignalling(server) {
  const wss = new WebSocketServer({ server, path: process.env.WS_PATH || '/ws' });

  wss.on('connection', (ws) => {
    let joined = { classId: null, userId: null, role: null };

    ws.on('message', (msg) => {
      let data;
      try { data = JSON.parse(msg.toString()); } catch {
        return;
      }

      const type = data.type;
      console.log('[Signaling] Received:', type, 'from', joined.userId || 'unknown');

      if (type === 'join') {
        const { classId, userId, role } = data;
        if (!classId || !userId) return;
        
        const cmap = getClassMap(classId);
        cmap.set(userId, { ws, role: role || 'student' });
        joined = { classId, userId, role: role || 'student' };
        
        console.log(`[Signaling] ${role} ${userId} joined class ${classId}`);
        
        // Notify peers someone joined
        broadcast(classId, { type: 'peer_joined', userId, role }, userId);
        return;
      }

      if (type === 'leave') {
        const { userId } = data;
        if (joined.classId && userId) {
          const cmap = getClassMap(joined.classId);
          cmap.delete(userId);
          broadcast(joined.classId, { type: 'peer_left', userId });
        }
        return;
      }

      // WebRTC signaling messages
      if (['offer', 'answer', 'candidate'].includes(type)) {
        const { to } = data;
        
        if (to) {
          // Direct peer-to-peer messaging
          const cmap = getClassMap(joined.classId);
          const peer = cmap.get(to);
          if (peer) {
            console.log(`[Signaling] Direct message ${type} from ${joined.userId} to ${to}`);
            try {
              peer.ws.send(JSON.stringify({ ...data, from: joined.userId }));
            } catch (e) {
              console.log(`[Signaling] Error sending to ${to}:`, e.message);
            }
          } else {
            console.log(`[Signaling] Peer ${to} not found in class ${joined.classId}`);
          }
        } else {
          // Broadcast mode - teacher to all students or student to all teachers
          if (joined.role === 'teacher') {
            console.log(`[Signaling] Teacher ${joined.userId} broadcasting ${type} to all students in class ${joined.classId}`);
            const studentCount = broadcastToRole(joined.classId, { 
              ...data, 
              from: joined.userId,
              classId: joined.classId
            }, 'student', joined.userId);
            console.log(`[Signaling] Broadcasted to ${studentCount} students`);
          } else if (joined.role === 'student') {
            console.log(`[Signaling] Student ${joined.userId} sending ${type} to teacher in class ${joined.classId}`);
            const teacherCount = broadcastToRole(joined.classId, { 
              ...data, 
              from: joined.userId,
              classId: joined.classId
            }, 'teacher');
            console.log(`[Signaling] Sent to ${teacherCount} teachers`);
          }
        }
        return;
      }
    });

    ws.on('close', () => {
      if (joined.classId && joined.userId) {
        console.log(`[Signaling] ${joined.role} ${joined.userId} left class ${joined.classId}`);
        const cmap = getClassMap(joined.classId);
        cmap.delete(joined.userId);
        broadcast(joined.classId, { type: 'peer_left', userId: joined.userId });
      }
    });
  });

  console.log('WebRTC signalling server initialized.');
}