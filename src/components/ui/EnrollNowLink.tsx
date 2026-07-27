"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

export type EnrollNowLinkProps = Omit<ComponentProps<typeof Link>, "href">;

/**
 * Enroll CTA: goes to the Contact page “Send a message” form. Submissions are
 * sent to GenValue via POST /api/contact (Brevo) - not mailto.
 */
export function EnrollNowLink(props: EnrollNowLinkProps) {
  return <Link href="/contact#contact-form" scroll {...props} />;
}
