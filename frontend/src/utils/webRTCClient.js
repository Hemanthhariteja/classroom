// Audio-only WebRTC client with WS signaling and fallback timer
export function webRTCClient({ wsUrl, token }) {
  let ws, pc, remoteStream, fallbackTimer
  const iceServers = [{ urls: ['stun:stun.l.google.com:19302'] }]

  async function joinClass(classId, onRemoteStream, onEvent, onRemoteVideo = null) {
    try {
      // Some servers expect auth via query param. Browser WebSocket cannot set arbitrary headers
      // so use ?token=... which the server can read from the handshake URL.
      const wsConnectUrl = token ? `${wsUrl}${wsUrl.includes('?') ? '&' : '?'}token=${encodeURIComponent(token)}` : wsUrl
      console.log('[WebRTC] Connecting WebSocket to:', wsConnectUrl)
      ws = new WebSocket(wsConnectUrl)
    } catch (e) {
      console.error('[WebRTC] WebSocket connection failed:', e)
      onEvent && onEvent('ws-error')
      return
    }

    // Generate a unique user ID for this session
    const userId = 'student_' + Math.random().toString(36).substr(2, 9)

    ws.onopen = async () => {
      console.log('[WebRTC] WebSocket connected, joining class:', classId)
      ws.send(JSON.stringify({ 
        type: 'join', 
        classId, 
        userId, 
        role: 'student' 
      }))
      
      pc = new RTCPeerConnection({ iceServers })
      remoteStream = new MediaStream()
      
      pc.ontrack = (e) => {
        console.log('[WebRTC] *** TRACK RECEIVED ***', {
          kind: e.track.kind,
          label: e.track.label,
          enabled: e.track.enabled,
          readyState: e.track.readyState,
          id: e.track.id
        })
        
        remoteStream.addTrack(e.track)
        console.log('[WebRTC] Track added to stream. Total tracks:', remoteStream.getTracks().length)
        console.log('[WebRTC] Stream now has:', {
          audioTracks: remoteStream.getAudioTracks().length,
          videoTracks: remoteStream.getVideoTracks().length
        })
        
        if (e.track.kind === 'audio') {
          console.log('[WebRTC] *** CALLING AUDIO CALLBACK ***')
          onRemoteStream && onRemoteStream(remoteStream)
          
          // Also check if we have video tracks and call video callback
          if (remoteStream.getVideoTracks().length > 0) {
            console.log('[WebRTC] Audio received but also have video tracks - calling video callback')
            onRemoteVideo && onRemoteVideo(remoteStream)
          }
        } else if (e.track.kind === 'video') {
          console.log('[WebRTC] *** CALLING VIDEO CALLBACK ***')
          console.log('[WebRTC] Video callback function exists:', !!onRemoteVideo)
          onRemoteVideo && onRemoteVideo(remoteStream)
          
          // Also check if we have audio tracks and call audio callback
          if (remoteStream.getAudioTracks().length > 0) {
            console.log('[WebRTC] Video received but also have audio tracks - calling audio callback')
            onRemoteStream && onRemoteStream(remoteStream)
          }
        }
      }
      
      pc.onicecandidate = (e) => {
        if (e.candidate) {
          console.log('[WebRTC] Sending ICE candidate to teacher')
          ws.send(JSON.stringify({ 
            type: 'candidate', 
            candidate: e.candidate,
            from: userId
          }))
        }
      }
      
      pc.onconnectionstatechange = () => {
        console.log('[WebRTC] Connection state:', pc.connectionState)
        if (pc.connectionState === 'connected') {
          clearTimeout(fallbackTimer)
        }
      }
      
      // Wait for teacher to connect and send offer
      console.log('[WebRTC] Student waiting for teacher stream...')

      // Fallback if not connected in X seconds
      fallbackTimer = setTimeout(() => {
        console.log('[WebRTC] Connection timeout, current state:', pc.connectionState)
        if (pc.connectionState !== 'connected') {
          onEvent && onEvent('webrtc-failed')
        }
      }, 10000) // Increased timeout
    }

    ws.onmessage = async (msg) => {
      const data = JSON.parse(msg.data)
      console.log('[WebRTC] Received message:', data.type, 'from:', data.from, 'to:', data.to)
      
      if (data.type === 'offer' && data.from && data.from.startsWith('teacher_')) {
        console.log('[WebRTC] Received offer from teacher:', data.from)
        try {
          await pc.setRemoteDescription({ type: 'offer', sdp: data.sdp })
          const answer = await pc.createAnswer()
          await pc.setLocalDescription(answer)
          
          console.log('[WebRTC] Sending answer back to teacher')
          ws.send(JSON.stringify({ 
            type: 'answer', 
            sdp: answer.sdp,
            to: data.from,
            from: userId
          }))
        } catch (e) {
          console.error('[WebRTC] Error handling offer:', e)
          onEvent && onEvent('webrtc-failed')
        }
      } else if (data.type === 'candidate' && data.from && data.from.startsWith('teacher_')) {
        console.log('[WebRTC] Adding ICE candidate from teacher')
        try { 
          await pc.addIceCandidate(data.candidate) 
        } catch (e) {
          console.log('[WebRTC] ICE candidate error:', e)
        }
      } else if (data.type === 'event') {
        onEvent && onEvent(data.name)
      } else if (data.type === 'peer_joined') {
        console.log('[WebRTC] Peer joined:', data.userId, data.role)
        if (data.role === 'teacher') {
          console.log('[WebRTC] Teacher joined - waiting for offer...')
        }
      }
    }
    
    ws.onerror = (error) => {
      console.error('[WebRTC] WebSocket error:', error)
      onEvent && onEvent('ws-error')
    }
    
    ws.onclose = () => {
      console.log('[WebRTC] WebSocket closed')
      onEvent && onEvent('ws-closed')
    }
  }

  function leave() {
    clearTimeout(fallbackTimer)
    if (pc) pc.close()
    if (ws && ws.readyState === WebSocket.OPEN) ws.close()
  }

  return { joinClass, leave }
}

