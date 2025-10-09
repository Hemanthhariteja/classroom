import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI missing');
    process.exit(1);
  }
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000
    });
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('MongoDB connection error:', e);
    process.exit(1);
  }
}