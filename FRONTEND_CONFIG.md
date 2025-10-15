# Frontend Configuration for Render Backend

## ✅ Frontend is Now Connected to Render Backend!

### Backend URL:
```
https://classroom-backend-6vot.onrender.com
```

### Configuration File Created:
**File:** `frontend/.env`
```env
VITE_API_BASE_URL=https://classroom-backend-6vot.onrender.com
```

### Changes Made:

1. **Created `frontend/.env`** - Contains the Render backend URL
2. **Updated `frontend/vite.config.js`** - Removed proxy configuration (not needed for external backend)

### How to Run Locally:

1. **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   Opens at: http://localhost:5173/ (or 5174 if 5173 is busy)

2. **Test Login:**
   - Go to http://localhost:5174/login/student
   - Enter any phone number (e.g., `+919876543210`)
   - Click "Login"
   - Should connect to Render backend!

### All API Endpoints Used by Frontend:

#### Authentication:
- `POST /api/auth/login` - Simple login (no OTP)
- `POST /api/auth/send-otp` - Legacy OTP send
- `POST /api/auth/verify-otp` - Legacy OTP verify

#### Classes:
- `GET /api/classes/:id` - Get class details
- `POST /api/classes/:id/slides` - Upload slides
- `POST /api/classes/:id/slide-audio` - Upload audio
- `POST /api/classes/:id/start-live` - Start live class
- `POST /api/classes/:id/stop-live` - Stop live class

#### Quizzes:
- `POST /api/quizzes/:id/submit` - Submit quiz answers

#### Discussion:
- `POST /api/classes/:classId/discussion` - Post discussion message

#### Storage:
- `GET /storage/*` - Retrieve uploaded files (slides, audio)

#### WebSocket:
- `ws://classroom-backend-6vot.onrender.com/ws` - Real-time signaling

### Important Notes:

⚠️ **Render Free Tier:**
- Backend spins down after 15 minutes of inactivity
- First request takes ~30 seconds to wake up
- Subsequent requests are fast

✅ **For Production:**
- Upgrade to Starter ($7/month) for always-on backend
- Or use a different hosting service

### Testing Checklist:

- [ ] Login works (student & teacher)
- [ ] Class list loads
- [ ] File uploads work
- [ ] WebSocket connection works
- [ ] Live class features work

### Deployment Options for Frontend:

1. **Vercel** (Recommended)
   - Connect GitHub repo
   - Set environment variable: `VITE_API_BASE_URL=https://classroom-backend-6vot.onrender.com`
   - Auto-deploy on push

2. **Netlify**
   - Similar to Vercel
   - Great for static sites

3. **Azure Static Web Apps**
   - Good Azure integration
   - Free tier available

4. **GitHub Pages**
   - Free
   - Requires build setup

---

## Current Status:

✅ **Backend:** Deployed on Render at https://classroom-backend-6vot.onrender.com
✅ **Frontend:** Configured to use Render backend
✅ **Local Dev:** Running at http://localhost:5174/
🎯 **Next Step:** Deploy frontend to production hosting

Your classroom app is ready to use! 🚀
