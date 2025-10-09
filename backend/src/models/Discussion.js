import mongoose from 'mongoose';

const DiscussionSchema = new mongoose.Schema({
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  createdAt: Date,
  resolved: { type: Boolean, default: false }
});

export default mongoose.model('Discussion', DiscussionSchema);