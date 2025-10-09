import { Router } from 'express';
import { authMiddleware, requireRole } from '../config/auth.js';
import { createQuiz, listByClass, submitQuiz } from '../controllers/quizController.js';

const router = Router();

// POST /api/quizzes — create quiz (teacher only)
router.post('/quizzes', authMiddleware, requireRole('teacher'), createQuiz);

// GET /api/quizzes/:classId — list quiz objects for class
router.get('/quizzes/:classId', authMiddleware, listByClass);

// POST /api/quizzes/:id/submit — student submit
router.post('/quizzes/:id/submit', authMiddleware, submitQuiz);

export default router;