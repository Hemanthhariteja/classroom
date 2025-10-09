# API Contracts (Authoritative)

This document defines the endpoints, request/response examples, and WebSocket message formats. Both frontend and backend must adhere to this spec.

Base URL (local dev): `http://localhost:4000`

WebSocket (local dev): `ws://localhost:4000/ws`

All JSON payloads are UTF-8 encoded and use `Content-Type: application/json`. Authenticated endpoints expect `Authorization: Bearer <JWT>` unless noted as public.

---

## Health

GET /api/health

- 200 OK

```json
{ "status": "ok" }
```

---

## Authentication (OTP)

POST /api/auth/send-otp

- Request

```json
{ "phone": "+15551234567" }
```

- Response (200)

```json
{ "status": "sent", "ttlSec": 120 }
```

POST /api/auth/verify-otp

- Request

```json
{ "phone": "+15551234567", "code": "123456" }
```

- Response (200)

```json
{ "status": "verified", "token": "<jwt>" }
```

GET /api/auth/me

- Headers: Authorization: Bearer <jwt>
- Response (200)

```json
{
  "id": "u_123",
  "phone": "+15551234567",
  "role": "faculty", 
  "name": "Dr. Smith"
}
```

---

## Classes

GET /api/classes

- Response (200)

```json
[
  {
    "id": "cls_001",
    "title": "Intro to AI",
    "startsAt": "2025-10-29T09:00:00Z",
    "status": "scheduled" 
  }
]
```

POST /api/classes

- Headers: Auth required
- Request

```json
{ "title": "Intro to AI", "startsAt": "2025-10-29T09:00:00Z" }
```

- Response (201)

```json
{
  "id": "cls_001",
  "title": "Intro to AI",
  "startsAt": "2025-10-29T09:00:00Z",
  "status": "scheduled"
}
```

GET /api/classes/:id

- Response (200)

```json
{
  "id": "cls_001",
  "title": "Intro to AI",
  "startsAt": "2025-10-29T09:00:00Z",
  "status": "live",
  "slides": [
    { "index": 0, "name": "Slide 1", "image": "slides/000.jpg" }
  ]
}
```

POST /api/classes/:id/slides

- Headers: Auth required
- Request (multipart/form-data): files[] (images or PDF)
- Response (200)

```json
{ "status": "ok", "count": 12 }
```

POST /api/classes/:id/start

- Headers: Auth required
- Response (200)

```json
{ "status": "live" }
```

POST /api/classes/:id/stop

- Headers: Auth required
- Response (200)

```json
{ "status": "stopped" }
```

---

## Media Packaging

POST /api/media/package

- Headers: Auth required
- Request

```json
{ "classId": "cls_001", "titleOverride": "Intro to AI - 2025-10-29" }
```

- Response (201)

```json
{
  "id": "pkg_cls_001_20251029T090000Z",
  "classId": "cls_001",
  "title": "Intro to AI - 2025-10-29",
  "slides": [
    { "index": 0, "image": "slides/000.jpg", "audio": "audio/000.opus", "durationSec": 30 }
  ],
  "totalDurationSec": 3600,
  "createdAt": "2025-10-29T09:00:00Z",
  "version": "1.0.0",
  "downloadUrl": "/api/media/packages/pkg_cls_001_20251029T090000Z/manifest.json"
}
```

GET /api/media/packages/:id/manifest.json

- Response (200)

```json
{
  "id": "pkg_cls_001_20251029T090000Z",
  "classId": "cls_001",
  "title": "Intro to AI - 2025-10-29",
  "slides": [
    { "index": 0, "image": "slides/000.jpg", "audio": "audio/000.opus", "durationSec": 30 }
  ],
  "totalDurationSec": 3600,
  "createdAt": "2025-10-29T09:00:00Z",
  "version": "1.0.0"
}
```

GET /api/media/packages/:id/audio/:index.opus

- Returns audio file

GET /api/media/packages/:id/slides/:index.jpg

- Returns slide image

---

## Offline Sync

GET /api/sync/clock

- Response (200)

```json
{ "now": "2025-10-29T09:00:00Z" }
```

POST /api/sync/outbox

- Request (array of queued events)

```json
{
  "clientId": "dev_abc",
  "items": [
    {
      "id": "out_001",
      "type": "quiz.answer",
      "classId": "cls_001",
      "payload": { "questionId": "q1", "answer": "B" },
      "createdAt": "2025-10-29T09:10:00Z"
    }
  ]
}
```

- Response (200)

```json
{ "accepted": 1, "failed": 0, "ids": ["out_001"] }
```

POST /api/sync/ack

- Request

```json
{ "ids": ["out_001", "out_002"] }
```

- Response (200)

```json
{ "status": "ok" }
```

---

## WebSocket Signaling (/ws)

Connect: `ws://localhost:4000/ws?token=<jwt>`

Messages are JSON with shape:

```json
{ "type": "<eventType>", "payload": { ... } }
```

Common events:

- join_class

```json
{ "type": "join_class", "payload": { "classId": "cls_001", "role": "student" } }
```

- leave_class

```json
{ "type": "leave_class", "payload": { "classId": "cls_001" } }
```

- rtc_offer

```json
{
  "type": "rtc_offer",
  "payload": { "classId": "cls_001", "to": "peerA", "sdp": "v=0..." }
}
```

- rtc_answer

```json
{
  "type": "rtc_answer",
  "payload": { "classId": "cls_001", "to": "peerB", "sdp": "v=0..." }
}
```

- ice_candidate

```json
{
  "type": "ice_candidate",
  "payload": { "classId": "cls_001", "to": "peerB", "candidate": { "candidate": "...", "sdpMid": "0", "sdpMLineIndex": 0 } }
}
```

- quiz_push (server → clients)

```json
{
  "type": "quiz_push",
  "payload": { "classId": "cls_001", "questionId": "q1", "question": "2+2=?", "options": ["3", "4", "5"] }
}
```

- quiz_result (client → server)

```json
{
  "type": "quiz_result",
  "payload": { "classId": "cls_001", "questionId": "q1", "answer": "4" }
}
```

Notes:
- Server should broadcast membership updates and presence pings.
- Clients should handle reconnect and replay any missed state (or rely on REST for resync).