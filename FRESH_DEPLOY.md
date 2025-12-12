# Fresh Vercel Deployment Guide

Follow these steps to deploy your website to Vercel from scratch.

## Step 1: Go to Vercel

1. Open your browser and go to: **[vercel.com/new](https://vercel.com/new)**
2. **Sign in** or create a new account (use GitHub, GitLab, or email)

## Step 2: Import Your Repository

1. Click **"Import Git Repository"**
2. If you see your GitHub repositories, select: **`kp123kdk3/Hotel-Agent`**
3. If you don't see it, click **"Configure GitHub App"** and authorize Vercel
4. Once selected, click **"Import"**

## Step 3: Configure Project

Vercel should auto-detect Next.js, but verify these settings:

### Important Settings:

1. **Project Name:** 
   - Keep default or change to something like: `omriq-website`

2. **Root Directory:**
   - **Leave this EMPTY** (unless the website files are in a subfolder in GitHub)
   - Vercel will auto-detect the Next.js project

3. **Framework Preset:**
   - Should show: **Next.js**
   - If not, select it manually

4. **Build and Output Settings:**
   - Build Command: `npm run build` (should be auto-filled)
   - Output Directory: `.next` (should be auto-filled)
   - Install Command: `npm install` (should be auto-filled)

## Step 4: Add Environment Variables (Optional for Now)

You can add these now or later:

1. Click **"Environment Variables"** section
2. Add these one by one (click "Add Another" for each):

   ```
   Name: NEXT_PUBLIC_CALENDLY_URL
   Value: https://calendly.com/popovbusiness11/30min
   
   Name: TWILIO_ACCOUNT_SID
   Value: (leave empty for now or add your Twilio account SID)
   
   Name: TWILIO_AUTH_TOKEN
   Value: (leave empty for now or add your Twilio auth token)
   
   Name: TWILIO_PHONE_NUMBER
   Value: (leave empty for now or add your Twilio phone number)
   
   Name: ELEVENLABS_API_KEY
   Value: (leave empty for now or add your ElevenLabs API key)
   
   Name: OPENAI_API_KEY
   Value: (leave empty for now or add your OpenAI API key)
   ```

   **Note:** You can deploy without these - the website will work, but the AI calling feature won't be active until you add the API keys.

## Step 5: Deploy!

1. Click the **"Deploy"** button (bottom right)
2. Wait 1-2 minutes for the build to complete
3. You'll see the deployment progress in real-time

## Step 6: Get Your Live URL

Once deployment completes:

1. You'll see: **"Congratulations! Your project has been deployed"**
2. Click the **"Visit"** button or copy the URL
3. Your site will be live at: `https://your-project-name.vercel.app`

## Step 7: Test Your Website

1. Visit the URL Vercel provided
2. Check that:
   - ✅ Homepage loads
   - ✅ All sections are visible
   - ✅ Navigation works
   - ✅ Calendly booking section works (if you added the env variable)

## If Something Goes Wrong:

1. **Check Build Logs:**
   - Go to your project on Vercel dashboard
   - Click on the deployment
   - Check "Build Logs" tab for any errors

2. **Common Issues:**
   - **404 Error:** Make sure Root Directory is empty or set correctly
   - **Build Fails:** Check that all dependencies are in `package.json`
   - **TypeScript Errors:** Should be fixed already (we tested locally)

## Adding Environment Variables Later:

1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add the variables
4. Go to Deployments tab
5. Click "..." on latest deployment → "Redeploy"

---

**That's it! Your website will be live and accessible to anyone with the URL! 🎉**

