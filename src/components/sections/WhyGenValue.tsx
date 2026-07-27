"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaDiagramProject,
  FaListCheck,
  FaPersonChalkboard,
} from "react-icons/fa6";

export type FeatureItem = {
  readonly title: string;
  readonly description: string;
  readonly Icon: IconType;
  readonly accentText: string;
  readonly accentBg: string;
};

const FEATURES: readonly FeatureItem[] = [
  {
    title: "Tool Selection Mastery",
    description: "40+ tools taught in context, not in isolation",
    Icon: FaListCheck,
    accentText: "text-[#2563EB]",
    accentBg: "bg-[#2563EB]/15",
  },
  {
    title: "Real-World Projects",
    description: "12 hands-on assignments + 1 capstone project",
    Icon: FaDiagramProject,
    accentText: "text-[#10B981]",
    accentBg: "bg-[#10B981]/15",
  },
  {
    title: "Expert Instruction",
    description: "Taught by Sathvik Putta, practitioner not theorist",
    Icon: FaPersonChalkboard,
    accentText: "text-[#F59E0B]",
    accentBg: "bg-[#F59E0B]/15",
  },
  {
    title: "Career-Ready Skills",
    description: "Portfolio of AI projects employers actually want",
    Icon: FaBriefcase,
    accentText: "text-[#A78BFA]",
    accentBg: "bg-[#A78BFA]/15",
  },
];

const cardEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function WhyGenValue() {
  return (
    <section
      className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10 dark:bg-[#050508]"
      aria-labelledby="why-genvalue-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="max-w-xl lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              WHY CHOOSE US
            </p>
            <h2
              id="why-genvalue-heading"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight dark:text-white"
            >
              Not just what to use - but when and why
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-slate-400">
              Most AI courses teach tools. We teach judgment. You leave knowing how to pick
              the right AI for any professional task - in seconds.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {FEATURES.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-48px 0px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: cardEase,
                  }}
                  className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/55 hover:shadow-lg hover:shadow-[#2563EB]/20 dark:border-white/10 dark:bg-[#0D1B2A] sm:p-6"
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.accentBg}`}
                      aria-hidden
                    >
                      <Icon className={`h-6 w-6 ${feature.accentText}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-zinc-900 sm:text-xl dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
