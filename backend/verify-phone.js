import twilio from 'twilio';
import dotenv from 'dotenv';
import readline from 'readline';

// Load environment variables
dotenv.config();

const sid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(sid, token);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function verifyPhoneNumber() {
  console.log('=== Twilio Phone Number Verification ===\n');
  
  // Get phone number to verify
  const phoneNumber = await new Promise((resolve) => {
    rl.question('Enter the phone number to verify (with country code, e.g., +919591264170): ', resolve);
  });
  
  try {
    console.log(`\nSending verification code to ${phoneNumber}...`);
    
    // Start verification
    const verification = await client.validationRequests.create({
      phoneNumber: phoneNumber,
      method: 'sms' // or 'call'
    });
    
    console.log('✅ Verification code sent!');
    console.log('📱 Check your phone for the verification code');
    
    // Get verification code from user
    const verificationCode = await new Promise((resolve) => {
      rl.question('\nEnter the verification code you received: ', resolve);
    });
    
    // This is a simplified version - Twilio's validation API works differently
    // The number gets verified when you enter the correct code in their console
    console.log('\n✅ Please complete verification in Twilio Console');
    console.log('🌐 Go to: https://console.twilio.com/us1/develop/phone-numbers/manage/verified');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code === 21211) {
      console.log('This phone number is invalid');
    } else if (error.code === 21212) {
      console.log('This phone number is already verified');
    }
  }
  
  rl.close();
}

verifyPhoneNumber();