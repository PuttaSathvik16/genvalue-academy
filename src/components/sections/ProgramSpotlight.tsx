"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { SITE } from "@/lib/constants";

const POSTER = "/images/poster/genvalue-poster.png" as const;

const BULLETS = [
  "12 Weeks",
  "40+ Tools",
  "Live Learning",
  "Real Projects",
] as const;

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

export function ProgramSpotlight() {
  return (
    <section
      className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10 dark:bg-[#050508]"
      aria-labelledby="program-spotlight-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          initial={false}
          animate={{ y: [0, -8, 0] }}
          transition={floatTransition}
        >
          <div
            className="-rotate-2 overflow-hidden rounded-2xl shadow-[0_24px_60px_-12px_rgba(245,158,11,0.45),0_12px_24px_-8px_rgba(15,23,42,0.25)] ring-2 ring-[#FBBF24]/40 dark:shadow-[0_24px_70px_-10px_rgba(245,158,11,0.35),0_16px_32px_-12px_rgba(0,0,0,0.6)] dark:ring-[#FBBF24]/25"
          >
            <Image
              src={POSTER}
              alt="GenValue Academy AI Tools Mastery Program Poster"
              width={640}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
              priority
            />
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <p className="inline-flex rounded-full border border-[#F59E0B]/50 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B45309] dark:border-[#FBBF24]/40 dark:bg-[#F59E0B]/15 dark:text-[#FBBF24]">
            Now enrolling
          </p>
          <h2
            id="program-spotlight-heading"
            className="mt-4 text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-[2.5rem] dark:text-white"
          >
            AI Tools Mastery Program
          </h2>
          <ul className="mt-8 flex flex-col gap-3 text-left sm:mx-auto sm:max-w-sm lg:mx-0">
            {BULLETS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base font-medium text-zinc-800 dark:text-slate-200">
                <FaCircleCheck className="h-5 w-5 shrink-0 text-[#10B981]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F59E0B] px-8 text-base font-semibold text-[#0D1B2A] shadow-lg shadow-amber-500/25 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              Enroll Now
            </Link>
            <DownloadButton
              href={SITE.syllabusPdfUrl}
              filename={SITE.syllabusDownloadFilename}
              label="Download Syllabus"
              variant="outline"
              size="md"
              trackingLabel="Download GenValue Academy syllabus PDF"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
