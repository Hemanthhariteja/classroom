# 📱 SMS OTP Setup Guide

## 🚀 Quick Setup for Real SMS Delivery

To enable real SMS delivery to your phone, you need to configure Twilio (free tier available).

### Step 1: Create Twilio Account

1. Go to [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Sign up for a **free account**
3. Verify your phone number during signup
4. Complete the onboarding process

### Step 2: Get Twilio Credentials

1. Go to [Twilio Console Dashboard](https://console.twilio.com/)
2. Find your **Account SID** and **Auth Token**
3. Copy these values

### Step 3: Get a Phone Number

1. In Twilio Console, go to **Phone Numbers** → **Manage** → **Buy a number**
2. Choose a number (free trial includes $15.50 credit)
3. Buy the number (typically $1/month)

### Step 4: Configure Backend

Update your `backend/.env` file:

```env
# Enable Twilio SMS
OTP_PROVIDER=twilio

# Your Twilio credentials (from Console Dashboard)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_FROM_NUMBER=+1234567890
```

### Step 5: Test Configuration

1. Restart your backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Test the login with your phone number:
   - Use the format: `+[country_code][phone_number]`
   - Example: `+919876543210` (for India)
   - Example: `+1234567890` (for USA)

### Step 6: Verify SMS Delivery

1. Go to frontend: `http://localhost:5173`
2. Choose "Student Login" or "Teacher Login"
3. Enter your phone number
4. Click "Send OTP"
5. You should receive an SMS within 30 seconds

## 🔍 Troubleshooting

### Common Issues:

**"Unverified number" error:**
- Free Twilio accounts can only send to verified numbers
- Add your phone number to verified numbers in Console
- Or upgrade to paid account for unrestricted sending

**SMS not received:**
- Check phone number format includes country code
- Verify Twilio credentials are correct
- Check backend console for error messages
- Ensure you have Twilio credit balance

**"Invalid credentials" error:**
- Double-check Account SID and Auth Token
- Make sure no extra spaces in .env file
- Restart backend server after changing .env

### Testing with Mock SMS (Development):

If you want to test without real SMS:

```env
# Use mock provider (shows OTP in backend console)
OTP_PROVIDER=mock
```

Backend will show OTP in console like:
```
[MOCK SMS] To: +919876543210 | Message: Your RuralConnect Student verification code is 123456. It expires in 5 minutes.
```

## 💰 Twilio Pricing

- **Free Trial**: $15.50 credit
- **Phone Number**: ~$1/month
- **SMS**: ~$0.0075 per message
- **Perfect for development and small deployments**

## 🌍 International Support

Twilio supports SMS delivery to most countries worldwide. Check [Twilio's international pricing](https://www.twilio.com/sms/pricing) for your region.

---

**Note**: Keep your Twilio credentials secure and never commit them to version control!