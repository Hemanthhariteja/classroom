import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema({
  title: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scheduledAt: Date,
  slides: [{ filename: String, mime: String, pageCount: Number }],
  slideAudio: [{ slideIndex: Number, audioFile: String }], // paths/keys to compressed audio
  live: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Class', ClassSchema);