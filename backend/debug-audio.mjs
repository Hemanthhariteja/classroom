import mongoose from 'mongoose';
import './src/config/db.js';
import Class from './src/models/Class.js';

setTimeout(async () => {
  try {
    const classData = await Class.findById('68cced26157d87e24fee03ce');
    console.log('Class found:', !!classData);
    console.log('slideAudio:', JSON.stringify(classData?.slideAudio, null, 2));
    console.log('Audio file paths:', classData?.slideAudio?.map(audio => audio.audioFile));
  } catch (error) {
    console.error('Error:', error);
  }
  process.exit();
}, 2000);