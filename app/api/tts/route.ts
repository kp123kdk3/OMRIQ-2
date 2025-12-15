import { NextResponse } from "next/server";

// ElevenLabs TTS proxy for Twilio <Play>.
// Twilio will GET this URL and expects audio bytes back (e.g. audio/mpeg).
//
// Required env:
//
//
// Optional env:
// - ELEVENLABS_VOICE_ID (defaults to "Rachel")
//
// Query params:
// - text: string (required)
export async function GET(request: Request) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error: "ElevenLabs not configured. Missing ELEVENLABS_API_KEY.",
      },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const text = (searchParams.get("text") || "").trim();

  if (!text) {
    return NextResponse.json(
      { success: false, error: "Missing 'text' query param." },
      { status: 400 }
    );
  }

  // Basic guardrails: keep Twilio URL short + avoid runaway cost.
  if (text.length > 600) {
    return NextResponse.json(
      {
        success: false,
        error: "Text too long for TTS. Please keep it under 600 characters.",
      },
      { status: 413 }
    );
  }

  // Default to a widely available ElevenLabs voice ("Rachel").
  // You can override with ELEVENLABS_VOICE_ID.
  const voiceId = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";

  // ElevenLabs API: Text to Speech
  // Docs: https://docs.elevenlabs.io/
  const elevenUrl = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const elevenRes = await fetch(elevenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.4,
        similarity_boost: 0.8,
        style: 0.2,
        use_speaker_boost: true,
      },
    }),
  });

  if (!elevenRes.ok) {
    const details = await elevenRes.text().catch(() => "");
    return NextResponse.json(
      {
        success: false,
        error: "ElevenLabs TTS request failed.",
        status: elevenRes.status,
        details: details.slice(0, 2000),
      },
      { status: 502 }
    );
  }

  const audio = await elevenRes.arrayBuffer();
  return new Response(audio, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      // Avoid caching dynamic TTS responses
      "Cache-Control": "no-store, max-age=0",
    },
  });
}