export async function startFacultyBroadcast({ wsUrl, token, classId, onEvent, includeScreen = false }) {
  console.log('[Faculty WebRTC] Starting faculty broadcast')
  console.log('[Faculty WebRTC] Parameters:', { wsUrl, token, classId, includeScreen })
  
  const iceServers = [{ urls: 'stun:stun.l.google.com:19302' }]
  const studentConnections = new Map()
  
  console.log('[Faculty WebRTC] Getting user media...')
  
  let stream
  if (includeScreen) {
    try {
      // Get screen sharing stream
      console.log('[Faculty WebRTC] Requesting screen share...')
      const screenStream = await navigator.mediaDevices.getDisplayMedia({ 
        video: { 
          width: { ideal: 1280 }, 
          height: { ideal: 720 },
          frameRate: { ideal: 15 }
        }, 
        audio: true 
      })
      
      // Get microphone audio
      console.log('[Faculty WebRTC] Getting microphone audio...')
      const audioStream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 44100
        }, 
        video: false 
      })
      
      // Combine streams
      stream = new MediaStream()
      screenStream.getVideoTracks().forEach(track => stream.addTrack(track))
      audioStream.getAudioTracks().forEach(track => stream.addTrack(track))
      
      console.log('[Faculty WebRTC] Combined screen + audio stream created')
      
    } catch (error) {
      console.log('[Faculty WebRTC] Screen share failed, falling back to audio only:', error.message)
      stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 44100
        }, 
        video: false 
      })
    }
  } else {
    stream = await navigator.mediaDevices.getUserMedia({ 
      audio: { 
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        sampleRate: 44100
      }, 
      video: false 
    })
  }
  
  console.log('[Faculty WebRTC] Media stream obtained, tracks:', stream.getTracks().length)
  
  // Verify audio tracks are enabled and working
  const audioTracks = stream.getAudioTracks()
  const videoTracks = stream.getVideoTracks()
  
  console.log('[Faculty WebRTC] Audio tracks:', audioTracks.length)
  console.log('[Faculty WebRTC] Video tracks:', videoTracks.length)
  
  // Log detailed information about all tracks
  console.log('[Faculty WebRTC] ALL TRACKS IN STREAM:')
  stream.getTracks().forEach((track, index) => {
    console.log(`[Faculty WebRTC] Track ${index}:`, {
      kind: track.kind,
      enabled: track.enabled,
      muted: track.muted,
      readyState: track.readyState,
      label: track.label,
      settings: track.getSettings()
    })
  })
  
  audioTracks.forEach((track, index) => {
    console.log(`[Faculty WebRTC] Audio track ${index}:`, {
      enabled: track.enabled,
      muted: track.muted,
      readyState: track.readyState,
      label: track.label,
      settings: track.getSettings()
    })
    
    // Ensure track is enabled
    track.enabled = true
  })
  
  videoTracks.forEach((track, index) => {
    console.log(`[Faculty WebRTC] Video track ${index}:`, {
      enabled: track.enabled,
      muted: track.muted,
      readyState: track.readyState,
      label: track.label,
      settings: track.getSettings()
    })
  })
  
  const teacherId = 'teacher_' + Math.random().toString(36).substr(2, 9)
  console.log('[Faculty WebRTC] Teacher ID:', teacherId)

  return new Promise((resolve, reject) => {
    console.log('[Faculty WebRTC] Creating WebSocket connection to:', wsUrl)
    let ws, isConnected = false
    
    // Helper function to create connection for a student
    const createStudentConnection = async (studentId) => {
      console.log(`[Faculty WebRTC] Creating connection for student: ${studentId}`)
      
      const pc = new RTCPeerConnection({ iceServers })
      studentConnections.set(studentId, pc)
      
      // Add all tracks to this peer connection
      console.log(`[Faculty WebRTC] *** ADDING TRACKS TO ${studentId} ***`)
      const audioTracks = stream.getAudioTracks()
      const videoTracks = stream.getVideoTracks()
      console.log(`[Faculty WebRTC] Available audio tracks: ${audioTracks.length}`)
      console.log(`[Faculty WebRTC] Available video tracks: ${videoTracks.length}`)
      
      // Log all tracks in detail
      stream.getTracks().forEach((track, i) => {
        console.log(`[Faculty WebRTC] Track ${i} for ${studentId}:`, {
          kind: track.kind,
          label: track.label,
          enabled: track.enabled,
          readyState: track.readyState,
          id: track.id
        })
      })
      
      // Add audio tracks
      for (const track of audioTracks) {
        const sender = pc.addTrack(track, stream)
        console.log(`[Faculty WebRTC] ✅ Added audio track to ${studentId}:`, {
          label: track.label,
          enabled: track.enabled,
          senderId: sender ? 'OK' : 'FAILED'
        })
      }
      
      // Add video tracks (for screen sharing)
      for (const track of videoTracks) {
        const sender = pc.addTrack(track, stream)
        console.log(`[Faculty WebRTC] ✅ Added video track to ${studentId}:`, {
          label: track.label,
          enabled: track.enabled,
          senderId: sender ? 'OK' : 'FAILED'
        })
      }
      
      console.log(`[Faculty WebRTC] *** TOTAL TRACKS ADDED TO ${studentId}: ${audioTracks.length + videoTracks.length} ***`)
      
      // Set up ICE candidate handling
      pc.onicecandidate = (e) => {
        if (e.candidate) {
          console.log(`[Faculty WebRTC] Sending ICE candidate to student: ${studentId}`)
          ws.send(JSON.stringify({ 
            type: 'candidate', 
            candidate: e.candidate,
            to: studentId,
            from: teacherId
          }))
        }
      }
      
      pc.onconnectionstatechange = () => {
        console.log(`[Faculty WebRTC] Connection to ${studentId}:`, pc.connectionState)
        if (pc.connectionState === 'connected') {
          onEvent && onEvent(`student-connected:${studentId}`)
        } else if (pc.connectionState === 'disconnected' || pc.connectionState === 'failed') {
          studentConnections.delete(studentId)
          onEvent && onEvent(`student-disconnected:${studentId}`)
        }
      }
      
      // Create and send offer
      try {
        console.log(`[Faculty WebRTC] Creating offer for student: ${studentId}`)
        const offer = await pc.createOffer()
        console.log(`[Faculty WebRTC] *** SDP ANALYSIS FOR ${studentId} ***`)
        console.log(`[Faculty WebRTC] Offer SDP contains 'video':`, offer.sdp.includes('video'))
        console.log(`[Faculty WebRTC] Offer SDP contains 'audio':`, offer.sdp.includes('audio'))
        console.log(`[Faculty WebRTC] Offer SDP video lines:`, offer.sdp.split('\n').filter(line => line.includes('video')))
        
        await pc.setLocalDescription(offer)
        console.log(`[Faculty WebRTC] Sending offer to student: ${studentId}`)
        ws.send(JSON.stringify({ 
          type: 'offer', 
          sdp: offer.sdp,
          to: studentId,
          from: teacherId
        }))
      } catch (e) {
        console.error(`[Faculty WebRTC] Error creating offer for ${studentId}:`, e)
      }
    }
    
    try {
      const wsConnectUrl = token ? `${wsUrl}${wsUrl.includes('?') ? '&' : '?'}token=${encodeURIComponent(token)}` : wsUrl
      console.log('[Faculty WebRTC] Connecting WebSocket to:', wsConnectUrl)
      ws = new WebSocket(wsConnectUrl)
      console.log('[Faculty WebRTC] WebSocket object created')
    } catch (error) {
      console.error('[Faculty WebRTC] Failed to create WebSocket:', error)
      reject(new Error('Failed to create WebSocket: ' + error.message))
      return
    }
    
    // Set up WebSocket error handling
    ws.onerror = (error) => {
      console.error('[Faculty WebRTC] WebSocket error event:', error)
      console.error('[Faculty WebRTC] WebSocket readyState:', ws.readyState)
      if (!isConnected) {
        reject(new Error('WebSocket connection failed: ' + error.message))
      }
    }
    
    ws.onclose = (event) => {
      console.log('[Faculty WebRTC] WebSocket close event:', { code: event.code, reason: event.reason, wasClean: event.wasClean })
      if (!isConnected) {
        reject(new Error(`WebSocket closed before connection established: ${event.code} - ${event.reason}`))
      }
    }

    ws.onopen = async () => {
      console.log('[Faculty WebRTC] WebSocket onopen event triggered')
      console.log('[Faculty WebRTC] WebSocket readyState:', ws.readyState)
      isConnected = true
      
      // Join as teacher
      const joinMessage = { 
        type: 'join', 
        classId: classId || 'default',
        userId: teacherId, 
        role: 'teacher' 
      }
      console.log('[Faculty WebRTC] Sending join message:', joinMessage)
      
      try {
        ws.send(JSON.stringify(joinMessage))
        console.log('[Faculty WebRTC] Join message sent successfully')
      } catch (error) {
        console.error('[Faculty WebRTC] Error sending join message:', error)
        reject(new Error('Failed to send join message: ' + error.message))
        return
      }
      
      // Resolve the promise with the controller object
      resolve({
        stop: () => {
          console.log('[Faculty WebRTC] Stopping broadcast')
          
          // Close all student connections
          for (const [studentId, pc] of studentConnections) {
            pc.close()
          }
          studentConnections.clear()
          
          // Stop media stream
          stream.getTracks().forEach(t => t.stop())
          
          // Close WebSocket
          if (ws.readyState === WebSocket.OPEN) {
            ws.close()
          }
        },
        stream, 
        getConnectedStudents: () => studentConnections.size,
        getStudentIds: () => Array.from(studentConnections.keys())
      })
    }

    ws.onmessage = async (ev) => {
      const data = JSON.parse(ev.data)
      console.log('[Faculty WebRTC] Received message:', data.type, 'from:', data.from)
      
      if (data.type === 'peer_joined' && data.role === 'student') {
        console.log(`[Faculty WebRTC] Student joined: ${data.userId}`)
        // Create connection for new student with delay to ensure teacher is ready
        setTimeout(() => {
          console.log(`[Faculty WebRTC] Initiating connection to student: ${data.userId}`)
          createStudentConnection(data.userId)
        }, 1000)
        
      } else if (data.type === 'answer' && data.from && data.from.startsWith('student_')) {
        const studentId = data.from
        const pc = studentConnections.get(studentId)
        if (pc) {
          console.log(`[Faculty WebRTC] Received answer from student: ${studentId}`)
          try {
            await pc.setRemoteDescription({ type: 'answer', sdp: data.sdp })
          } catch (e) {
            console.error(`[Faculty WebRTC] Error setting remote description for ${studentId}:`, e)
          }
        }
        
      } else if (data.type === 'candidate' && data.from && data.from.startsWith('student_')) {
        const studentId = data.from
        const pc = studentConnections.get(studentId)
        if (pc) {
          console.log(`[Faculty WebRTC] Adding ICE candidate from student: ${studentId}`)
          try {
            await pc.addIceCandidate(data.candidate)
          } catch (e) {
            console.log(`[Faculty WebRTC] ICE candidate error for ${studentId}:`, e)
          }
        }
      }
    }
  })
}