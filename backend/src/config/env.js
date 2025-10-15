import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

// Generate a default JWT secret if not provided
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = crypto.randomBytes(64).toString('hex');
  console.log('[env] JWT_SECRET not set. Generated a random secret for this session.');
}

// Only warn about critical required variables
const required = ['MONGODB_URI'];
for (const key of required) {
  if (!process.env[key]) {
    console.warn(`[env] Warning: ${key} is not set. Some features may not work.`);
  }
}

// Defaults
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.STORAGE_DRIVER = process.env.STORAGE_DRIVER || 'local';
process.env.OTP_TTL_SECONDS = process.env.OTP_TTL_SECONDS || '300'; // 5 min
process.env.WS_PATH = process.env.WS_PATH || '/ws';

export default process.env;