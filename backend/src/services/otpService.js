import crypto from 'crypto';
import twilio from 'twilio';
import mongoose from 'mongoose';
import { OTP_TTL_SECONDS } from '../config/auth.js';

// Lightweight OTP model with TTL index (Mongo)
let OtpModel;
function getOtpModel() {
  if (OtpModel) return OtpModel;
  const schema = new mongoose.Schema({
    phone: { type: String, index: true },
    otp: String,
    expiresAt: { type: Date, index: { expires: 0 } }
  });
  OtpModel = mongoose.model('OtpCode', schema);
  return OtpModel;
}

// Adapters
function mockAdapter() {
  return {
    async send(to, message) {
      console.log(`[MOCK SMS] To: ${to} | Message: ${message}`);
      return { sid: `mock_${Date.now()}` };
    }
  };
}

function twilioAdapter() {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (!sid || !token || !from) {
    console.warn('Twilio env missing, falling back to mock adapter.');
    return mockAdapter();
  }
  const client = twilio(sid, token);
  return {
    async send(to, message) {
      try {
        return await client.messages.create({ to, from, body: message });
      } catch (error) {
        console.error('[TWILIO ERROR]', error.message);
        console.log('[FALLBACK] Using mock SMS due to Twilio error');
        // Fallback to mock on any Twilio error
        const mockProvider = mockAdapter();
        return await mockProvider.send(to, message);
      }
    }
  };
}

// Dynamic provider selection - check every time with explicit logging
function getProvider() {
  const providerType = process.env.OTP_PROVIDER || 'mock';
  console.log(`[OTP SERVICE] Using provider: ${providerType}`);
  
  if (providerType === 'twilio') {
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_FROM_NUMBER;
    
    if (!sid || !token || !from) {
      console.warn('[OTP SERVICE] Twilio env missing, falling back to mock adapter.');
      return mockAdapter();
    }
    
    console.log('[OTP SERVICE] Twilio configuration found, using Twilio adapter');
    return twilioAdapter();
  }
  
  console.log('[OTP SERVICE] Using mock adapter');
  return mockAdapter();
}

function generateOtp() {
  // 6-digit numeric
  return ('' + Math.floor(100000 + Math.random() * 900000));
}

export async function sendOtp(phone, role = 'student') {
  // Clean phone number - remove spaces, dashes, etc. but keep + and digits
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  
  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + OTP_TTL_SECONDS * 1000);
  const OtpCode = getOtpModel();
  await OtpCode.deleteMany({ phone: cleanPhone }); // clear previous
  await OtpCode.create({ phone: cleanPhone, otp, expiresAt });
  
  const roleText = role === 'teacher' ? 'Teacher' : 'Student';
  const message = `Your RuralConnect ${roleText} verification code is ${otp}. It expires in ${Math.floor(OTP_TTL_SECONDS / 60)} minutes.`;
  
  const provider = getProvider(); // Get provider dynamically
  await provider.send(cleanPhone, message);
  return true;
}

export async function verifyOtp(phone, otp) {
  // Clean phone number consistently
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  
  const OtpCode = getOtpModel();
  const record = await OtpCode.findOne({ phone: cleanPhone, otp });
  if (!record) return false;
  if (record.expiresAt < new Date()) {
    await OtpCode.deleteMany({ phone: cleanPhone });
    return false;
  }
  await OtpCode.deleteMany({ phone: cleanPhone }); // one-time use
  return true;
}