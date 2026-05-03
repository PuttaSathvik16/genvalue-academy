import { sendBrevoTransactionalEmail } from "@/lib/brevo";
import { contactFormSchema } from "@/lib/contact-schema";
import { escapeHtml } from "@/lib/html-escape";
import { SITE } from "@/lib/constants";
import { NextResponse } from "next/server";

function buildTeamEmailHtml(data: {
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}): string {
  const phoneDisplay = data.phone.trim() || "—";
  return `
<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">
  <h2 style="margin-top:0;">New contact form — GenValue Academy</h2>
  <table style="border-collapse:collapse;max-width:560px;">
    <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Name</td><td style="padding:6px 0;">${escapeHtml(data.fullName)}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
    <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Phone</td><td style="padding:6px 0;">${escapeHtml(phoneDisplay)}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;font-weight:600;">Course interest</td><td style="padding:6px 0;">${escapeHtml(data.courseInterest)}</td></tr>
  </table>
  <p style="font-weight:600;margin-top:20px;">Message</p>
  <p style="white-space:pre-wrap;margin:0;padding:12px;background:#f4f4f5;border-radius:8px;">${escapeHtml(data.message)}</p>
</body>
</html>`.trim();
}

function buildConfirmationHtml(fullName: string): string {
  const first = fullName.trim().split(/\s+/)[0] ?? "there";
  return `
<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;line-height:1.6;color:#111;">
  <p>Hi ${escapeHtml(first)},</p>
  <p>Thank you for contacting <strong>GenValue Academy</strong>. We&apos;ve received your message and will get back to you within <strong>24 hours</strong>.</p>
  <p>Best regards,<br />GenValue Team</p>
</body>
</html>`.trim();
}

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

  const data = parsed.data;
  const teamInbox = process.env.BREVO_TEAM_EMAIL?.trim() || SITE.email;

  const teamResult = await sendBrevoTransactionalEmail({
    to: [{ email: teamInbox, name: "GenValue Academy" }],
    subject: `Contact form: ${data.fullName}`,
    htmlContent: buildTeamEmailHtml(data),
    textContent: [
      "New contact form — GenValue Academy",
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone.trim() || "—"}`,
      `Course interest: ${data.courseInterest}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });

  if (!teamResult.ok) {
    console.error("[api/contact] Brevo team email failed:", teamResult);
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again later." },
      { status: 502 },
    );
  }

  const confirmResult = await sendBrevoTransactionalEmail({
    to: [{ email: data.email, name: data.fullName }],
    subject: "We received your message — GenValue Academy",
    htmlContent: buildConfirmationHtml(data.fullName),
    textContent: [
      `Hi ${data.fullName.trim().split(/\s+/)[0] ?? "there"},`,
      "",
      "Thank you for contacting GenValue Academy. We've received your message and will get back to you within 24 hours.",
      "",
      "Best regards,",
      "GenValue Team",
    ].join("\n"),
  });

  if (!confirmResult.ok) {
    console.error("[api/contact] Brevo confirmation email failed:", confirmResult);
    // Team already got the lead; still return success to the user.
  }

  return NextResponse.json({ ok: true });
}
