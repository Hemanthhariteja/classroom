import '../config/env.js';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';

async function run() {
  await connectDB();
  const existing = await User.find({ phone: { $in: ['+911111111111', '+912222222222', '+913333333333'] } });
  const phones = new Set(existing.map(u => u.phone));

  const users = [];
  if (!phones.has('+911111111111')) {
    users.push(await User.create({ phone: '+911111111111', role: 'teacher', name: 'Teacher One' }));
  }
  if (!phones.has('+912222222222')) {
    users.push(await User.create({ phone: '+912222222222', role: 'student', name: 'Student A' }));
  }
  if (!phones.has('+913333333333')) {
    users.push(await User.create({ phone: '+913333333333', role: 'student', name: 'Student B' }));
  }

  console.log('Seeded users:', [...existing, ...users].map(u => ({ id: String(u._id), phone: u.phone, role: u.role })));
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});