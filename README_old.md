# RuralConnect Classroom

🎓 **Low-bandwidth, audio-first educational platform** designed for rural and remote learning environments. This comprehensive repository includes a full-stack application with complete documentation, deployment scripts, and development tools.

## 📁 Project Structure

```
ruralconnect-classroom/
├── backend/              # Node.js + Express + MongoDB API
│   ├── src/             # Source code
│   ├── storage/         # Local file storage
│   └── package.json     # Backend dependencies
├── frontend/            # React + Vite PWA
│   ├── src/             # React components & pages
│   ├── public/          # Static assets & service worker
│   └── package.json     # Frontend dependencies
├── docs/                # 📚 Complete documentation
│   ├── architecture.md  # System architecture & design
│   ├── api-contracts.md # API endpoint specifications
│   ├── setup.md         # Detailed setup guide
│   ├── workflow.md      # Development workflow
│   ├── media-guide.md   # Audio/video processing guide
│   ├── deploy.md        # Production deployment guide
│   └── static-demos/    # Standalone HTML demos
├── scripts/             # 🛠️ Development & deployment tools
│   ├── combine.sh       # Start both servers simultaneously
│   ├── verify-contract.js # API contract validation
│   ├── ffmpeg-test.sh   # Media processing test
│   └── seed-db.js       # Database seeding utility
└── README.md           # This file
```

## 🚀 Quick Start

### Method 1: Individual Setup

**1. Configure Environment Variables**

Backend `.env` (in `backend/` directory):
```env
# Server Configuration
PORT=3000
NODE_ENV=development
JWT_SECRET=your_strong_secret_key_here

# Database
MONGODB_URI=mongodb://localhost:27017/ruralconnect

# Authentication & OTP
OTP_TTL_SECONDS=300
OTP_PROVIDER=mock
# Twilio (for production SMS):
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_FROM_NUMBER=your_twilio_phone

# Storage
STORAGE_DRIVER=local
STORAGE_LOCAL_PATH=./storage
# S3 (for production):
S3_ENDPOINT=your_s3_endpoint
S3_REGION=your_region
S3_ACCESS_KEY_ID=your_access_key
S3_SECRET_ACCESS_KEY=your_secret_key
S3_BUCKET=your_bucket_name

# Media Processing
FFMPEG_PATH=ffmpeg

# WebRTC
STUN_TURN_SERVERS=[{"urls":"stun:stun.l.google.com:19302"}]
```

Frontend `.env` (in `frontend/` directory):
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000/ws
VITE_PWA_NAME="RuralConnect Classroom"
```

**2. Install Dependencies & Start Servers**

```bash
# Backend
cd backend
npm install
npm run dev                    # Development with hot reload

# Frontend (in new terminal)
cd ../frontend
npm install
npm run dev                    # Vite dev server
```

### Method 2: Automated Setup (Recommended)

Use the provided automation script:

```bash
# Make script executable (Linux/macOS)
chmod +x scripts/combine.sh

# Start both servers simultaneously
bash scripts/combine.sh
```

This script will:
- ✅ Start both backend and frontend servers
- ✅ Wait for backend health check
- ✅ Automatically open frontend in browser
- ✅ Handle graceful shutdown

### Method 3: PowerShell (Windows)

```powershell
# Backend
cd backend; npm install; npm run dev

# Frontend (new terminal)
cd frontend; npm install; npm run dev
```

4) Verify API contracts

```
node scripts/verify-contract.js
```

5) Test FFmpeg

```
bash scripts/ffmpeg-test.sh sample.wav
```

6) Static demo pages

Open:
- docs/static-demos/faculty-dashboard.html
- docs/static-demos/student-live.html
- docs/static-demos/offline-playback.html (use “Choose Folder” to select a package with manifest.json)

## Documentation

- Architecture: docs/architecture.md
- Workflow + Manifest schema: docs/workflow.md
- Setup guide: docs/setup.md
- API contracts (authoritative): docs/api-contracts.md
- Media guide (Opus, FFmpeg): docs/media-guide.md
- Deployment runbook: docs/deploy.md

## Notes

- Target Opus bitrate: 20–24 kbps mono (≈10–11 MB/hour).
- Slides: 300–480px width, JPEG quality 40–60.
- WebSocket signaling at `/ws`.
- Offline sync via `/api/sync/outbox`.

Happy teaching!