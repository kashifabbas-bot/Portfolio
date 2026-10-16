import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;
  const attachmentName =
    typeof (payload as { attachmentName?: unknown }).attachmentName === "string"
      ? ((payload as { attachmentName?: string }).attachmentName ?? "")
      : "";

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "kashif@example.com";

  if (!apiKey) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "portfolio@resend.dev",
        to: [to],
        reply_to: data.email,
        subject: `New enquiry — ${data.projectType} — ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Project type: ${data.projectType}`,
          `Budget: ${data.budget}`,
          attachmentName ? `Attachment: ${attachmentName}` : null,
          "",
          data.message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Email provider rejected the request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error sending the message." },
      { status: 500 },
    );
  }
}
