# RuralConnect Classroom — Frontend

Low-bandwidth, audio-first React app with TailwindCSS + shadcn/ui-style components. PWA-enabled with offline caching and background sync.

## Features

- Dark neon theme (inspired by the provided dashboard)
- PWA: manifest + service worker with runtime caching and background sync
- Audio-first live class via WebRTC, with HTTP/HLS fallback
- Offline download & playback of lecture packages (IndexedDB)
- OTP login flow (JWT stored in IndexedDB with light obfuscation)
- Discussion board with offline outbox
- Quiz modal; offline submissions saved and flushed via Background Sync

## Quick start

1. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
2. Install and run:
   ```bash
   npm install
   npm run dev
   ```
3. Build:
   ```bash
   npm run build
   npm run preview
   ```

## Environment variables

Create `.env` in this folder:

```
VITE_API_BASE_URL=https://api.example.com
VITE_WS_URL=wss://api.example.com/ws
VITE_PWA_NAME="RuralConnect Classroom"
```

> The PWA name is primarily reflected in the manifest. Vite only exposes variables prefixed with `VITE_`.

## Project structure

See `/src` for pages and components. Faculty and Student flows are code-split and lazy loaded.

- `src/api/api.js` — API wrapper:
  - `setAuthToken(token)` saves obfuscated JWT in IndexedDB
  - `post('/auth/send-otp', { phone })`
  - `post('/auth/verify-otp', { phone, otp })`
  - `get('/classes/:id')`
  - `post('/classes', {...})`
  - `upload('/classes/:id/slides', formData)`
  - `upload('/classes/:id/slide-audio', formData)`
  - returns backend envelopes `{status, ...}`

- `src/utils/offline.js` — IndexedDB stores:
  - `lecturePackages` `{ id, classId, name, slides:[], audioKeys:[], manifest }`
  - `pendingQuizSubmissions` `{ quizId, answers, createdAt }`
  - `discussionOutbox` `{ classId, text, createdAt }`
  - Sync helpers trigger on `online` and SW `sync` events.

- `public/service-worker.js` — runtime caching:
  - Cache-first for lecture packages and slide images
  - Network-first for API with fallback for cached `GET /classes/:id`
  - Background Sync tag `sync-quiz-submissions`
  - Message passing to app to request quiz sync

## Security note

JWT is stored in IndexedDB and lightly obfuscated (XOR+base64). This is not cryptographically secure and is chosen to keep dependencies small for rural devices. For production, use WebCrypto (AES-GCM) with a user-provided secret or platform keystore.

## Mock data

- `public/mock/` contains minimal JSON for demo without a backend:
  - `classes.json`, `discussion.json`, `quizzes.json`

## Sample screens

- Faculty: Login, Dashboard, Upload Slides, Record per-slide Audio, Go Live
- Student: Live Class (audio + slide viewer + chat + quiz popup), Offline Download & Playback, Discussion Board

## PWA notes

The service worker registers in `src/main.jsx`. To update immediately, the app can post a message `SW_SKIP_WAITING`. Background sync is used to flush pending quiz submissions when available and falls back to online event syncing.

## Low-bandwidth design

- Audio-only by default (prefers Opus/ogg)
- Thumbnails + `loading="lazy"` for slides
- Minimal SVG/UI, dark neon theme
- Estimated data-rate shown in dashboard (~180KB/min @ 24kbps Opus)
