import 'dotenv/config';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ruralconnect';
const secret = process.env.JWT_SECRET;
const phone = process.argv[2] || '+911111111111';
const role = process.argv[3] || 'teacher';

if (!secret) {
  console.error('JWT_SECRET not set');
  process.exit(1);
}

await mongoose.connect(uri);
const users = mongoose.connection.db.collection('users');

// Ensure user exists and has desired role
const res = await users.findOneAndUpdate(
  { phone },
  { $set: { phone, role } },
  // Support both old/new driver options
  { upsert: true, returnDocument: 'after', returnOriginal: false }
);
const user = res.value ?? (await users.findOne({ phone }));
if (!user) {
  console.error('Failed to upsert/find user.');
  process.exit(1);
}
// Issue token
const token = jwt.sign({ sub: String(user._id), role: user.role }, secret, { expiresIn: '2h' });
console.log(token);

await mongoose.disconnect();