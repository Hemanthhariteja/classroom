import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ruralconnect';

await mongoose.connect(uri);

// Check the class we created to see if files were uploaded
const classData = await mongoose.connection.db
  .collection('classes')
  .findOne({ _id: new mongoose.Types.ObjectId('68cced26157d87e24fee03ce') });

console.log('Class data:', JSON.stringify(classData, null, 2));

// Also check what files exist in storage
console.log('\n=== Storage Directory Check ===');
import fs from 'fs';
import path from 'path';

const storagePath = path.join(process.cwd(), 'storage');
if (fs.existsSync(storagePath)) {
  console.log('Storage directory exists');
  const files = fs.readdirSync(storagePath, { recursive: true });
  console.log('Files in storage:', files);
} else {
  console.log('Storage directory does not exist');
}

await mongoose.disconnect();