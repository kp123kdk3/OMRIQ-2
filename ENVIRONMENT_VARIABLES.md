# Environment Variables (Local + Vercel)

This project uses several server-side environment variables for the calling demo endpoints.

## Required (Call Demo)

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`
- `ELEVENLABS_API_KEY`
- `OPENAI_API_KEY`

## Recommended (Twilio webhook reliability)

- `NEXT_PUBLIC_BASE_URL`
  - Example: `https://your-domain.com` or `https://your-project.vercel.app`
  - Used to construct absolute webhook URLs for Twilio.

## Where to set them

- **Vercel**: Project → **Settings** → **Environment Variables**
- **Local dev**: create `.env.local` (not committed) and put the variables above in it



