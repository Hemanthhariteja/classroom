# Backend Deployment Guide - Render

## ✅ Prerequisites Completed
- [x] MongoDB Atlas setup with user `hemanthhariteja3`
- [x] IP whitelist configured (0.0.0.0/0)
- [x] JWT_SECRET auto-generation implemented
- [x] Simple login without OTP

## 🚀 Render Deployment Steps

### 1. Go to Render Dashboard
Visit: https://dashboard.render.com/

### 2. Create New Web Service
Click **"New +"** → **"Web Service"**

### 3. Connect GitHub Repository
- Select your repository: `Hemanthhariteja/classroom`
- Click **"Connect"**

### 4. Configure Service Settings

#### Basic Settings:
```
Name: classroom-backend
Region: Oregon (US West) or your preferred region
Branch: main
```

#### Build Settings:
```
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

#### Instance Type:
```
Free ($0/month) - for testing
Starter ($7/month) - for production (recommended)
```

### 5. Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these variables:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `MONGODB_URI` | `mongodb+srv://hemanthhariteja3:Classroom123@cluster0.aew1g.mongodb.net/ruralconnect?retryWrites=true&w=majority&appName=Cluster0` |
| `PORT` | `3000` |
| `STORAGE_DRIVER` | `local` |
| `OTP_PROVIDER` | `mock` |
| `OTP_TTL_SECONDS` | `300` |
| `WS_PATH` | `/ws` |

**Note:** JWT_SECRET is NOT required (auto-generated)

### 6. Deploy

Click **"Create Web Service"** at the bottom

### 7. Wait for Deployment

Render will:
1. Clone your repository
2. Install dependencies
3. Start the server
4. Provide you with a URL like: `https://classroom-backend.onrender.com`

### 8. Verify Deployment

Once deployed, test these endpoints:

```bash
# Health check
GET https://classroom-backend.onrender.com/health

# Login endpoint
POST https://classroom-backend.onrender.com/api/auth/login
Body: {
  "phone": "+919876543210",
  "role": "student"
}
```

## 🔗 After Backend Deployment

### Update Frontend Configuration

Once you have your Render backend URL (e.g., `https://classroom-backend.onrender.com`):

1. **Local Development:**
   - Update `frontend/vite.config.js` proxy to point to your Render URL (optional)
   - Or update `frontend/.env` with:
     ```
     VITE_API_BASE_URL=https://classroom-backend.onrender.com
     ```

2. **Frontend Deployment:**
   - Set environment variable in your frontend hosting:
     ```
     VITE_API_BASE_URL=https://classroom-backend.onrender.com
     ```

## 📝 Important Notes

### Free Tier Limitations:
- Server spins down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds
- Good for testing, not production

### For Production:
- Upgrade to **Starter** ($7/month) or higher
- Keeps server always running
- Better performance
- SSL/HTTPS included

## 🐛 Troubleshooting

### If deployment fails:

1. **Check Logs in Render:**
   - Go to your service → **"Logs"** tab
   - Look for error messages

2. **Common Issues:**
   - MongoDB connection timeout → Check IP whitelist
   - Authentication failed → Verify MongoDB credentials
   - Port issues → Ensure PORT=3000 is set

3. **MongoDB Atlas Checklist:**
   - ✅ Database user exists
   - ✅ Password is correct
   - ✅ IP whitelist includes `0.0.0.0/0`
   - ✅ Connection string is correct

## 🔄 Redeployment

To redeploy after making changes:

1. Push changes to GitHub
2. Render auto-deploys (if enabled)
3. Or manually click **"Manual Deploy"** → **"Deploy latest commit"**

## 📊 Monitor Your Service

In Render dashboard you can:
- View real-time logs
- Check metrics (CPU, Memory)
- See deployment history
- Configure alerts

---

## Summary

**Your backend is ready for Render!** 

Just:
1. Go to https://dashboard.render.com/
2. Follow steps above
3. Set the environment variables
4. Deploy!

Your backend URL will be: `https://classroom-backend-<random>.onrender.com`

**Next Step:** Deploy frontend to Vercel/Netlify/Azure Static Web Apps
