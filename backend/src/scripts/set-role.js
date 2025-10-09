import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ruralconnect';
const [, , phone, role = 'teacher'] = process.argv;

if (!phone) {
  console.error('Usage: node src/scripts/set-role.js "<phone>" [role]');
  process.exit(1);
}

await mongoose.connect(uri);
const res = await mongoose.connection.db
  .collection('users')
  .updateOne({ phone }, { $set: { role } });

console.log(res);
await mongoose.disconnect();