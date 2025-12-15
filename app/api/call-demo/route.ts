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

    // Validate phone number format
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const cleanedPhone = phoneNumber.replace(/[\s\-\(\)]/g, "");
    
    if (!phoneRegex.test(cleanedPhone)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number format. Please use E.164 format (e.g., +15551234567)" },
        { status: 400 }
      );
    }

    // Required env
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

    // Twilio auth (choose one)
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioApiKeySid = process.env.TWILIO_API_KEY_SID;
    const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

    const openaiApiKey = process.env.OPENAI_API_KEY;

    const hasAuthTokenCreds = !!(twilioAccountSid && twilioAuthToken);
    const hasApiKeyCreds = !!(twilioAccountSid && twilioApiKeySid && twilioApiKeySecret);

    if (!twilioAccountSid || !twilioPhoneNumber || (!hasAuthTokenCreds && !hasApiKeyCreds)) {
      return NextResponse.json(
        { 
          success: false, 
          error:
            "Twilio not configured. Set TWILIO_ACCOUNT_SID + TWILIO_PHONE_NUMBER and either (TWILIO_AUTH_TOKEN) or (TWILIO_API_KEY_SID + TWILIO_API_KEY_SECRET).",
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

    const { omriqHotelInfo } = await import("@/lib/hotel-info");

    // Base URL for webhook callbacks
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

    const client = hasApiKeyCreds
      ? twilio(twilioApiKeySid!, twilioApiKeySecret!, { accountSid: twilioAccountSid })
      : twilio(twilioAccountSid!, twilioAuthToken!);

    const openai = new OpenAI({
      apiKey: openaiApiKey,
    });

    const call = await client.calls.create({
      to: cleanedPhone,
      from: twilioPhoneNumber,
      url: `${baseUrl}/api/call-handler`,
      method: "POST",
      statusCallback: `${baseUrl}/api/call-status`,
      statusCallbackEvent: ["completed", "failed"],
    });

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
