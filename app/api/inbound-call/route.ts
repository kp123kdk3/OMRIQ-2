import { NextResponse } from "next/server";
import twilio from "twilio";

// Twilio webhook for inbound calls to your Twilio phone number.
// Configure in Twilio Console: Phone Numbers → (your number) → "A CALL COMES IN"
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

  // Quick sanity check to avoid a silent failure if the site isn't configured.
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

  twilioResponse.say(
    { voice: "alice" },
    "Hello, thanks for calling Omriq. How can I help you today?"
  );

  // Gather speech and send it to the AI handler
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


