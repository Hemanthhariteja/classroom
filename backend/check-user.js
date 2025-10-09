import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ruralconnect';

await mongoose.connect(uri);
const user = await mongoose.connection.db
  .collection('users')
  .findOne({ phone: '+91 9025178896' });

console.log('User found:', JSON.stringify(user, null, 2));
await mongoose.disconnect();