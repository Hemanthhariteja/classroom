import twilio from 'twilio';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_FROM_NUMBER;

const client = twilio(sid, token);

async function checkTwilioLimitations() {
  try {
    console.log('=== Checking Twilio Account Limitations ===');
    
    // Check account status
    const account = await client.api.accounts(sid).fetch();
    console.log('Account Status:', account.status);
    console.log('Account Type:', account.type);
    
    // Check if it's a trial account
    if (account.type === 'Trial') {
      console.log('🔶 TRIAL ACCOUNT DETECTED');
      console.log('Trial accounts have restrictions:');
      console.log('- Can only send SMS to verified phone numbers');
      console.log('- Limited number of messages');
      console.log('- Messages include "Sent from your Twilio trial account" prefix');
      
      // List verified phone numbers
      console.log('\n=== Verified Phone Numbers ===');
      const verifiedNumbers = await client.validationRequests.list();
      if (verifiedNumbers.length > 0) {
        verifiedNumbers.forEach((num, index) => {
          console.log(`${index + 1}. ${num.phoneNumber} (Status: ${num.validationCode ? 'Verified' : 'Pending'})`);
        });
      } else {
        console.log('No verified numbers found');
      }
      
      // Check outgoing caller IDs (verified numbers)
      try {
        const callerIds = await client.outgoingCallerIds.list();
        console.log('\n=== Outgoing Caller IDs (Verified Numbers) ===');
        if (callerIds.length > 0) {
          callerIds.forEach((caller, index) => {
            console.log(`${index + 1}. ${caller.phoneNumber} (${caller.friendlyName})`);
          });
        } else {
          console.log('No verified caller IDs found');
        }
      } catch (error) {
        console.log('Could not fetch caller IDs:', error.message);
      }
    } else {
      console.log('✅ FULL ACCOUNT - No trial restrictions');
    }
    
    // Check balance
    const balance = await client.balance.fetch();
    console.log('\n=== Account Balance ===');
    console.log('Balance:', balance.balance, balance.currency);
    
    // Check recent messages
    console.log('\n=== Recent Messages (Last 5) ===');
    const messages = await client.messages.list({ limit: 5 });
    messages.forEach((msg, index) => {
      console.log(`${index + 1}. To: ${msg.to} | Status: ${msg.status} | Error: ${msg.errorCode || 'None'}`);
      if (msg.errorMessage) {
        console.log(`   Error Message: ${msg.errorMessage}`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error checking account:', error.message);
  }
}

checkTwilioLimitations();