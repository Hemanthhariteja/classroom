# Scripts & Documentation Quick Reference

## 🛠️ Scripts Usage

### `scripts/combine.sh`
**Purpose**: Start both backend and frontend servers simultaneously
```bash
bash scripts/combine.sh
```
- Starts backend on port 3000
- Starts frontend on port 5173
- Waits for backend health check
- Opens browser automatically
- Handles graceful shutdown with Ctrl+C

### `scripts/verify-contract.js`
**Purpose**: Validate all API endpoints and contracts
```bash
node scripts/verify-contract.js
```
Tests:
- Health endpoint
- OTP authentication flow
- Class management APIs
- Media packaging endpoints
- Offline sync functionality

### `scripts/ffmpeg-test.sh`
**Purpose**: Test media processing capabilities
```bash
bash scripts/ffmpeg-test.sh sample.wav
```
Tests:
- Opus codec conversion
- Audio compression ratios
- Slide image optimization

### `scripts/seed-db.js`
**Purpose**: Populate database with sample data
```bash
node scripts/seed-db.js
```
Creates:
- Sample users (teachers and students)
- Sample classes
- Sample quizzes and discussions

## 📚 Documentation Links

### Core Documentation
- **[Architecture](docs/architecture.md)** - System design and components
- **[Setup Guide](docs/setup.md)** - Detailed installation instructions
- **[API Contracts](docs/api-contracts.md)** - Complete API specifications
- **[Workflow](docs/workflow.md)** - Development workflow and practices
- **[Media Guide](docs/media-guide.md)** - Audio/video processing guide
- **[Deployment](docs/deploy.md)** - Production deployment strategies

### Interactive Demos
- **Faculty Dashboard**: `docs/static-demos/faculty-dashboard.html`
- **Student Live Class**: `docs/static-demos/student-live.html`
- **Offline Playback**: `docs/static-demos/offline-playback.html`

## 🚀 Quick Commands

### Development
```bash
# Start both servers (automated)
bash scripts/combine.sh

# Or start individually:
cd backend && npm run dev    # Port 3000
cd frontend && npm run dev   # Port 5173
```

### Testing
```bash
# Test API contracts
node scripts/verify-contract.js

# Test media processing
bash scripts/ffmpeg-test.sh sample.wav

# Seed database
node scripts/seed-db.js
```

### Environment Setup
```bash
# Copy environment templates
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Install dependencies
cd backend && npm install
cd frontend && npm install
```