import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the submission (placeholder - no actual backend storage)
    console.log("Investor meeting request received:", {
      name: body.name,
      email: body.email,
      company: body.company,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    // In production, this would integrate with email service, CRM, etc.
    return NextResponse.json(
      { success: true, message: "Meeting request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing investor meeting request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process request" },
      { status: 500 }
    );
  }
}

