"use client";

import Image from "next/image";
import { SITE } from "@/lib/constants";

type SiteLogoMarkProps = {
  /** Tailwind size classes, e.g. h-10 w-10 */
  className?: string;
  /** Prefer true only above-the-fold (navbar). */
  priority?: boolean;
};

/**
 * G+V monogram for header / footer. Parent link should set aria-label; this mark is decorative.
 */
export function SiteLogoMark({ className = "h-10 w-10", priority = false }: SiteLogoMarkProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden ${className}`}
      style={{ clipPath: "inset(0 7% 7% 0)" }}
      aria-hidden
    >
      {/* Dark mode: original image + screen blend removes black background, keeps white symbol. */}
      <Image
        src={SITE.logoMark}
        alt=""
        width={256}
        height={256}
        sizes="40px"
        priority={priority}
        className="hidden h-full w-full object-contain dark:block dark:mix-blend-screen"
      />
      {/* Light mode: invert then multiply blend to render a black symbol on light background. */}
      <Image
        src={SITE.logoMark}
        alt=""
        width={256}
        height={256}
        sizes="40px"
        priority={priority}
        className="block h-full w-full object-contain invert mix-blend-multiply dark:hidden"
      />
    </span>
  );
}
