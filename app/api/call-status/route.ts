import { NextResponse } from "next/server";

// Optional: Track call status
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const callSid = formData.get("CallSid");
    const callStatus = formData.get("CallStatus");
    const duration = formData.get("CallDuration");

    console.log("Call status update:", {
      callSid,
      status: callStatus,
      duration,
      timestamp: new Date().toISOString(),
    });

    // In production, store this in a database for analytics
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking call status:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

