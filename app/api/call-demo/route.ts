import { NextResponse } from "next/server";
import twilio from "twilio";
import OpenAI from "openai";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phoneNumber } = body;

    if (!phoneNumber) {
      return NextResponse.json(
        { success: false, error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const cleanedPhone = phoneNumber.replace(/[\s\-\(\)]/g, "");
    
    if (!phoneRegex.test(cleanedPhone)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number format. Please use E.164 format (e.g., +15551234567)" },
        { status: 400 }
      );
    }

    // Check required API keys
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!twilioAccountSid || !twilioAuthToken || !twilioPhoneNumber) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Twilio not configured. Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER environment variables.",
          setupRequired: true
        },
        { status: 500 }
      );
    }

    if (!openaiApiKey) {
      return NextResponse.json(
        { 
          success: false, 
          error: "OpenAI not configured. Please set OPENAI_API_KEY environment variable.",
          setupRequired: true
        },
        { status: 500 }
      );
    }

    // Import hotel information
    const { omriqHotelInfo } = await import("@/lib/hotel-info");

    // Get base URL for webhooks (use environment variable or default)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
      || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    // Initialize Twilio client
    const client = twilio(twilioAccountSid, twilioAuthToken);

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: openaiApiKey,
    });

    // Create the call using Twilio
    // The webhook will handle the conversation
    const call = await client.calls.create({
      to: cleanedPhone,
      from: twilioPhoneNumber,
      url: `${baseUrl}/api/call-handler`, // Webhook URL for handling the call
      method: "POST",
      statusCallback: `${baseUrl}/api/call-status`, // Optional: track call status
      statusCallbackEvent: ["completed", "failed"],
    });

    // Store call context (in production, use a database)
    // For now, we'll pass context via the webhook
    console.log("Call initiated:", {
      callSid: call.sid,
      phoneNumber: cleanedPhone,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Call initiated successfully! You should receive a call shortly.",
      callSid: call.sid,
    });
  } catch (error) {
    console.error("Error initiating call:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "An error occurred while initiating the call",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
