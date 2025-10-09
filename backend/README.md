# RuralConnect Classroom Backend

Express.js + Node.js + MongoDB backend with:
- OTP-based authentication (mock SMS or Twilio)
- REST APIs for classes, slides, audio, quizzes, and discussion
- Media service (FFmpeg wrapper) to compress audio to Opus/OGG and prepare lecture packages
- WebRTC signalling server over WebSocket (audio-only focus)
- Storage adapter (local disk or S3-compatible)

## Quick Start

1) Install dependencies:

```bash
cd ruralconnect-classroom/backend
npm install
```

2) Configure environment:

Copy .env.example to .env and fill required values.

3) Start MongoDB and run:

```bash
npm run start
```

Server: http://localhost:$PORT (default 3000)
WebSocket: ws://localhost:$PORT/ws

4) Seed sample users:

```bash
npm run seed
```

Creates one teacher and two students.

## Environment Variables

See `.env.example` for all variables. Minimum required:
- MONGODB_URI
- JWT_SECRET

Optional:
- STORAGE_DRIVER=local|s3
- Twilio: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, OTP_PROVIDER=twilio
- S3: S3_ENDPOINT, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, S3_PUBLIC_BASE_URL
- TURN servers: TURN_URL, TURN_USERNAME, TURN_PASSWORD
- FFMPEG_PATH (path to ffmpeg binary)

## Running Notes

- Start server: `npm run start` (or `npm run dev` with nodemon).
- Ensure FFmpeg is installed and available on PATH (or configure FFMPEG_PATH).
- Local storage is served from `/storage/:key` path.
- When using S3, responses will include public URLs, and `/storage/:key` redirects to them.

## REST API

All responses use `{ "status": "ok" | "error", ... }`.

Auth
- POST /api/auth/send-otp
  - Request: `{ "phone": "+919876543210" }`
  - Response: `{ "status":"ok", "message":"otp_sent" }`

- POST /api/auth/verify-otp
  - Request: `{ "phone":"+919876543210", "otp":"123456" }`
  - Response: `{ "status":"ok", "token":"<JWT>", "user": { "id": "...", "phone":"...","role":"student" } }`

Classes
- POST /api/classes (teacher only, Bearer auth)
  - Request: `{ "title":"Intro to AI", "scheduledAt":"2025-10-29T09:00:00Z" }`
  - Response: `{ "status":"ok", "class": { "id":"...", "title":"..."} }`

- POST /api/classes/:id/slides (teacher, multipart)
  - Field: `slides` (one or multiple files; images or PDF)
  - Response: `{ "status":"ok", "slides":[{"id":0,"key":"slides/<classId>/...jpg"}, ...] }`

- POST /api/classes/:id/slide-audio (teacher, multipart)
  - Fields: `slideIndex` (number), `audio` (file)
  - Compresses to Opus/OGG; stores and associates to slide index.
  - Response: `{ "status":"ok", "audio": { "slideIndex": 0, "audioFile": "audio/<classId>/..." } }`

- GET /api/classes/:id
  - Response: `{ "status":"ok", "class": { "id":"...", "title":"...", "scheduledAt": "...", "teacher":{...}, "slides":[...], "slideAudio":[...], "live": false } }`

Discussion
- POST /api/discussion/:classId (auth)
  - Request: `{ "text": "Hello class!" }`
  - Response: `{ "status":"ok", "message": { "id":"...", "user":"...", "text":"...", "createdAt":"..." } }`

- GET /api/discussion/:classId (auth)
  - Query: `?page=1&limit=20`
  - Response: `{ "status":"ok", "messages":[...], "page":1, "limit":20 }`

Quizzes
- POST /api/quizzes (teacher)
  - Request: `{ "classId":"...", "question":"...", "choices":["A","B","C"], "answers":[1], "allowOffline":true }`
  - Response: `{ "status":"ok", "quiz": { ... } }`

- GET /api/quizzes/:classId (auth)
  - Response: `{ "status":"ok", "quizzes":[ {...}, ... ] }`

- POST /api/quizzes/:id/submit (auth)
  - Request: `{ "answers":[0,2], "attemptMeta": { "latencyMs": 1200 } }`
  - Response: `{ "status":"ok", "submission": { "quizId":"...", "userId":"...", "answers":[...], "attemptMeta":{...}, "createdAt":"..." } }`

## WebSocket Signalling

Endpoint: `ws://<host>/ws`

Message envelope:
- Join room:
  `{ "type":"join", "classId":"...", "userId":"...", "role":"teacher|student" }`

- Offer:
  `{ "type":"offer", "to":"<userId>", "from":"<userId>", "sdp":"..." }`

- Answer:
  `{ "type":"answer", "to":"<userId>", "from":"<userId>", "sdp":"..." }`

- Candidate:
  `{ "type":"candidate", "to":"<userId>", "from":"<userId>", "candidate":"..." }`

- Leave:
  `{ "type":"leave", "userId":"..." }`

Server maintains in-memory `classId -> peers[]` map. No persistence.

## Media Service (FFmpeg + Opus)

Examples used:

- Compress to Opus OGG (24 kHz mono):
```
ffmpeg -i input.wav -vn -c:a libopus -ar 24000 -ac 1 -b:a 24k output.opus
```

- Alternative OGG:
```
ffmpeg -i input.mp3 -c:a libopus -b:a 28k -vbr on -compression_level 10 output.ogg
```

- Slides (PDF -> JPG @ 300px width):
```
ffmpeg -i slides.pdf -vf "scale=300:-1" slide_%03d.jpg
```

Lecture package:
- `mediaService.createLecturePackage(classId, destKeyPrefix)` packages `manifest.json` and (if local storage) binary assets. With S3, binary assets are referenced via URLs in the manifest.

## Curl Examples

Send OTP:
```bash
curl -X POST http://localhost:3000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phone":"+919876543210"}'
```

Verify OTP:
```bash
curl -X POST http://localhost:3000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"phone":"+919876543210","otp":"123456"}'
```

Create Class (teacher token required):
```bash
curl -X POST http://localhost:3000/api/classes \
  -H "Authorization: Bearer <JWT>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Intro to AI","scheduledAt":"2025-10-29T09:00:00Z"}'
```

Upload Slides:
```bash
curl -X POST http://localhost:3000/api/classes/<CLASS_ID>/slides \
  -H "Authorization: Bearer <JWT>" \
  -F "slides=@/path/slide1.jpg" \
  -F "slides=@/path/slide2.jpg"
```

Upload Slide Audio:
```bash
curl -X POST http://localhost:3000/api/classes/<CLASS_ID>/slide-audio \
  -H "Authorization: Bearer <JWT>" \
  -F "slideIndex=0" \
  -F "audio=@/path/audio.wav"
```

## Notes

- OTPs are stored in MongoDB with TTL (5 minutes).
- Replace mock SMS with Twilio by setting `OTP_PROVIDER=twilio` and Twilio env vars.
- Storage adapter:
  - Local: files under `backend/storage/` and served at `/storage/:key`.
  - S3: files uploaded to your bucket; URLs are returned in API responses.
