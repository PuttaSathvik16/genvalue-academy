"use client";

import Image from "next/image";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { course } from "@/data/course";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowRotateRight,
  FaChartLine,
  FaCompass,
  FaHammer,
  FaRocket,
  FaShieldHalved,
} from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const MISSION_PARAGRAPHS = [
  "Most courses chase every new model drop. We step back and ask which tool fits the task, the audience, and the risk profile — then move fast with clarity.",
  "GenValue is built for working professionals: weekly builds, real assignments, and feedback that sounds like a colleague, not a brochure.",
  "Our north star is simple: when the landscape shifts again, you should already know how to choose — not how to panic-scroll release notes.",
] as const;

const APPROACH_STEPS = [
  {
    title: "Learn the Landscape",
    body: "Map categories, trade-offs, and when general assistants beat niche tools — before you touch a single login.",
    Icon: FaCompass,
  },
  {
    title: "Master the Tools",
    body: "Practice 40+ tools in-context with prompts, workflows, and quality bars you can reuse on Monday morning.",
    Icon: FaHammer,
  },
  {
    title: "Build Real Projects",
    body: "Ship hands-on work every week and finish with a capstone employers can inspect — not a slideshow of hype.",
    Icon: FaRocket,
  },
] as const;

const NUMBER_STATS = [
  { label: "Structured weeks", target: 12, suffix: "", prefix: "" },
  { label: "Tools in curriculum", target: 40, suffix: "+", prefix: "" },
  { label: "Categories covered", target: 11, suffix: "", prefix: "" },
  { label: "Portfolio capstones", target: 1, suffix: "", prefix: "" },
] as const;

const VALUES = [
  {
    title: "Practical",
    description:
      "Every lesson ties to a deliverable you could hand to a manager or client — templates, rubrics, and examples included.",
    Icon: FaHammer,
  },
  {
    title: "Honest",
    description:
      "We name limits, failure modes, and when not to use AI — especially for high-stakes or regulated work.",
    Icon: FaShieldHalved,
  },
  {
    title: "Outcomes-Driven",
    description:
      "Progress is measured in shipped work and sound tool choices — not vanity quiz scores or completion badges alone.",
    Icon: FaChartLine,
  },
  {
    title: "Continuously Updated",
    description:
      "The curriculum evolves as tools change; you learn frameworks that survive the next release cycle.",
    Icon: FaArrowRotateRight,
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

function useInViewOnce(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}

function useCountUp(target: number, active: boolean, durationMs = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / durationMs, 1);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, durationMs]);

  return value;
}

function StatCard({
  label,
  target,
  prefix,
  suffix,
  active,
}: {
  label: string;
  target: number;
  prefix: string;
  suffix: string;
  active: boolean;
}) {
  const n = useCountUp(target, active);
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-lg dark:border-white/10 dark:bg-[#0D1B2A]">
      <p className="font-mono text-4xl font-bold tabular-nums text-zinc-900 sm:text-5xl dark:text-white">
        <span className="text-[#F59E0B]">{prefix}</span>
        {n}
        <span className="text-[#F59E0B]">{suffix}</span>
      </p>
      <p className="mt-3 text-sm text-zinc-600 dark:text-slate-400">{label}</p>
    </article>
  );
}

