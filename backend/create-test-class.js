import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ruralconnect';

await mongoose.connect(uri);

// Create a test class with the ID we're trying to use
const result = await mongoose.connection.db
  .collection('classes')
  .insertOne({
    _id: new mongoose.Types.ObjectId('class-001'.padEnd(24, '0').substring(0, 24).split('').map((c, i) => c === '-' ? '0' : c).join('')),
    title: 'Test Class for Development',
    teacher: new mongoose.Types.ObjectId('68ccb67224cdecafb4a499a1'), // Your user ID
    scheduledAt: new Date(),
    slides: [],
    slideAudio: [],
    live: false,
    createdAt: new Date()
  });

console.log('Class created:', result);
await mongoose.disconnect();