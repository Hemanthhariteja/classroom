import twilio from 'twilio';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_FROM_NUMBER;

const client = twilio(sid, token);

async function checkTrialRestrictions() {
  try {
    console.log('=== TWILIO TRIAL ACCOUNT RESTRICTIONS ===\n');
    
    // Check account info
    const account = await client.api.accounts(sid).fetch();
    console.log('✅ Account Status:', account.status);
    console.log('🔶 Account Type:', account.type);
    
    if (account.type === 'Trial') {
      console.log('\n🚨 TRIAL ACCOUNT LIMITATIONS:');
      console.log('1. Can ONLY send SMS to verified phone numbers');
      console.log('2. All messages include "Sent from your Twilio trial account" prefix');
      console.log('3. Limited message quota');
      console.log('4. Cannot send to unverified numbers');
      
      // Check verified outgoing caller IDs
      console.log('\n=== VERIFIED PHONE NUMBERS ===');
      try {
        const callerIds = await client.outgoingCallerIds.list();
        if (callerIds.length > 0) {
          console.log('Numbers that CAN receive SMS:');
          callerIds.forEach((caller, index) => {
            console.log(`  ${index + 1}. ${caller.phoneNumber}`);
          });
        } else {
          console.log('❌ NO VERIFIED NUMBERS - You need to verify phone numbers first!');
        }
      } catch (error) {
        console.log('Error fetching verified numbers:', error.message);
      }
      
      // Check recent message attempts
      console.log('\n=== RECENT MESSAGE ATTEMPTS ===');
      const messages = await client.messages.list({ limit: 10 });
      if (messages.length > 0) {
        messages.forEach((msg, index) => {
          const status = msg.status;
          const errorCode = msg.errorCode;
          const errorMsg = msg.errorMessage;
          
          console.log(`${index + 1}. To: ${msg.to}`);
          console.log(`   Status: ${status}`);
          if (errorCode) {
            console.log(`   ❌ Error ${errorCode}: ${errorMsg}`);
          }
          console.log(`   Date: ${msg.dateCreated}`);
          console.log('   ---');
        });
      } else {
        console.log('No recent messages found');
      }
      
      console.log('\n=== SOLUTION ===');
      console.log('To send OTP to other numbers, you need to either:');
      console.log('1. Verify each phone number in Twilio Console');
      console.log('2. Upgrade to a paid Twilio account');
      console.log('3. Use mock SMS for development (set OTP_PROVIDER=mock in .env)');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkTrialRestrictions();