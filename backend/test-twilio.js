// Quick Twilio test script
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

console.log('Testing Twilio Configuration...');
console.log('OTP_PROVIDER:', process.env.OTP_PROVIDER);
console.log('TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID);
console.log('TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN ? 'Set' : 'Not Set');
console.log('TWILIO_FROM_NUMBER:', process.env.TWILIO_FROM_NUMBER);

try {
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  console.log('Twilio client created successfully!');
  
  // Test sending a message
  const message = await client.messages.create({
    to: '+919025178896', // Replace with your phone number
    from: process.env.TWILIO_FROM_NUMBER,
    body: 'Test SMS from RuralConnect - Your Twilio is working!'
  });
  
  console.log('SMS sent successfully! SID:', message.sid);
} catch (error) {
  console.error('Twilio error:', error.message);
}