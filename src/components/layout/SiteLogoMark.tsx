"use client";

import type { CSSProperties } from "react";
import { SITE } from "@/lib/constants";

type SiteLogoMarkProps = {
  /** Tailwind size classes, e.g. h-10 w-10 */
  className?: string;
};

const maskStyle: CSSProperties & { WebkitMaskMode?: string; maskMode?: string } = {
  // Use luminance mask so white logo pixels are visible and dark raster background is ignored.
  WebkitMaskImage: `url(${SITE.logoMark})`,
  maskImage: `url(${SITE.logoMark})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskMode: "luminance",
  maskMode: "luminance",
};

/**
 * G+V monogram for header / footer. Parent link should set aria-label; this mark is decorative.
 */
export function SiteLogoMark({ className = "h-10 w-10" }: SiteLogoMarkProps) {
  return (
    <span className={`relative block shrink-0 ${className}`} aria-hidden>
      <span className="block h-full w-full bg-zinc-950 dark:bg-white" style={maskStyle} />
    </span>
  );
}
