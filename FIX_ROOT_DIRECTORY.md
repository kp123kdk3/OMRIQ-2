# Fix: Root Directory Issue on Vercel

## The Problem:
Vercel can't find your `package.json` because your Next.js project is in a subdirectory, not at the repository root.

## The Solution:

When you configure your Vercel project, you need to set the **Root Directory** to point to where your `package.json` file is.

### Step-by-Step Fix:

1. **Go to your Vercel project dashboard**
2. **Click on your project** (or create a new one)
3. **Go to Settings** → **General**
4. **Scroll down to "Root Directory"**
5. **Set it to:**
   ```
   OneDrive - Babson College/Desktop/Agent Website
   ```
   (This is the path relative to your repository root)

6. **Click "Save"**
7. **Go to Deployments tab**
8. **Redeploy** (click "..." on latest deployment → "Redeploy")

### Alternative: When Creating New Project

If you're creating a new project on Vercel:

1. **Import your repository** (kp123kdk3/Agent-Oriq)
2. **In the "Configure Project" step**, before clicking Deploy:
   - Find **"Root Directory"** field
   - Click **"Edit"** next to it
   - Enter: `OneDrive - Babson College/Desktop/Agent Website`
   - Click **"Continue"**
3. **Then deploy**

### How to Verify the Path:

The Root Directory should point to the folder that contains:
- ✅ `package.json`
- ✅ `app/` directory
- ✅ `components/` directory
- ✅ `next.config.js`

### If the Path Has Spaces:

The path `OneDrive - Babson College/Desktop/Agent Website` has spaces, which should work fine in Vercel's Root Directory field. Just type it exactly as shown.

---

**After setting the Root Directory correctly, your build should succeed!** 🎉

