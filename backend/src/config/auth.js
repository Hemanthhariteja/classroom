import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
export const OTP_TTL_SECONDS = parseInt(process.env.OTP_TTL_SECONDS || '300', 10);

export function signToken(user) {
  const payload = { sub: String(user._id), role: user.role, phone: user.phone };
  // Short-lived token is fine or longer; choose reasonable
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export function authMiddleware(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ status: 'error', message: 'unauthorized' });
  }
  try {
    const decoded = verifyToken(token);
    req.user = { id: decoded.sub, role: decoded.role, phone: decoded.phone };
    next();
  } catch (e) {
    return res.status(401).json({ status: 'error', message: 'invalid_token' });
  }
}

export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ status: 'error', message: 'unauthorized' });
    if (req.user.role !== role) return res.status(403).json({ status: 'error', message: 'forbidden' });
    next();
  };
}

export function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}