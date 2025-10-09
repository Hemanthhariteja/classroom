# SIH Project - Rural Classroom Platform

🎓 **A comprehensive digital classroom platform designed for rural education** with offline capabilities, live streaming, AI assistance, and low-bandwidth optimization. Built for Smart India Hackathon (SIH) to bridge the digital education gap in rural areas.

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

## 🔧 Development Tools & Scripts

### Available Scripts (in `scripts/` directory)

| Script | Purpose | Usage |
|--------|---------|-------|
| **`combine.sh`** | Start both servers simultaneously | `bash scripts/combine.sh` |
| **`verify-contract.js`** | Validate API endpoints and contracts | `node scripts/verify-contract.js` |
| **`ffmpeg-test.sh`** | Test media processing capabilities | `bash scripts/ffmpeg-test.sh sample.wav` |
| **`seed-db.js`** | Populate database with sample data | `node scripts/seed-db.js` |

### API Contract Verification

Ensure your backend APIs are working correctly:

```bash
# Set API base URL (if different from default)
export API_BASE_URL=http://localhost:3000

# Run contract verification
node scripts/verify-contract.js
```

This will test:
- ✅ Health endpoint (`/api/health`)
- ✅ OTP send/verify endpoints  
- ✅ Class management APIs
- ✅ Media packaging endpoints
- ✅ Offline sync functionality

### Media Processing Test

Verify FFmpeg installation and audio processing:

```bash
# Test with sample audio file
bash scripts/ffmpeg-test.sh path/to/sample.wav

# This will test:
# - Opus codec conversion
# - Audio compression ratios
# - Slide image optimization
```

## 📚 Complete Documentation

### Core Documentation (in `docs/` directory)

| Document | Description |
|----------|-------------|
| **[Architecture](docs/architecture.md)** | System design, components, and data flow |
| **[Setup Guide](docs/setup.md)** | Detailed installation and configuration |
| **[API Contracts](docs/api-contracts.md)** | Complete API endpoint specifications |
| **[Workflow](docs/workflow.md)** | Development workflow and best practices |
| **[Media Guide](docs/media-guide.md)** | Audio/video processing and optimization |
| **[Deployment](docs/deploy.md)** | Production deployment strategies |

### Interactive Demos

Static HTML demos (no backend required):
- **Faculty Dashboard**: `docs/static-demos/faculty-dashboard.html`
- **Student Live Class**: `docs/static-demos/student-live.html` 
- **Offline Playback**: `docs/static-demos/offline-playback.html`

Open these directly in your browser to see the UI without running servers.

## 🎯 Technical Specifications

### Audio Optimization
- **Target Opus bitrate**: 20–24 kbps mono (≈10–11 MB/hour)
- **Compression**: VBR enabled, level 10 for maximum efficiency
- **Format**: `.opus` files for web compatibility

### Image Optimization  
- **Slide dimensions**: 300–480px width
- **JPEG quality**: 40–60 for optimal size/quality balance
- **Loading**: Lazy loading implemented for bandwidth savings

### Network & Connectivity
- **WebSocket signaling**: Available at `/ws` endpoint
- **Offline sync**: Via `/api/sync/outbox` for queued actions
- **Data usage**: ~180KB/minute for live audio streaming
- **PWA caching**: Intelligent offline-first caching strategy

## 🚀 Production Deployment

See detailed deployment guide: **[docs/deploy.md](docs/deploy.md)**

### Quick Production Checklist
- [ ] Configure production MongoDB instance
- [ ] Set up Twilio for real SMS (replace mock provider)
- [ ] Configure S3 or cloud storage
- [ ] Set strong JWT secrets
- [ ] Enable HTTPS/WSS for security
- [ ] Set up proper CORS policies
- [ ] Configure STUN/TURN servers for WebRTC

## 🤝 Contributing

1. Read the **[architecture documentation](docs/architecture.md)** 
2. Check **[workflow guide](docs/workflow.md)** for development practices
3. Run **`node scripts/verify-contract.js`** to ensure API compatibility
4. Test media processing with **`bash scripts/ffmpeg-test.sh`**

## 📞 Support & Resources

- **📖 Full Documentation**: Browse the `docs/` directory
- **🛠️ Development Scripts**: Check `scripts/` for automation tools
- **🎨 UI Demos**: View `docs/static-demos/` for design references
- **🔧 API Testing**: Use `scripts/verify-contract.js` for validation

