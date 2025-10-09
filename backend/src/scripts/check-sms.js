#!/usr/bin/env node
/**
 * SMS Configuration Diagnostic Tool
 * Run this to check your SMS setup
 */

import '../config/env.js'; // Load environment variables the same way as app.js

console.log('🔍 SMS Configuration Diagnostic\n');

const provider = process.env.OTP_PROVIDER;
console.log(`📡 OTP Provider: ${provider || 'NOT SET'}`);

if (provider === 'mock') {
  console.log('✅ Mock mode is active');
  console.log('📝 OTPs will appear in backend console');
  console.log('💡 To enable real SMS, change OTP_PROVIDER to "twilio"');
} else if (provider === 'twilio') {
  console.log('📱 Twilio mode is active');
  
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  
  console.log(`📋 Account SID: ${sid && sid !== 'your_twilio_account_sid_here' ? '✅ Set' : '❌ Missing/Placeholder'}`);
  console.log(`🔑 Auth Token: ${token && token !== 'your_twilio_auth_token_here' ? '✅ Set' : '❌ Missing/Placeholder'}`);
  console.log(`📞 From Number: ${from && from !== 'your_twilio_phone_number_here' ? '✅ Set' : '❌ Missing/Placeholder'}`);
  
  if (!sid || !token || !from || sid === 'your_twilio_account_sid_here' || token === 'your_twilio_auth_token_here' || from === 'your_twilio_phone_number_here') {
    console.log('\n❌ Twilio credentials incomplete!');
    console.log('🔧 System will fall back to mock mode');
    console.log('\n📚 Setup Guide:');
    console.log('1. Sign up at https://www.twilio.com/try-twilio');
    console.log('2. Get credentials from https://console.twilio.com/');
    console.log('3. Buy a phone number');
    console.log('4. Update your .env file with real values');
  } else {
    console.log('\n✅ Twilio credentials configured!');
    console.log('📱 SMS should be delivered to your phone');
  }
} else {
  console.log('❌ Invalid OTP provider');
  console.log('✏️  Set OTP_PROVIDER to "mock" or "twilio"');
}

console.log('\n🚀 Current Status:');
if (provider === 'mock') {
  console.log('📊 Mode: Development (Mock SMS)');
  console.log('📍 OTP Location: Backend console (look for [MOCK SMS])');
  console.log('📱 Test Number: Any number (e.g., +919876543210)');
} else if (provider === 'twilio' && process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_ACCOUNT_SID !== 'your_twilio_account_sid_here') {
  console.log('📊 Mode: Production (Real SMS)');
  console.log('📍 OTP Location: Your actual phone');
  console.log('📱 Test Number: Your real phone number');
} else {
  console.log('📊 Mode: Development (Mock SMS - Fallback)');
  console.log('📍 OTP Location: Backend console (look for [MOCK SMS])');
  console.log('📱 Test Number: Any number (e.g., +919876543210)');
}

console.log('\n� How to test:');
console.log('1. Go to http://localhost:5173');
console.log('2. Choose Student or Teacher login');
console.log('3. Enter phone number');
console.log('4. Look for OTP in backend console or your phone');