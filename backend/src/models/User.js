import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true }, // E.164 optional
  role: { type: String, enum: ['teacher', 'student'], default: 'student' },
  name: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);