"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { EnrollNowLink } from "@/components/ui/EnrollNowLink";
import { SITE } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const STATS: readonly string[] = [
  "12 Weeks",
  "40+ Tools",
  "11 Categories",
  "1 Capstone",
] as const;

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-zinc-50 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 dark:bg-[#050508]"
      aria-labelledby="hero-heading"
    >
      {/* Soft radial glows */}
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,transparent_68%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[65vmin] w-[65vmin] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[50vmin] w-[90vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:24px_24px] dark:[background-image:radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-50/80 via-transparent to-zinc-50/90 dark:from-[#050508]/80 dark:to-[#050508]/90"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center rounded-full border border-[#FBBF24] bg-[#F59E0B]/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[#FBBF24] sm:px-4 sm:text-xs">
            2026 Cohort Now Open
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="mt-6 max-w-4xl text-balance text-3xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
        >
          Master Every AI Tool
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mt-2 max-w-4xl text-balance text-xl font-semibold tracking-tight text-[#2563EB] sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl"
        >
          that matters in 2026
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 sm:mt-8 sm:text-base md:text-lg dark:text-slate-400"
        >
          12-week practical program covering 40+ AI tools across 11 categories — for
          real-world professional results
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <EnrollNowLink
            aria-label="Enroll in AI Tools Mastery program"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F59E0B] px-8 text-sm font-semibold text-[#0D1B2A] shadow-lg shadow-amber-500/20 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] sm:min-h-[3rem] sm:px-10 sm:text-base"
          >
            Enroll Now
          </EnrollNowLink>
          <Link
            href="/syllabus"
            aria-label="View the 12-week course syllabus"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-transparent px-8 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:min-h-[3rem] sm:px-10 sm:text-base dark:border-white/90 dark:text-white dark:hover:bg-white/10 dark:focus-visible:outline-white"
          >
            View Syllabus
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-5 flex justify-center sm:mt-6">
          <DownloadButton
            href={SITE.syllabusPdfUrl}
            filename={SITE.syllabusDownloadFilename}
            label="or Download the Syllabus PDF →"
            variant="ghost"
            size="sm"
            trackingLabel="Download GenValue Academy syllabus PDF"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 w-full sm:mt-14">
          <ul className="flex flex-col items-center gap-3 text-xs text-zinc-500 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0 sm:text-sm md:text-base dark:text-slate-400">
            {STATS.map((label, index) => (
              <li key={label} className="flex items-center gap-3 sm:gap-0">
                {index > 0 ? (
                  <span
                    className="hidden text-zinc-300 sm:inline sm:px-3 md:px-4 dark:text-white/25"
                    aria-hidden
                  >
                    |
                  </span>
                ) : null}
                <span className="font-medium text-zinc-700 dark:text-slate-300">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
