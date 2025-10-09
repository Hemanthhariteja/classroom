import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ruralconnect';

await mongoose.connect(uri);

// Generate a valid ObjectId
const classId = new mongoose.Types.ObjectId();

// Create a test class with a proper ObjectId
const result = await mongoose.connection.db
  .collection('classes')
  .insertOne({
    _id: classId,
    title: 'Test Class for Development',
    teacher: new mongoose.Types.ObjectId('68ccb67224cdecafb4a499a1'), // Your user ID
    scheduledAt: new Date(),
    slides: [],
    slideAudio: [],
    live: false,
    createdAt: new Date()
  });

console.log('Class created with ID:', classId.toString());
await mongoose.disconnect();