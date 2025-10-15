# Vercel Deployment Guide for Frontend

## ✅ Prerequisites
- GitHub account with `Hemanthhariteja/classroom` repository
- Vercel account (sign up at https://vercel.com)
- Backend deployed on Render: `https://classroom-backend-6vot.onrender.com`

## 🚀 Quick Deploy Steps

### Method 1: Deploy with Vercel CLI (Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - First time: Login to your Vercel account
   - Follow the prompts
   - It will automatically detect the configuration

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   Visit: https://vercel.com/new

2. **Import Git Repository:**
   - Click "Add New" → "Project"
   - Select "Import Git Repository"
   - Choose `Hemanthhariteja/classroom`
   - Click "Import"

3. **Configure Project:**
   
   **Framework Preset:** Vite
   
   **Root Directory:** `frontend` ⚠️ **Important!**
   
   **Build & Development Settings:**
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Development Command: npm run dev
   ```

4. **Environment Variables:**
   
   Click "Environment Variables" and add:
   
   | Name | Value | Environments |
   |------|-------|--------------|
   | `VITE_API_BASE_URL` | `https://classroom-backend-6vot.onrender.com` | Production, Preview, Development |

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live!

## 📋 Configuration Files

### ✅ Already Created:

1. **`vercel.json`** - Vercel configuration
2. **`.env`** - Local environment variables
3. **`vite.config.js`** - Build configuration

## 🔧 Vercel Configuration Details

The `vercel.json` file contains:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "env": {
    "VITE_API_BASE_URL": "https://classroom-backend-6vot.onrender.com"
  }
}
```

## 🌐 After Deployment

### Your URLs:
- **Frontend (Vercel):** `https://classroom-<random>.vercel.app`
- **Backend (Render):** `https://classroom-backend-6vot.onrender.com`

### Update Custom Domain (Optional):
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `classroom.yoursite.com`)
3. Follow DNS configuration instructions

## 🔄 Auto-Deploy Setup

Vercel automatically deploys when you push to GitHub:

1. **Production:** Pushes to `main` branch
2. **Preview:** Pushes to other branches or pull requests

## 🐛 Troubleshooting

### Issue: Build fails
**Solution:** Check that:
- Root directory is set to `frontend`
- Build command is `npm run build`
- Output directory is `dist`

### Issue: API calls fail (CORS error)
**Solution:** 
- Verify `VITE_API_BASE_URL` is set correctly
- Check backend CORS settings allow Vercel domain

### Issue: Environment variable not working
**Solution:**
- Make sure variable name starts with `VITE_`
- Redeploy after adding environment variables

## 📊 Monitor Your Deployment

In Vercel Dashboard:
- View deployment logs
- Check analytics
- Monitor performance
- See real-time errors

## 🔐 Security Best Practices

✅ Environment variables are encrypted
✅ HTTPS enabled by default
✅ Automatic SSL certificates
✅ DDoS protection included

## 🎯 Performance Optimizations

Vercel automatically provides:
- ✅ CDN distribution (global)
- ✅ Image optimization
- ✅ Edge caching
- ✅ Compression (Brotli/Gzip)
- ✅ HTTP/2 & HTTP/3

## 📱 Test Your Deployed App

1. Visit your Vercel URL
2. Test login:
   - Student login: Enter phone number
   - Teacher login: Enter phone number
3. Verify all features work

## 🔄 Update Deployment

### Option 1: Push to GitHub
```bash
git add .
git commit -m "Update frontend"
git push
```
Vercel auto-deploys!

### Option 2: Manual Deploy
In Vercel Dashboard → Deployments → "Redeploy"

## 💰 Pricing

**Free Tier Includes:**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Perfect for this project!

**Pro Tier** ($20/month):
- More bandwidth
- Team features
- Priority support

## 📋 Deployment Checklist

- [x] `vercel.json` created
- [x] Backend URL configured
- [x] Build command verified
- [x] Environment variables ready
- [ ] Deploy to Vercel
- [ ] Test production app
- [ ] Share URL with users

## 🎉 Summary

Your frontend is **Vercel-ready**! Just:

1. Go to https://vercel.com/new
2. Import `Hemanthhariteja/classroom`
3. Set root directory to `frontend`
4. Add environment variable: `VITE_API_BASE_URL`
5. Deploy!

**Result:** A blazing-fast, globally distributed classroom app! 🚀

---

## Support Links

- Vercel Docs: https://vercel.com/docs
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
- Vercel Support: https://vercel.com/support

Need help? Check the Vercel deployment logs for detailed error messages.
