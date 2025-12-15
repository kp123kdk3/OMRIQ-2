import { NextResponse } from "next/server";
import twilio from "twilio";
export async function POST(request: Request) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    (() => {
      const proto = request.headers.get("x-forwarded-proto") || "http";
      const host =
        request.headers.get("x-forwarded-host") ||
        request.headers.get("host") ||
        "localhost:3000";
      return `${proto}://${host}`;
    })();

  const twilioResponse = new twilio.twiml.VoiceResponse();

  if (!process.env.OPENAI_API_KEY) {
    twilioResponse.say(
      { voice: "alice" },
      "This number is not configured yet. Please contact the site owner."
    );
    twilioResponse.hangup();
    return new NextResponse(twilioResponse.toString(), {
      headers: { "Content-Type": "text/xml" },
      status: 500,
    });
  }

  if (process.env.ELEVENLABS_API_KEY) {
    // Prefer ElevenLabs audio when configured
    const greeting = "Hello, thanks for calling Omriq. How can I help you today?";
    twilioResponse.play(`${baseUrl}/api/tts?text=${encodeURIComponent(greeting)}`);
  } else {
    twilioResponse.say(
      { voice: "alice" },
      "Hello, thanks for calling Omriq. How can I help you today?"
    );
  }

  twilioResponse.gather({
    input: ["speech"] as any,
    speechTimeout: "auto",
    language: "en-US",
    action: `${baseUrl}/api/call-handler`,
    method: "POST",
  });

  return new NextResponse(twilioResponse.toString(), {
    headers: { "Content-Type": "text/xml" },
  });
}


