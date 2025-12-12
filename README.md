# Omriq Hospitality AI - Investor Website

A modern, investor-facing marketing website for Omriq Hospitality AI built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── investor-meeting/
│   │       └── route.ts          # Stub API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/
│   ├── Navbar.tsx                # Navigation bar
│   ├── Hero.tsx                  # Hero section
│   ├── DemoSection.tsx           # AI demo placeholder
│   ├── WhatWeDo.tsx              # Product overview
│   ├── ProblemSection.tsx        # Problem statement
│   ├── SolutionSection.tsx       # Solution overview
│   ├── ProductMockups.tsx        # Product previews
│   ├── MarketSection.tsx         # Market opportunity
│   ├── AdvantagesSection.tsx     # Competitive advantage
│   ├── InvestorMeeting.tsx       # Meeting booking form
│   ├── TeamSection.tsx           # Team members
│   ├── RoadmapSection.tsx        # Roadmap & vision
│   ├── FinalCTA.tsx              # Final call-to-action
│   └── Footer.tsx                # Footer
└── ...
```

## 🎨 Features

- ✅ Modern, clean design inspired by Linear, Hex, Mews
- ✅ Fully responsive (desktop & mobile)
- ✅ Smooth scrolling navigation
- ✅ Fade-in animations on scroll
- ✅ Stub API route for investor meeting bookings
- ✅ Placeholder demo section (no real functionality)
- ✅ All sections as reusable components

## ⚠️ Important Notes

This is a **marketing website only**. It does NOT include:
- Real AI functionality
- Backend integrations
- Telephony connections
- PMS integrations
- Actual hotel workflows
- Real calling functionality

All interactions (demo, booking form) are placeholders for demonstration purposes.

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📝 Customization

All components are modular and can be easily customized:
- Update copy in each component file
- Modify colors in Tailwind classes
- Adjust spacing and layout as needed
- Replace placeholder content with actual content

## 📅 Calendly Integration

The investor meeting section now uses Calendly for booking. To set up:

1. **Get your Calendly URL:**
   - Sign up at [calendly.com](https://calendly.com)
   - Create an event type (e.g., "Investor Meeting - 30 min")
   - Copy the event URL (format: `https://calendly.com/YOUR_USERNAME/EVENT_TYPE`)

2. **Set environment variable:**
   - Create a `.env.local` file in the root directory
   - Add: `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/YOUR_USERNAME/EVENT_TYPE`
   - Replace `YOUR_USERNAME` and `EVENT_TYPE` with your actual Calendly details

3. **Restart the dev server** after adding the environment variable

The Calendly widget will automatically load in the investor meeting section.

## 📧 API Endpoint (Deprecated)

The `/api/investor-meeting` endpoint is no longer used. Calendly handles all booking functionality.

## 📞 AI Voice Calling Demo

The website includes a real AI voice calling feature. When visitors enter their phone number, they receive an actual call from an AI receptionist that discusses the Omriq Luxury Hotel & Resort.

**Setup Required:**
1. Choose a voice AI provider (Vapi.ai recommended - see `VOICE_AI_SETUP.md`)
2. Add API keys to `.env.local`
3. Configure phone number settings

See `VOICE_AI_SETUP.md` for detailed setup instructions.

**Hotel Information:**
- Comprehensive amenities database in `lib/hotel-info.ts`
- AI can discuss dining, wellness, business services, and more
- Natural conversation flow showcasing voice quality

## 🚢 Deployment

This site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any platform supporting Next.js

**Important:** Add your environment variables (VAPI_API_KEY, CALENDLY_URL, etc.) to your hosting platform's environment settings.

