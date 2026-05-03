import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/courses",
    title: "Courses | GenValue Academy",
    description:
      "AI Tools Mastery — a 12-week program covering 40+ AI tools across 11 categories. Syllabus, outcomes, and enrollment.",
    ogTitle: "Courses | GenValue Academy",
  });
}

export default function CoursesPage() {
  return (
    <div className="min-h-[65vh] bg-zinc-50 px-4 py-16 text-zinc-700 sm:px-6 lg:px-8 lg:py-24 dark:bg-[#050508] dark:text-slate-300">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
          Programs
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Courses
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-slate-400">
          Our flagship offering is{" "}
          <strong className="font-semibold text-zinc-900 dark:text-white">AI Tools Mastery</strong> — a
          practical 12-week track built for professionals who need judgment, not just feature lists.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/syllabus"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#2563EB] bg-[#2563EB]/15 px-8 text-base font-semibold text-white transition hover:bg-[#2563EB]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            View full syllabus
          </Link>
          <Link
            href="/enroll"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F59E0B] px-8 text-base font-semibold text-[#0D1B2A] shadow-lg shadow-amber-500/20 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
          >
            Enroll now
          </Link>
        </div>
      </div>
    </div>
  );
}
