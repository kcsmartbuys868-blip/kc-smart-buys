import { NextResponse } from "next/server";

const STOCK_API_URL =
  "https://script.google.com/macros/s/AKfycbyJhOcQMfH2Cs9RQfMAjSiyNQQmTNtIyWG3gYbi6WvfQmAS3-q3fqND1IkJDPijmcWmJg/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(STOCK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const responseText = await response.text();

    console.log("Google Apps Script status:", response.status);
    console.log("Google Apps Script response:", responseText);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: `Google Apps Script returned ${response.status}`,
          details: responseText,
        },
        { status: 500 }
      );
    }

    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Google Apps Script did not return valid JSON.",
          details: responseText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Order API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process the order.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}