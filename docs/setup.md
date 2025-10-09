# Setup Guide (Local Development)

This step-by-step guide helps you run backend + frontend locally and validate the integration.

## 0) Prerequisites

- Node.js 18+ and npm
- Git
- ffmpeg and ffprobe installed (for media tasks)
- MongoDB (local or Docker)

## 1) Clone repositories into this structure

```
ruralconnect-classroom/
├── backend/     # existing backend repository
├── frontend/    # existing frontend repository
├── docs/
└── scripts/
```

If you already have separate repos, place them under `ruralconnect-classroom/backend` and `ruralconnect-classroom/frontend`.

## 2) Environment variables

Create backend `.env` with:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/ruralconnect
JWT_SECRET=your_secret
STORAGE_DRIVER=local
STORAGE_LOCAL_PATH=./storage
TWILIO_SID=...
TWILIO_TOKEN=...
TWILIO_FROM=...
STUN_TURN_SERVERS=[{"urls":"stun:stun.l.google.com:19302"}]
```

Create frontend `.env` with:

```
VITE_API_BASE_URL=http://localhost:4000
VITE_WS_URL=ws://localhost:4000/ws
```

## 3) MongoDB

Option A: Native install and run `mongod`.

Option B: Docker Compose (optional). Create a `docker-compose.yml` in your root (or a separate folder) with:

```yaml
version: '3.8'
services:
  mongo:
    image: mongo:6
    restart: unless-stopped
    ports:
      - "27017:27017"
    volumes:
      - ./data/mongo:/data/db
```

Run:
- `docker compose up -d`

## 4) Install dependencies

- `cd backend && npm install`
- `cd ../frontend && npm install`
- Return to root: `cd ..`

## 5) Run both services

- Quickstart (manual):
  - `cd backend && npm run start`
  - `cd ../frontend && npm run dev`
  - Open http://localhost:5173

- Or use the combined launcher:
  - From root: `bash scripts/combine.sh`
  - The script:
    - starts backend and frontend in the background
    - waits for `GET /api/health`
    - opens the frontend URL in your default browser (if supported)

## 6) Verify API contract

- From root: `node scripts/verify-contract.js`
- The script calls key endpoints and asserts required fields.
- Customize target with env: `API_BASE_URL=http://localhost:4000 node scripts/verify-contract.js`

## 7) Seed data (optional)

- From root: `node scripts/seed-db.js`
- The script POSTs to `/api/admin/seed` (you may secure or disable it in production).

## 8) FFmpeg test

- Ensure you have a WAV file: `sample.wav`
- Run: `bash scripts/ffmpeg-test.sh sample.wav`
- It will produce `sample.opus` and print size and estimated bitrate.

## 9) Static demo pages

Open these directly in your browser:
- docs/static-demos/faculty-dashboard.html
- docs/static-demos/student-live.html
- docs/static-demos/offline-playback.html
  - For offline playback, click “Choose Folder” and select a lecture package folder containing `manifest.json`, `audio/*.opus`, `slides/*.jpg`.

## 10) Deployment

See docs/deploy.md for a short runbook (Heroku/DO/AWS EB for backend, Vercel/Netlify for frontend), storage adapter switch to S3, and TURN server (coturn) notes.