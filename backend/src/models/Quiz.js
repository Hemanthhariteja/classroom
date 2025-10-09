import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  question: String,
  choices: [String],
  answers: [Number], // correct indexes
  allowOffline: { type: Boolean, default: true },
  createdAt: Date,
  // Optional: store responses inline for simplicity
  responses: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      answers: [Number],
      attemptMeta: mongoose.Schema.Types.Mixed,
      createdAt: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.model('Quiz', QuizSchema);