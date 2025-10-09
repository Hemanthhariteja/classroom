import { Router } from 'express';
import { authMiddleware, requireRole } from '../config/auth.js';
import {
  createClass,
  uploads,
  uploadSlides,
  uploadSlideAudio,
  getClass,
  postDiscussion,
  listDiscussion,
  startLiveBroadcast,
  stopLiveBroadcast
} from '../controllers/classController.js';

const router = Router();

// POST /api/classes (teacher creates class) — auth required
router.post('/classes', authMiddleware, requireRole('teacher'), createClass);

// POST /api/classes/:id/slides — multipart upload
router.post('/classes/:id/slides', authMiddleware, requireRole('teacher'), uploads.slides, uploadSlides);

// POST /api/classes/:id/slide-audio — upload compressed audio per slide
router.post('/classes/:id/slide-audio', authMiddleware, requireRole('teacher'), uploads.slideAudio, uploadSlideAudio);

// GET /api/classes/:id — returns class, slides, audio keys, teacher (temporarily no auth for testing)
router.get('/classes/:id', getClass);

// Live broadcast endpoints
// POST /api/classes/:id/start-live — start live broadcast
router.post('/classes/:id/start-live', startLiveBroadcast);
// POST /api/classes/:id/stop-live — stop live broadcast
router.post('/classes/:id/stop-live', stopLiveBroadcast);

// Discussion endpoints
// POST /api/discussion/:classId — post message
router.post('/discussion/:classId', authMiddleware, postDiscussion);
// GET /api/discussion/:classId — list
router.get('/discussion/:classId', authMiddleware, listDiscussion);

export default router;