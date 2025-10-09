import { Router } from 'express';
import { sendOtpHandler, verifyOtpHandler } from '../controllers/authController.js';

const router = Router();

// Base: POST /api/auth/send-otp
router.post('/send-otp', sendOtpHandler);

// POST /api/auth/verify-otp
router.post('/verify-otp', verifyOtpHandler);

export default router;