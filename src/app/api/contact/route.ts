import { contactFormSchema } from "@/lib/contact-schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  console.log("[api/contact] submission:", parsed.data);

  // TODO: integrate transactional email (Resend, SendGrid, SES, etc.)

  return NextResponse.json({ ok: true });
}
