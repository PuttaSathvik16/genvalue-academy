"use client";

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
    <span className={`relative block shrink-0 ${className}`} aria-hidden>
      <span
        className="block h-full w-full bg-zinc-950 dark:bg-white"
        style={{
          // Remove tiny bottom-right artifact present in the source raster.
          clipPath: "inset(0 7% 7% 0)",
          WebkitMaskImage: `url(${SITE.logoMark})`,
          maskImage: `url(${SITE.logoMark})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    </span>
  );
}
