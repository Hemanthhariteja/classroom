import { Router } from 'express';
import { simpleLogin, sendOtpHandler, verifyOtpHandler } from '../controllers/authController.js';

const router = Router();

// Simple login without OTP (primary method)
// POST /api/auth/login
router.post('/login', simpleLogin);

// Legacy OTP endpoints (kept for backward compatibility)
// Base: POST /api/auth/send-otp
router.post('/send-otp', sendOtpHandler);

// POST /api/auth/verify-otp
router.post('/verify-otp', verifyOtpHandler);

export default router;