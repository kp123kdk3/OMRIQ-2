# Voice AI Calling Setup Guide

This guide will help you set up real AI voice calling for the demo section using **ElevenLabs** for voice synthesis.

## Setup: Twilio + ElevenLabs + OpenAI

The website uses **ElevenLabs** for high-quality AI voice synthesis, **Twilio** for telephony, and **OpenAI** for conversation intelligence.

### Prerequisites:
- Twilio account ([sign up here](https://www.twilio.com/try-twilio))
- ElevenLabs API key ([get it here](https://elevenlabs.io))
- OpenAI API key ([get it here](https://platform.openai.com))

Vapi.ai is a purpose-built platform for AI voice calls. It's the easiest to set up.

### Step-by-Step Setup:

1. **Get Twilio Account & Phone Number:**
   - Sign up at [twilio.com](https://www.twilio.com/try-twilio)
   - Go to Phone Numbers → Buy a Number
   - Choose a number (you'll use this to make calls)
   - Copy your:
     - Account SID (from Dashboard)
     - Auth Token (from Dashboard)
     - Phone Number (format: +1234567890)

2. **Get ElevenLabs API Key:**
   - Sign up at [elevenlabs.io](https://elevenlabs.io)
   - Go to Profile → API Key
   - Copy your API key

3. **Get OpenAI API Key:**
   - Sign up at [platform.openai.com](https://platform.openai.com)
   - Go to API Keys section
   - Create a new API key
   - Copy the key (starts with `sk-`)

4. **Install Dependencies:**
   ```bash
   npm install
   ```
   (Already added: twilio, openai, elevenlabs)

5. **Configure Environment Variables:**
   - Update your `.env.local` file:
     ```env
     # Twilio Configuration
     TWILIO_ACCOUNT_SID=your_account_sid_here
     TWILIO_AUTH_TOKEN=your_auth_token_here
     TWILIO_PHONE_NUMBER=+1234567890
     
     # ElevenLabs Configuration
     ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
     
     # OpenAI Configuration
     OPENAI_API_KEY=your_openai_api_key_here
     
     # Base URL for webhooks (use your deployed URL or ngrok for local testing)
     NEXT_PUBLIC_BASE_URL=https://your-domain.com
     # For local testing with ngrok: NEXT_PUBLIC_BASE_URL=https://your-ngrok-url.ngrok.io
     ```

6. **For Local Development:**
   - The webhooks need to be publicly accessible
   - Use [ngrok](https://ngrok.com) to expose your local server:
     ```bash
     ngrok http 3000
     ```
   - Use the ngrok URL in `NEXT_PUBLIC_BASE_URL`

7. **Restart your dev server:**
   ```bash
   npm run dev
   ```

### How It Works:
1. Visitor enters phone number → API initiates Twilio call
2. Twilio calls the number → Connects to webhook handler
3. Webhook uses OpenAI → Generates conversational responses
4. ElevenLabs converts text → High-quality AI voice
5. Twilio streams audio → Visitor hears natural AI voice

---

## Testing the Integration

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the demo section** on your website

3. **Enter a phone number** in E.164 format:
   - US: `+15551234567`
   - Include country code with `+`

4. **Click "Receive AI Call Demo"**

5. **Answer the call** when it comes through

6. **Try asking questions like:**
   - "What amenities does the hotel have?"
   - "Tell me about the spa"
   - "What's the pool like?"
   - "What restaurants are available?"
   - "What time is check-in?"

---

## Hotel Information

The AI is configured with information about the **Omriq Luxury Hotel & Resort**, including:

- **Dining:** Fine dining restaurant, rooftop bar, breakfast buffet, room service, coffee bar
- **Wellness:** Infinity pool, full-service spa, fitness center, yoga studio, sauna
- **Business:** Conference rooms, business center, grand ballroom, executive lounge
- **Services:** Concierge, valet parking, laundry, pet-friendly, EV charging
- **Rooms:** Luxury suites, executive rooms, presidential suite with smart controls

The AI will naturally discuss these amenities based on your questions.

---

## Troubleshooting

### Call doesn't come through:
- Check that your phone number format is correct (E.164 format)
- Verify API keys are set correctly in `.env.local`
- Check Vapi dashboard for call logs and errors
- Ensure your phone number has credit/balance

### AI doesn't respond properly:
- Check the system prompt in `lib/hotel-info.ts`
- Verify OpenAI API key (if using custom implementation)
- Review call logs in Vapi dashboard

### Environment variables not working:
- Restart the dev server after adding environment variables
- Ensure `.env.local` is in the project root
- Check that variable names start with `NEXT_PUBLIC_` for client-side or are server-side only

---

## Cost Considerations

- **Vapi.ai:** Pay-per-minute pricing, typically $0.10-0.25 per minute
- **Twilio:** Pay-per-minute + phone number rental
- **ElevenLabs:** Pay-per-character for voice synthesis
- **OpenAI:** Pay-per-token for GPT responses

For demo purposes, costs are typically minimal.

---

## Next Steps

Once set up, you can:
- Customize the hotel information in `lib/hotel-info.ts`
- Adjust the AI personality in the system prompt
- Add more conversation flows
- Track analytics in your chosen platform's dashboard

