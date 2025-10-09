import './src/config/db.js';
import Class from './src/models/Class.js';

setTimeout(async () => {
  try {
    const classes = await Class.find({});
    console.log('=== Available Classes ===');
    classes.forEach((cls, index) => {
      console.log(`${index + 1}. ID: ${cls._id}`);
      console.log(`   Title: ${cls.title || 'Untitled'}`);
      console.log(`   Slides: ${cls.slides ? cls.slides.length : 0}`);
      console.log(`   Created: ${cls.createdAt}`);
      console.log('   ---');
    });
    
    if (classes.length === 0) {
      console.log('❌ No classes found in database');
      console.log('Classes need to be created by teachers first');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}, 1000);