"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { enrollMailto } from "@/lib/constants";

export type EnrollNowLinkProps = Omit<ComponentProps<typeof Link>, "href">;

/**
 * Enroll CTA: navigates to Contact (no broken /enroll route) and opens the
 * prefilled mail client in a separate context so the main tab stays on the site.
 */
export function EnrollNowLink({ onClick, ...props }: EnrollNowLinkProps) {
  return (
    <Link
      href="/contact"
      {...props}
      onClick={(e) => {
        window.open(enrollMailto, "_blank", "noopener,noreferrer");
        onClick?.(e);
      }}
    />
  );
}
