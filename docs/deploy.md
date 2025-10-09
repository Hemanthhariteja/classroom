# Deployment Runbook

This is a concise guide for deploying the backend and frontend, switching storage to S3, and enabling TURN.

## Backend deployment options

Heroku
- Set up a Heroku app with Node.js buildpack.
- Set config vars:
  - PORT (Heroku provides), MONGO_URI, JWT_SECRET
  - STORAGE_DRIVER=s3 with S3 credentials (see below)
  - STUN_TURN_SERVERS JSON
  - TWILIO_* (if using SMS OTP)
- Make sure your server binds to `process.env.PORT` and `0.0.0.0`.

DigitalOcean App Platform / Droplet
- App Platform: connect repo, set environment, expose HTTP port.
- Droplet: use pm2/systemd; place reverse proxy (nginx) in front.
- Open WebSocket upgrade on the same origin.

AWS Elastic Beanstalk
- Node.js platform; configure environment variables.
- Security group allows inbound HTTP(S).
- Sticky sessions not required for WebSocket but ensure reverse proxy supports upgrades.

CORS and WebSocket
- Set CORS origin to your frontend domain.
- Ensure proxy (nginx/Heroku router) allows `Connection: upgrade` and `Upgrade: websocket`.

## Frontend deployment

Vercel or Netlify
- Build command: `npm run build` (from frontend)
- Output: `dist/`
- Set env vars:
  - VITE_API_BASE_URL=https://api.example.com
  - VITE_WS_URL=wss://api.example.com/ws
- For localStorage/PWA needs, ensure HTTPS and correct origin matching API CORS.

## Storage Adapter: switch to S3

Env for backend:

```
STORAGE_DRIVER=s3
S3_BUCKET=your-bucket
S3_REGION=ap-south-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

Implementation notes:
- Store package paths like `s3://bucket/packages/<id>/manifest.json`.
- Expose signed URLs for downloads or make objects public under a prefix.
- Preserve relative paths in manifest (`slides/*.jpg`, `audio/*.opus`).

## TURN server (coturn)

Why: In some networks, STUN-only fails. Add TURN for reliable media relay.

- Install coturn on a small VM with public IP.
- Example minimal config (/etc/turnserver.conf):
  - listening-port=3478
  - fingerprint
  - lt-cred-mech
  - realm=example.com
  - user=turnuser:turnpassword
  - external-ip=<PUBLIC_IP>
- Start: `turnserver -c /etc/turnserver.conf`
- Provide servers to frontend via backend env `STUN_TURN_SERVERS`, for example:

```json
[
  { "urls": "stun:stun.l.google.com:19302" },
  { "urls": "turn:turn.example.com:3478", "username": "turnuser", "credential": "turnpassword" }
]
```

Security:
- Use long, random TURN credentials.
- Consider TURN REST API for time-limited credentials.

## Logging and monitoring

- Enable structured logs (JSON) with request IDs.
- Health endpoint `/api/health` for uptime monitors.
- Track package creation durations and ffmpeg failures.

## Scaling

- Stateless backend instances behind a load balancer; sticky sessions not required if signaling is room-aware via broadcast hub or per-room coordinator.
- For WebSocket scale-out, use Redis pub/sub or a managed WebSocket hub to fan out events across instances.