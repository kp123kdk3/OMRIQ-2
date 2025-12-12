import { NextResponse } from "next/server";
import twilio from "twilio";
import OpenAI from "openai";

// This handles the Twilio webhook for incoming call events
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const callSid = formData.get("CallSid") as string;
    const speechResult = formData.get("SpeechResult") as string | null;
    const callStatus = formData.get("CallStatus") as string;
    
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const elevenLabsApiKey = process.env.ELEVENLABS_API_KEY;
    const openaiApiKey = process.env.OPENAI_API_KEY;

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

    if (!twilioAccountSid || !twilioAuthToken || !elevenLabsApiKey || !openaiApiKey) {
      twilioResponse.say(
        { voice: "alice" },
        "This demo is not configured yet. Missing required API keys on the server. Please contact the site owner."
      );
      twilioResponse.hangup();
      return new NextResponse(twilioResponse.toString(), {
        headers: { "Content-Type": "text/xml" },
        status: 500,
      });
    }

    // Import hotel information
    const { omriqHotelInfo } = await import("@/lib/hotel-info");

    // Create system prompt for OpenAI
    const systemPrompt = `${omriqHotelInfo.aiInstructions}

Hotel Information:
Name: ${omriqHotelInfo.name}
Location: ${omriqHotelInfo.location}
Address: ${omriqHotelInfo.address}
Phone: ${omriqHotelInfo.phone}

Amenities:
${omriqHotelInfo.amenities.map(cat => 
  `${cat.category}: ${cat.items.join(", ")}`
).join("\n")}

Nearby Attractions:
${omriqHotelInfo.nearbyAttractions.join(", ")}

Policies:
Check-in: ${omriqHotelInfo.policies.checkIn}, Check-out: ${omriqHotelInfo.policies.checkOut}
${omriqHotelInfo.policies.earlyCheckIn}
${omriqHotelInfo.policies.lateCheckOut}
${omriqHotelInfo.policies.cancellation}
${omriqHotelInfo.policies.pets}

When answering questions, be natural and conversational. Show enthusiasm about the hotel's amenities. Keep responses under 2-3 sentences when possible.`;

    // If this is the start of the call, play greeting
    if (callStatus === "in-progress" && !speechResult) {
      // Use OpenAI to generate the greeting response
      const openai = new OpenAI({ apiKey: openaiApiKey });
      
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: "The call just started. Say the greeting from the hotel AI concierge." }
        ],
        temperature: 0.7,
        max_tokens: 150,
      });

      const greetingText = completion.choices[0].message.content || omriqHotelInfo.aiGreeting;

      // Use ElevenLabs to convert text to speech
      // Voice ID: 21m00Tcm4TlvDq8ikWAM (Rachel - natural female voice)
      const elevenLabsResponse = await fetch("https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM", {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": elevenLabsApiKey,
        },
        body: JSON.stringify({
          text: greetingText,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      });

      if (elevenLabsResponse.ok) {
        const audioBuffer = await elevenLabsResponse.arrayBuffer();
        // We need to host this audio or use Twilio's media streaming
        // For now, use Twilio's built-in speech for simplicity
        twilioResponse.say({ voice: "alice" }, greetingText);
      } else {
        twilioResponse.say({ voice: "alice" }, greetingText);
      }

      // Gather user input
      twilioResponse.gather({
        input: ["speech"] as any,
        speechTimeout: "auto",
        language: "en-US",
        action: `${baseUrl}/api/call-handler`,
        method: "POST",
      });
    } else if (speechResult) {
      // Process user speech
      const openai = new OpenAI({ apiKey: openaiApiKey });

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: speechResult }
        ],
        temperature: 0.7,
        max_tokens: 200,
      });

      const responseText = completion.choices[0].message.content || "I'm sorry, could you repeat that?";

      // Use ElevenLabs for voice
      try {
        const elevenLabsResponse = await fetch("https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM", {
          method: "POST",
          headers: {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": elevenLabsApiKey,
          },
          body: JSON.stringify({
            text: responseText,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            },
          }),
        });

        // For Twilio, we'd need to stream the audio
        // For simplicity, using Twilio's built-in TTS for now
        // In production, you'd use Twilio Media Streams with WebSocket for real-time audio
        twilioResponse.say({ voice: "alice" }, responseText);
      } catch (error) {
        // Fallback to Twilio TTS
        twilioResponse.say({ voice: "alice" }, responseText);
      }

      // Continue gathering input
      twilioResponse.gather({
        input: ["speech"] as any,
        speechTimeout: "auto",
        language: "en-US",
        action: `${baseUrl}/api/call-handler`,
        method: "POST",
      });

      // If no input after timeout, say goodbye
      twilioResponse.say({ voice: "alice" }, "Thank you for calling Omriq Luxury Hotel. Have a wonderful day!");
    } else {
      // End call
      twilioResponse.say({ voice: "alice" }, "Thank you for calling. Goodbye!");
      twilioResponse.hangup();
    }

    return new NextResponse(twilioResponse.toString(), {
      headers: { "Content-Type": "text/xml" },
    });
  } catch (error) {
    console.error("Error handling call:", error);
    const twilioResponse = new twilio.twiml.VoiceResponse();
    twilioResponse.say({ voice: "alice" }, "I'm sorry, there was an error. Please try again later.");
    twilioResponse.hangup();
    
    return new NextResponse(twilioResponse.toString(), {
      headers: { "Content-Type": "text/xml" },
    });
  }
}

