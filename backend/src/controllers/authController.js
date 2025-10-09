import User from '../models/User.js';
import { sendOtp, verifyOtp } from '../services/otpService.js';
import { signToken } from '../config/auth.js';
import { isPhone } from '../utils/validators.js';
import { okResponse, errorResponse } from '../utils/responseHelpers.js';

export const sendOtpHandler = async (req, res) => {
  const { phone, role = 'student' } = req.body || {};
  
  if (!isPhone(phone)) {
    return res.status(400).json(errorResponse('invalid_phone'));
  }
  
  if (!['student', 'teacher'].includes(role)) {
    return res.status(400).json(errorResponse('invalid_role'));
  }
  
  try {
    await sendOtp(phone, role);
    return res.json(okResponse({ 
      message: 'otp_sent',
      role: role 
    }));
  } catch (error) {
    console.error('OTP send error:', error);
    return res.status(500).json(errorResponse('otp_send_failed'));
  }
};

export const verifyOtpHandler = async (req, res) => {
  const { phone, otp, role = 'student' } = req.body || {};
  
  if (!isPhone(phone) || !otp) {
    return res.status(400).json(errorResponse('invalid_request'));
  }
  
  if (!['student', 'teacher'].includes(role)) {
    return res.status(400).json(errorResponse('invalid_role'));
  }
  
  try {
    const otpValid = await verifyOtp(phone, otp);
    if (!otpValid) {
      return res.status(400).json(errorResponse('invalid_otp'));
    }

    // Find or create user with specified role
    let user = await User.findOne({ phone });
    if (!user) {
      user = await User.create({ phone, role });
    } else {
      // Update role if different (allows role switching)
      if (user.role !== role) {
        user.role = role;
        await user.save();
      }
    }
    
    const token = signToken(user);
    
    return res.json(okResponse({
      token,
      user: { 
        id: String(user._id), 
        phone: user.phone, 
        role: user.role 
      },
      message: 'login_successful'
    }));
  } catch (error) {
    console.error('OTP verify error:', error);
    return res.status(500).json(errorResponse('verification_failed'));
  }
};