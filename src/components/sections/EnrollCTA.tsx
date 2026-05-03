import Link from "next/link";
import { enrollMailto } from "@/lib/constants";

type ParticleConfig = {
  readonly leftPct: number;
  readonly topPct: number;
  readonly txPx: number;
  readonly tyPx: number;
  readonly delaySec: number;
  readonly durationSec: number;
  readonly sizeClass: string;
};

const PARTICLES: readonly ParticleConfig[] = [
  { leftPct: 6, topPct: 12, txPx: 28, tyPx: -22, delaySec: 0, durationSec: 11, sizeClass: "h-1 w-1" },
  { leftPct: 18, topPct: 78, txPx: -20, tyPx: -30, delaySec: 1.2, durationSec: 9, sizeClass: "h-1.5 w-1.5" },
  { leftPct: 88, topPct: 18, txPx: -26, tyPx: 18, delaySec: 0.4, durationSec: 10, sizeClass: "h-1 w-1" },
  { leftPct: 72, topPct: 65, txPx: 22, tyPx: -24, delaySec: 2.1, durationSec: 12, sizeClass: "h-1 w-1" },
  { leftPct: 42, topPct: 8, txPx: 14, tyPx: 16, delaySec: 0.8, durationSec: 8.5, sizeClass: "h-1.5 w-1.5" },
  { leftPct: 55, topPct: 88, txPx: -18, tyPx: -14, delaySec: 1.6, durationSec: 9.5, sizeClass: "h-1 w-1" },
  { leftPct: 12, topPct: 48, txPx: 32, tyPx: 12, delaySec: 0.2, durationSec: 10.5, sizeClass: "h-1 w-1" },
  { leftPct: 92, topPct: 52, txPx: -30, tyPx: -20, delaySec: 2.4, durationSec: 11, sizeClass: "h-1 w-1" },
  { leftPct: 30, topPct: 30, txPx: -12, tyPx: -28, delaySec: 1, durationSec: 8, sizeClass: "h-1.5 w-1.5" },
  { leftPct: 65, topPct: 28, txPx: 20, tyPx: 24, delaySec: 1.8, durationSec: 9, sizeClass: "h-1 w-1" },
  { leftPct: 48, topPct: 62, txPx: -24, tyPx: 20, delaySec: 0.6, durationSec: 12, sizeClass: "h-1 w-1" },
  { leftPct: 78, topPct: 12, txPx: 16, tyPx: -18, delaySec: 2.8, durationSec: 10, sizeClass: "h-1 w-1" },
];

const CONTACT_EMAIL = "genvalue.academy@gmail.com" as const;

export function EnrollCTA() {
  return (
    <section
      className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-br from-violet-50 via-sky-50 to-blue-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10 dark:from-[#1a1033] dark:via-[#0b1224] dark:to-[#0c2145]"
      aria-labelledby="enroll-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(ellipse_at_20%_30%,rgba(139,92,246,0.12)_0%,transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(37,99,235,0.1)_0%,transparent_50%)] dark:opacity-90 dark:[background:radial-gradient(ellipse_at_20%_30%,rgba(139,92,246,0.35)_0%,transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(37,99,235,0.28)_0%,transparent_50%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 motion-reduce:hidden"
        aria-hidden
      >
        {PARTICLES.map((p, index) => (
          <span
            key={`particle-${index}-${p.leftPct}-${p.topPct}`}
            className={`enroll-particle-dot absolute rounded-full bg-white/40 shadow-[0_0_12px_rgba(165,180,252,0.55)] ${p.sizeClass}`}
            style={{
              left: `${p.leftPct}%`,
              top: `${p.topPct}%`,
              ["--enroll-tx" as string]: `${p.txPx}px`,
              ["--enroll-ty" as string]: `${p.tyPx}px`,
              animation: `enroll-particle ${p.durationSec}s ease-in-out infinite`,
              animationDelay: `${p.delaySec}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          id="enroll-cta-heading"
          className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white"
        >
          Ready to Work Smarter?
        </h2>
        <p className="mt-4 text-pretty text-base text-zinc-700 sm:text-lg md:text-xl dark:text-slate-300">
          Join 500+ professionals who chose the right AI tools
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={enrollMailto}
            className="inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-full bg-[#F59E0B] px-10 text-base font-semibold text-[#0D1B2A] shadow-lg shadow-amber-500/25 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
          >
            Enroll Now
          </a>
          <Link
            href="/contact"
            className="text-base font-medium text-zinc-800 underline decoration-zinc-400 decoration-2 underline-offset-4 transition hover:text-zinc-950 hover:decoration-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 dark:text-slate-200 dark:decoration-slate-500 dark:hover:text-white dark:hover:decoration-white dark:focus-visible:outline-white"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-10">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-zinc-600 transition hover:text-[#10B981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981] dark:text-slate-400"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
