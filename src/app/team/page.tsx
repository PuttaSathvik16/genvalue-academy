import type { Metadata } from "next";
import { EnrollCTA } from "@/components/sections/EnrollCTA";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/team",
    title: "Our Team | GenValue Academy",
    description: "Meet Sathvik Putta — founder and lead instructor of GenValue Academy.",
  });
}

export default function TeamPage() {
  return (
    <div className="bg-zinc-50 text-zinc-700 dark:bg-[#050508] dark:text-slate-300">
      <section className="border-b border-zinc-200 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">People</p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
            Meet the Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-zinc-600 sm:text-xl dark:text-slate-400">
            Instruction, operations, and the values behind GenValue — practitioners first, always.
          </p>
        </div>
      </section>

      <FoundersSection />

      <section
        className="border-t border-zinc-200 bg-zinc-100/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10 dark:bg-[#0D1B2A]/50"
        aria-labelledby="team-genvalue-story"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-[#0D1B2A] sm:p-10">
          <h2 id="team-genvalue-story" className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-white">
            The story behind the name
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-slate-400">
            <p>
              <strong className="font-semibold text-zinc-900 dark:text-white">GenValue</strong> reflects how{" "}
              <strong className="font-semibold text-zinc-800 dark:text-slate-200">Sathvik Putta</strong> approaches
              education — curiosity without hype, discipline without ego, and showing up for learners the way
              you&apos;d show up for family.
            </p>
            <p>
              The academy is a promise that judgment-first teaching and real opportunity grow from those roots.
              When you see GenValue, read it as values in practice — not a logo dreamed up overnight.
            </p>
          </div>
        </div>
      </section>

      <EnrollCTA />
    </div>
  );
}
