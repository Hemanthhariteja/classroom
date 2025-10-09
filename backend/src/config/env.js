import dotenv from 'dotenv';

dotenv.config();

const required = ['MONGODB_URI', 'JWT_SECRET'];
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