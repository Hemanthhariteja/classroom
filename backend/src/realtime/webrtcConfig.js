export const rtcConfig = {
  iceServers: [
    // Public STUN servers
    { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] },
    // Optional TURN (set via env)
    ...(process.env.TURN_URL && process.env.TURN_USERNAME && process.env.TURN_PASSWORD
      ? [{ urls: [process.env.TURN_URL], username: process.env.TURN_USERNAME, credential: process.env.TURN_PASSWORD }]
      : [])
  ]
};

export const sessionConfig = {
  // Placeholder for future session management parameters
  maxPeersPerClass: parseInt(process.env.MAX_PEERS_PER_CLASS || '100', 10)
};