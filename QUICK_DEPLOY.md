# Quick Deploy Instructions

## 🚀 Fastest Way to Make Your Website Public

### Option 1: Deploy via Vercel Website (No Command Line)

1. **Go to:** [vercel.com/new](https://vercel.com/new)
2. **Sign up/Login** with GitHub, GitLab, or email
3. **Click "Browse"** or drag your project folder
   - OR connect a Git repository if you have one
4. **Vercel auto-detects** Next.js - no configuration needed!
5. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add these (from your `.env.local`):
     ```
     NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/popovbusiness11/30min
     TWILIO_ACCOUNT_SID=your_value
     TWILIO_AUTH_TOKEN=your_value
     TWILIO_PHONE_NUMBER=your_value
     ELEVENLABS_API_KEY=your_value
     OPENAI_API_KEY=your_value
     ```
6. **Click "Deploy"**
7. **Done!** Your site will be live at: `https://your-project-name.vercel.app`

---

### Option 2: Deploy via Command Line

```bash
# Make sure you're in the project folder
cd "c:\Users\kpopov2\OneDrive - Babson College\Desktop\Agent Website"

# Run vercel
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (choose your account)
# - Link to existing project? No
# - Project name? (press Enter for default)
# - Directory? (press Enter for current)
# - Override settings? No

# After deployment, add environment variables:
vercel env add NEXT_PUBLIC_CALENDLY_URL
vercel env add TWILIO_ACCOUNT_SID
vercel env add TWILIO_AUTH_TOKEN
vercel env add TWILIO_PHONE_NUMBER
vercel env add ELEVENLABS_API_KEY
vercel env add OPENAI_API_KEY

# Then redeploy
vercel --prod
```

---

## 🌐 Your Website URL

After deployment, you'll get a URL like:
- `https://omriq-hospitality-ai-website.vercel.app`
- Or: `https://your-custom-name.vercel.app`

**This URL is publicly accessible to anyone in the world!**

---

## 🔄 Update After Deployment

Once deployed, update `NEXT_PUBLIC_BASE_URL` in Vercel:
- Go to Project Settings → Environment Variables
- Set: `NEXT_PUBLIC_BASE_URL=https://your-actual-vercel-url.vercel.app`
- Redeploy

---

## ✨ Custom Domain (Optional)

Want a custom domain like `omriq.ai`?
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS instructions
4. Done!

---

**That's it! Your website will be live and shareable with investors worldwide! 🎉**

