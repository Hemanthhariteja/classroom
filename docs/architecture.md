# RuralConnect Classroom — Architecture

This document describes the end-to-end architecture, the components involved, networking/ports for local development, and key decisions (audio-first using Opus).

## High-level diagram

```mermaid
flowchart LR
  subgraph Client[Client Devices]
    FE[Frontend (Vite dev server)]
    PWA[Offline Cache + Outbox]
    AUDIO[HTML5 Audio + WebRTC]
  end

  subgraph BE[Backend API]
    API[Express API / WebSocket / Signaling]
    MediaSvc[Media Service (transcode, package)]
    Auth[OTP Auth]
  end

  subgraph Data[Data + Storage]
    Mongo[(MongoDB)]
    Storage[(Storage Adapter: Local FS or S3)]
  end

  FE <-- HTTP(JSON)/WebSocket --> API
  PWA <-- sync --> API
  AUDIO <-- WebRTC Signaling --> API
  API --> Mongo
  MediaSvc --> Storage
  FE --> Storage
```

## Components

- Frontend (Vite dev server)
  - Local dev server (default: http://localhost:5173).
  - Reads API base URL from env (`VITE_API_BASE_URL`).
  - WebSocket signaling at `VITE_WS_URL`.
  - Supports offline playback (lecture package with `manifest.json`).

- Backend (Express + WebSocket)
  - REST endpoints for auth (OTP), classes, media packaging, and offline sync.
  - WebSocket endpoint `/ws` for signaling (join/leave, RTC offers/answers/ICE, quiz push).
  - Media service: invokes ffmpeg to transcode audio to Opus and build lecture packages.
  - Exposes health check at `/api/health`.
  - Persists data in MongoDB.

- Storage adapter
  - Local: stores under `./storage` in dev.
  - S3: production-ready storage via `STORAGE_DRIVER=s3`.
  - Lecture packages are folders containing `manifest.json`, `/audio/*.opus`, and `/slides/*.jpg`.

- Signaling and WebRTC
  - WebSocket used for room membership and WebRTC signaling events.
  - STUN/TURN servers provided via `STUN_TURN_SERVERS` env JSON.

- Offline sync
  - Frontend maintains an outbox of events while offline (e.g., quiz answers, discussion posts).
  - When reconnected, the outbox is POSTed to `/api/sync/outbox` and acknowledged.

## Key decision: Audio-first with Opus

- Rationale: Maximize reach in low-bandwidth environments.
- Codec: Opus mono at 20–24 kbps, VBR on, compression level 10.
- Target size: ≤10–11 MB/hour (speech-only).
- Slides distributed as compressed JPG thumbnails (300–480px width, quality 40–60).

## Local development ports and endpoints

- Backend HTTP: http://localhost:4000
  - Health: GET /api/health → `{ "status": "ok" }`
  - WebSocket: ws://localhost:4000/ws
- Frontend: http://localhost:5173 (Vite default)

Exact env examples are in docs/setup.md.