export default function AboutPage() {
  const { ref: statsRef, visible: statsVisible } = useInViewOnce(0.25);

  return (
    <div className="bg-zinc-50 text-zinc-700 dark:bg-[#050508] dark:text-slate-300">
      {/* Hero */}
      <section className="border-b border-zinc-200 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                {course.instructor.academy}
              </p>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
                About GenValue Academy
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-zinc-600 sm:text-xl lg:mx-0 dark:text-slate-400">
                {course.subtitle}
              </p>
            </div>
            <div className="relative hidden justify-end lg:flex">
              <motion.div
                className="pointer-events-none w-full max-w-sm -rotate-2 opacity-95 xl:max-w-md"
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(245,158,11,0.35)] ring-1 ring-[#FBBF24]/30 dark:opacity-90 dark:shadow-[0_24px_60px_-12px_rgba(245,158,11,0.25)]">
                  <Image
                    src="/images/poster/genvalue-poster.png"
                    alt="GenValue Academy AI Tools Mastery Program Poster"
                    width={480}
                    height={675}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1280px) 400px, 480px"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="about-mission">
        <div className="mx-auto max-w-7xl">
          <h2 id="about-mission" className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
            Our Mission
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="relative lg:sticky lg:top-28">
              <blockquote className="border-l-4 border-[#2563EB] pl-6 text-2xl font-semibold leading-snug text-zinc-900 sm:text-3xl md:text-4xl dark:text-white">
                We don&apos;t teach tools.{" "}
                <span className="text-[#60A5FA]">We teach judgment.</span>
              </blockquote>
            </div>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-slate-400">
              {MISSION_PARAGRAPHS.map((p, i) => (
                <p key={`mission-${i}`}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FoundersSection id="founders" />

      {/* Names */}
      <section className="border-t border-zinc-200 bg-zinc-100/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10 dark:bg-[#0D1B2A]/50" aria-labelledby="about-names">
        <div className="mx-auto max-w-3xl">
          <h2 id="about-names" className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
            The Names Behind GenValue
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-slate-400">
            <p>
              <strong className="font-semibold text-zinc-900 dark:text-white">GenValue</strong> carries two names that
              shaped how we think about education:{" "}
              <strong className="font-semibold text-zinc-800 dark:text-slate-200">Sathvik</strong> and{" "}
              <strong className="font-semibold text-zinc-800 dark:text-slate-200">Sujith</strong>. Together they stand for
              curiosity without hype, discipline without ego, and showing up for learners the way you&apos;d
              show up for family.
            </p>
            <p>
              Sathvik leads instruction today — but the academy&apos;s name is a reminder that GenValue
              was never meant to be a solo brand. It&apos;s a commitment inherited from people who
              believed effort should compound into real opportunity.
            </p>
            <p>
              When you see <span className="text-[#F59E0B]">GenValue Academy</span>, read it as a promise:
              judgment-first teaching, grounded in the values those names represent.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-zinc-200 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10" aria-labelledby="about-approach">
        <div className="mx-auto max-w-6xl">
          <h2 id="about-approach" className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
            Our Approach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-slate-400">
            A single thread from orientation to capstone — framework first, tools second, proof last.
          </p>

          <div className="mt-14 flex flex-col items-stretch gap-4 md:flex-row md:items-stretch md:justify-center md:gap-2 lg:gap-4">
            {APPROACH_STEPS.flatMap((step, index) => {
              const card = (
                <motion.div
                  key={step.title}
                  className="flex flex-1 flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-md dark:border-white/10 dark:bg-[#0D1B2A]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: easeOut }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/20 text-[#60A5FA]">
                    <step.Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-slate-400">{step.body}</p>
                </motion.div>
              );
              if (index >= APPROACH_STEPS.length - 1) {
                return [card];
              }
              const arrow = (
                <div
                  key={`approach-arrow-${index}`}
                  className="flex shrink-0 justify-center py-1 md:items-center md:self-center md:py-0"
                  aria-hidden
                >
                  <FaArrowDown className="h-6 w-6 text-[#2563EB]/70 md:hidden" />
                  <FaArrowRight className="hidden h-6 w-6 text-[#2563EB]/70 md:block" />
                </div>
              );
              return [card, arrow];
            })}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="border-t border-zinc-200 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10" aria-labelledby="about-numbers">
        <div ref={statsRef} className="mx-auto max-w-7xl">
          <h2 id="about-numbers" className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
            By the Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-slate-400">
            Proof lives in the syllabus — not in adjectives.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {NUMBER_STATS.map((s) => (
              <StatCard
                key={s.label}
                label={s.label}
                target={s.target}
                prefix={s.prefix}
                suffix={s.suffix}
                active={statsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-zinc-200 px-4 py-16 sm:px-6 sm:pb-24 lg:px-8 dark:border-white/10" aria-labelledby="about-values">
        <div className="mx-auto max-w-7xl">
          <h2 id="about-values" className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
            Values
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, index) => (
              <motion.article
                key={v.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md dark:border-white/10 dark:bg-[#0D1B2A]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: easeOut }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F59E0B]/15 text-[#F59E0B]">
                  <v.Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-slate-400">{v.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
