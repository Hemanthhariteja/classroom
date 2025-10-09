# Workflow: From Faculty Recording to Student Offline Playback

This document describes the end-to-end workflow: creation and packaging of lectures, distribution, and offline playback, including the lecture package manifest schema used by both frontend and backend.

## 1) Faculty recording and slides

- Faculty initiates a class session (live or pre-recorded).
- Audio is captured live (WebRTC) or uploaded as WAV/MP3 for packaging.
- Slides are uploaded as images (or extracted from PDFs and downscaled to 300–480px width).

## 2) Media service transcode and packaging

- Audio segments per slide are transcoded to Opus at 20–24 kbps mono with VBR on.
- Each slide has a matched `audio/<index>.opus` and `slides/<index>.jpg`.
- A package is created as a folder or zip:
  - manifest.json (authoritative metadata schema below)
  - audio/*.opus (one per slide)
  - slides/*.jpg (one per slide)
- The package is stored using the Storage Adapter (local FS in dev, S3 in prod).

## 3) Distribution

- The backend serves a download link for the lecture package (either a zip or a directory index if local).
- Students can download the package once and keep it on device storage.

## 4) Student offline playback

- The offline playback page reads `manifest.json`, presents slides, and plays aligned audio segments.
- Playback does not require any network connectivity after download.
- Quiz responses and discussions are queued in an offline outbox, then synced later via `/api/sync/outbox`.

---

## Lecture Package Manifest Schema

Both backend and frontend must read/write these EXACT fields and structure.

```json
{
  "id": "pkg_<classId>_<timestamp>",
  "classId": "<classId>",
  "title": "Intro to AI - 2025-10-29",
  "slides": [
    { "index": 0, "image": "slides/000.jpg", "audio": "audio/000.opus", "durationSec": 30 },
    { "index": 1, "image": "slides/001.jpg", "audio": "audio/001.opus", "durationSec": 40 }
  ],
  "totalDurationSec": 3600,
  "createdAt": "2025-10-29T09:00:00Z",
  "version": "1.0.0"
}
```

Notes:
- `id` is unique, `pkg_<classId>_<timestamp>` for traceability.
- `slides[index]` must be continuous from 0..N-1.
- `image` and `audio` use relative paths within the package.
- `durationSec` is per-slide playback duration (integer seconds).
- `totalDurationSec` is end-to-end audio duration.

---

## Example flow with endpoints

- Faculty creates class: POST /api/classes
- Uploads slides: POST /api/classes/:id/slides
- Starts recording/live: WebSocket /ws join_class, then RTC offer/answer exchange
- Stops session and requests package: POST /api/media/package { classId }
- Student downloads package files: GET /api/media/packages/:id/manifest.json and assets
- Offline playback: reads package from local storage
- Offline quiz responses: stored locally, later POST /api/sync/outbox when online

---

## QA checklist (pre-release)

Manual
- OTP flows: send and verify
- Class create → upload slides → start/stop session → package creation
- Download lecture package and open in docs/static-demos/offline-playback.html using “Choose Folder”
- Live session: two browsers join via WebRTC; verify audio and slide sync
- Disconnect/reconnect scenarios: verify rejoin and state resync
- Quiz: answer during intermittent connectivity; verify offline enqueue and later sync
- Discussion/messages: offline outbox flush upon reconnection

Automated (see scripts/verify-contract.js)
- Health endpoint returns { status: "ok" }
- OTP send/verify endpoints respond with expected fields
- Classes list returns array with required fields
- Media package endpoint returns manifest with required schema
- Sync outbox accepts and acknowledges items