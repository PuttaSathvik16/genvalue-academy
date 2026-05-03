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
      className={`relative block shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-zinc-300/80 dark:bg-zinc-950 dark:ring-white/20 ${className}`}
      aria-hidden
    >
      <Image
        src={SITE.logoMark}
        alt=""
        width={256}
        height={256}
        className="h-full w-full object-contain p-0.5 invert dark:invert-0"
        sizes="40px"
        priority={priority}
      />
    </span>
  );
}