---

**Happy teaching! 🎓** This platform is designed to bring quality education to every corner of the world, regardless of connectivity constraints.

## 🔧 Development Tools & Scripts

### Available Scripts (in `scripts/` directory)

| Script | Purpose | Usage |
|--------|---------|-------|
| **`combine.sh`** | Start both servers simultaneously | `bash scripts/combine.sh` |
| **`verify-contract.js`** | Validate API endpoints and contracts | `node scripts/verify-contract.js` |
| **`ffmpeg-test.sh`** | Test media processing capabilities | `bash scripts/ffmpeg-test.sh sample.wav` |
| **`seed-db.js`** | Populate database with sample data | `node scripts/seed-db.js` |

### API Contract Verification

Ensure your backend APIs are working correctly:

```bash
# Set API base URL (if different from default)
export API_BASE_URL=http://localhost:3000

# Run contract verification
node scripts/verify-contract.js
```

This will test:
- ✅ Health endpoint (`/api/health`)
- ✅ OTP send/verify endpoints  
- ✅ Class management APIs
- ✅ Media packaging endpoints
- ✅ Offline sync functionality

### Media Processing Test

Verify FFmpeg installation and audio processing:

```bash
# Test with sample audio file
bash scripts/ffmpeg-test.sh path/to/sample.wav

# This will test:
# - Opus codec conversion
# - Audio compression ratios
# - Slide image optimization
```

## 📚 Complete Documentation

### Core Documentation (in `docs/` directory)

| Document | Description |
|----------|-------------|
| **[Architecture](docs/architecture.md)** | System design, components, and data flow |
| **[Setup Guide](docs/setup.md)** | Detailed installation and configuration |
| **[API Contracts](docs/api-contracts.md)** | Complete API endpoint specifications |
| **[Workflow](docs/workflow.md)** | Development workflow and best practices |
| **[Media Guide](docs/media-guide.md)** | Audio/video processing and optimization |
| **[Deployment](docs/deploy.md)** | Production deployment strategies |

### Interactive Demos

Static HTML demos (no backend required):
- **Faculty Dashboard**: `docs/static-demos/faculty-dashboard.html`
- **Student Live Class**: `docs/static-demos/student-live.html` 
- **Offline Playback**: `docs/static-demos/offline-playback.html`

Open these directly in your browser to see the UI without running servers.

## 🎯 Technical Specifications

### Audio Optimization
- **Target Opus bitrate**: 20–24 kbps mono (≈10–11 MB/hour)
- **Compression**: VBR enabled, level 10 for maximum efficiency
- **Format**: `.opus` files for web compatibility

### Image Optimization  
- **Slide dimensions**: 300–480px width
- **JPEG quality**: 40–60 for optimal size/quality balance
- **Loading**: Lazy loading implemented for bandwidth savings

### Network & Connectivity
- **WebSocket signaling**: Available at `/ws` endpoint
- **Offline sync**: Via `/api/sync/outbox` for queued actions
- **Data usage**: ~180KB/minute for live audio streaming
- **PWA caching**: Intelligent offline-first caching strategy

## 🚀 Production Deployment

See detailed deployment guide: **[docs/deploy.md](docs/deploy.md)**

### Quick Production Checklist
- [ ] Configure production MongoDB instance
- [ ] Set up Twilio for real SMS (replace mock provider)
- [ ] Configure S3 or cloud storage
- [ ] Set strong JWT secrets
- [ ] Enable HTTPS/WSS for security
- [ ] Set up proper CORS policies
- [ ] Configure STUN/TURN servers for WebRTC

## 🤝 Contributing

1. Read the **[architecture documentation](docs/architecture.md)** 
2. Check **[workflow guide](docs/workflow.md)** for development practices
3. Run **`node scripts/verify-contract.js`** to ensure API compatibility
4. Test media processing with **`bash scripts/ffmpeg-test.sh`**

## 📞 Support & Resources

- **📖 Full Documentation**: Browse the `docs/` directory
- **🛠️ Development Scripts**: Check `scripts/` for automation tools
- **🎨 UI Demos**: View `docs/static-demos/` for design references
- **🔧 API Testing**: Use `scripts/verify-contract.js` for validation

---

**Happy teaching! 🎓** This platform is designed to bring quality education to every corner of the world, regardless of connectivity constraints.