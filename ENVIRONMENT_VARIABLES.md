# Environment Variables (Local + Vercel)

This project uses several server-side environment variables for the calling demo endpoints.

## If you see “Twilio not configured…”

That message is returned by `POST /api/call-demo` when these env vars are missing.

## Required (Call Demo)

- `TWILIO_ACCOUNT_SID`
- `TWILIO_PHONE_NUMBER`
- `OPENAI_API_KEY`

## Twilio authentication (choose ONE option)

### Option A (recommended): API Key

- `TWILIO_API_KEY_SID`
- `TWILIO_API_KEY_SECRET`

### Option B: Auth Token

- `TWILIO_AUTH_TOKEN`

## Recommended (Twilio webhook reliability)

- `NEXT_PUBLIC_BASE_URL`
  - Example: `https://your-domain.com` or `https://your-project.vercel.app`
  - Used to construct absolute webhook URLs for Twilio.

## Optional (Higher-quality voice via ElevenLabs)

- `ELEVENLABS_API_KEY`
  - If set, the call webhook will use ElevenLabs TTS audio (`/api/tts`) and Twilio will play the generated MP3.
  - If not set, calls fall back to Twilio's built-in voice (`alice`).
- `ELEVENLABS_VOICE_ID` (optional)
  - Defaults to the standard ElevenLabs "Rachel" voice if not provided.

## Where to set them

- **Vercel**: Project → **Settings** → **Environment Variables**
- **Local dev**: create `.env.local` in the project root (not committed) and put the variables above in it, then restart `npm run dev`

## Example `.env.local` (copy/paste)

Choose either **Option A** (Auth Token) or **Option B** (API Key).

```env
# Twilio
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+15551234567

# Twilio auth (choose ONE)
# Option A: Auth Token
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Option B: API Key (recommended)
# TWILIO_API_KEY_SID=SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# TWILIO_API_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# OpenAI
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Recommended for Twilio webhooks (use your public URL; for local use ngrok/tunnel)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional: ElevenLabs (higher-quality voice)
# ELEVENLABS_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
```



