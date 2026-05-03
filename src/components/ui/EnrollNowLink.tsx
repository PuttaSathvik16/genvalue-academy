"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { enrollMailto } from "@/lib/constants";

export type EnrollNowLinkProps = Omit<ComponentProps<typeof Link>, "href">;

/**
 * Enroll CTA: opens the prefilled mail client and navigates to Contact in the
 * same user gesture so both behaviors run reliably (popup / SPA navigation).
 */
export function EnrollNowLink({ onClick, ...props }: EnrollNowLinkProps) {
  const router = useRouter();

  return (
    <Link
      href="/contact"
      {...props}
      onClick={(e) => {
        e.preventDefault();
        // Open mail first so the gesture still counts for strict popup / mail handlers.
        window.open(enrollMailto, "_blank", "noopener,noreferrer");
        router.push("/contact");
        onClick?.(e);
      }}
    />
  );
}
