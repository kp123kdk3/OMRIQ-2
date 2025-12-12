# Deployment Guide

This guide will help you deploy your Omriq Hospitality AI website so it's publicly accessible to anyone.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the easiest deployment experience.

### Steps:

1. **Create a Vercel Account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or email

2. **Install Vercel CLI (Optional but helpful):**
   ```bash
   npm install -g vercel
   ```

3. **Deploy from Terminal:**
   ```bash
   # Make sure you're in the project directory
   cd "c:\Users\kpopov2\OneDrive - Babson College\Desktop\Agent Website"
   
   # Run vercel
   vercel
   ```
   
   - Follow the prompts
   - It will ask if you want to deploy, say "Yes"
   - Your site will be live at a URL like: `https://your-project-name.vercel.app`

4. **Or Deploy via Vercel Dashboard:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository (GitHub/GitLab/Bitbucket)
   - Or drag and drop your project folder
   - Vercel will auto-detect Next.js and configure everything

5. **Add Environment Variables:**
   - Go to your project settings on Vercel
   - Navigate to "Environment Variables"
   - Add all your `.env.local` variables:
     ```
     NEXT_PUBLIC_CALENDLY_URL
     TWILIO_ACCOUNT_SID
     TWILIO_AUTH_TOKEN
     TWILIO_PHONE_NUMBER
     ELEVENLABS_API_KEY
     OPENAI_API_KEY
     NEXT_PUBLIC_BASE_URL (set this to your Vercel URL)
     ```

6. **Redeploy:**
   - After adding environment variables, trigger a new deployment
   - Your site will be live!

### Custom Domain (Optional):
- In Vercel project settings → Domains
- Add your custom domain (e.g., `omriq.ai` or `omriq-hospitality.com`)
- Follow DNS setup instructions

---

## Option 2: Deploy to Netlify

1. **Create Netlify Account:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for free

2. **Deploy:**
   - Go to "Add new site" → "Import an existing project"
   - Connect your Git repository OR
   - Drag and drop your project folder

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables:**
   - Go to Site settings → Environment variables
   - Add all your variables

---

## Option 3: Deploy to Other Platforms

### Railway:
- Sign up at [railway.app](https://railway.app)
- Connect GitHub repo
- Auto-deploys Next.js

### Render:
- Sign up at [render.com](https://render.com)
- Create new Web Service
- Connect repository
- Build: `npm install && npm run build`
- Start: `npm start`

---

## Quick Deploy with Vercel (Fastest Method)

### Using Git:

1. **Push to GitHub (if not already):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Vercel auto-detects Next.js
   - Add environment variables
   - Deploy!

### Without Git (Direct Upload):

1. **Zip your project** (excluding node_modules and .next)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click "Deploy" → "Browse"
4. Select your zip file or drag & drop
5. Add environment variables
6. Deploy!

---

## Important After Deployment:

1. **Update Base URL:**
   - Set `NEXT_PUBLIC_BASE_URL` to your deployed URL
   - Example: `https://omriq-website.vercel.app`

2. **Test All Features:**
   - ✅ Website loads
   - ✅ Calendly booking works
   - ✅ AI call demo (if configured)

3. **Monitor:**
   - Check Vercel dashboard for analytics
   - Monitor API usage for OpenAI/ElevenLabs/Twilio

---

## Free Tier Limits:

**Vercel:**
- ✅ Unlimited deployments
- ✅ Custom domains
- ✅ SSL certificates
- ✅ 100GB bandwidth/month
- ✅ Perfect for your use case!

---

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

Your website will be accessible at a public URL like:
`https://your-project-name.vercel.app`

