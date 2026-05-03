const BREVO_SMTP_URL = "https://api.brevo.com/v3/smtp/email";

export type BrevoRecipient = {
  readonly email: string;
  readonly name?: string;
};

export type SendBrevoEmailParams = {
  readonly to: readonly BrevoRecipient[];
  readonly subject: string;
  readonly htmlContent: string;
  readonly textContent?: string;
};

export type BrevoSendResult =
  | { ok: true }
  | { ok: false; status: number; message: string };

/**
 * Sends one transactional email via Brevo (SMTP API).
 * Requires `BREVO_API_KEY` and `BREVO_SENDER_EMAIL` (verified sender in Brevo).
 */
export async function sendBrevoTransactionalEmail(params: SendBrevoEmailParams): Promise<BrevoSendResult> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME ?? "GenValue Academy";

  if (!apiKey?.trim()) {
    return { ok: false, status: 500, message: "BREVO_API_KEY is not set" };
  }
  if (!senderEmail?.trim()) {
    return { ok: false, status: 500, message: "BREVO_SENDER_EMAIL is not set" };
  }

  const res = await fetch(BREVO_SMTP_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey.trim(),
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail.trim() },
      to: params.to.map((r) => ({ email: r.email.trim(), name: r.name })),
      subject: params.subject,
      htmlContent: params.htmlContent,
      ...(params.textContent ? { textContent: params.textContent } : {}),
    }),
  });

  if (!res.ok) {
    const message = await res.text();
    return { ok: false, status: res.status, message: message.slice(0, 500) };
  }

  return { ok: true };
}
