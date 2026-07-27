"use client";

import type { Degree, Founder } from "@/data/founders";
import { founders } from "@/data/founders";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

const cardEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

function countryFlag(country: string): string {
  const map: Record<string, string> = {
    "United States": "🇺🇸",
    USA: "🇺🇸",
    India: "🇮🇳",
  };
  return map[country] ?? "🌍";
}

function abbreviateLevel(level: string): string {
  const l = level.toLowerCase();
  if (l.includes("master of science")) return "MS";
  if (l.includes("bachelor of engineering")) return "BE";
  if (l.includes("bachelor of technology")) return "BTech";
  if (l.includes("master")) return "MS";
  if (l.includes("bachelor")) return "BSc";
  return level.split(" ").slice(0, 2).join(" ");
}

function founderInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0] ?? ""}${parts[parts.length - 1]![0] ?? ""}`.toUpperCase();
}

function founderBadgeLabel(founder: Founder): string {
  if (founder.role.toLowerCase().includes("co-founder")) return "Co-Founder";
  return "Founder";
}

function FounderPhoto({ founder }: { founder: Founder }) {
  const [failed, setFailed] = useState(false);
  const showFallback = failed;

  const onError = useCallback(() => setFailed(true), []);

  return (
    <div
      className="relative mx-auto h-24 w-24 shrink-0 rounded-full shadow-[0_12px_28px_-8px_rgba(0,0,0,0.35)] ring-2 ring-[#FBBF24] ring-offset-2 ring-offset-white transition-transform duration-300 ease-out group-hover/card:scale-[1.04] dark:shadow-[0_14px_36px_-10px_rgba(0,0,0,0.65)] dark:ring-offset-[#0D1B2A] sm:mx-0 sm:h-[120px] sm:w-[120px]"
    >
      {showFallback ? (
        <div
          className="flex h-full w-full items-center justify-center rounded-full bg-[#0D1B2A] text-base font-bold tracking-tight text-[#FBBF24] sm:text-lg"
          aria-hidden
        >
          {founderInitials(founder.name)}
        </div>
      ) : (
        <Image
          src={founder.photo}
          alt={`Portrait of ${founder.name}`}
          fill
          className="rounded-full object-cover"
          sizes="(max-width: 639px) 96px, 120px"
          onError={onError}
        />
      )}
    </div>
  );
}

function DegreeRow({ degree }: { degree: Degree }) {
  const abbr = abbreviateLevel(degree.level);
  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-zinc-100/90 px-3 py-2.5 dark:bg-white/[0.06]">
      <GiGraduateCap className="mt-0.5 h-5 w-5 shrink-0 text-[#FBBF24]" aria-hidden />
      <p className="min-w-0 text-sm leading-snug text-zinc-800 dark:text-slate-200">
        <span className="font-bold text-zinc-900 dark:text-white">{abbr}</span>
        <span className="text-zinc-500 dark:text-slate-500"> · </span>
        <span>{degree.field}</span>
        <span className="text-zinc-500 dark:text-slate-500"> · </span>
        <span aria-hidden>{countryFlag(degree.country)}</span>
        <span className="sr-only">{degree.country}</span>
      </p>
    </div>
  );
}

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const fullBio = founder.bio.join(" ");

  return (
    <motion.article
      className="group/card flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] sm:p-8 dark:border-white/10 dark:bg-[#0D1B2A] dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: cardEase }}
    >
      <div className="flex flex-col items-center sm:items-start">
        <FounderPhoto founder={founder} />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-between">
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{founder.name}</h3>
        <span className="rounded-full border border-[#FBBF24]/50 bg-[#F59E0B]/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-[#FBBF24]">
          {founderBadgeLabel(founder)}
        </span>
      </div>
      <p className="mt-1 text-center text-sm font-semibold text-zinc-700 dark:text-slate-300 sm:text-left">{founder.role}</p>
      <p className="mt-1 text-center text-xs text-zinc-500 dark:text-slate-500 sm:text-left">{founder.title}</p>

      <div className="mt-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-slate-500">
          Degrees
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {founder.degrees.map((d) => (
            <DegreeRow key={`${founder.id}-${d.level}-${d.institution}`} degree={d} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p
          className={`text-sm leading-relaxed text-zinc-600 dark:text-slate-400 ${expanded ? "" : "line-clamp-2"}`}
        >
          {fullBio}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 text-sm font-semibold text-[#2563EB] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:text-[#60A5FA]"
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
        {founder.expertise.map((tag) => (
          <span
            key={`${founder.id}-${tag}`}
            className="rounded-full bg-[#2563EB] px-2.5 py-1 text-xs font-medium text-white shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-zinc-100 pt-6 dark:border-white/10 sm:justify-start">
        <Link
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#2563EB] shadow-sm transition hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/15 dark:bg-white/5 dark:text-[#60A5FA] dark:hover:bg-white/10"
          aria-label={`${founder.name} on LinkedIn`}
        >
          <FaLinkedin className="h-5 w-5" aria-hidden />
        </Link>
        <Link
          href={founder.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          aria-label={`${founder.name} on GitHub`}
        >
          <FaGithub className="h-5 w-5" aria-hidden />
        </Link>
        <a
          href={`mailto:${founder.email}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-[#2563EB]/40 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
          aria-label={`Email ${founder.name}`}
        >
          <FaEnvelope className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </motion.article>
  );
}

type FoundersSectionProps = {
  /** Anchor for deep links (e.g. `/about#founders`). */
  id?: string;
};

export function FoundersSection({ id }: FoundersSectionProps = {}) {
  return (
    <section
      id={id}
      className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10 dark:bg-[#050508]"
      aria-labelledby="founders-heading"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
            THE TEAM BEHIND GENVALUE
          </p>
          <h2
            id="founders-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-[2.5rem] dark:text-white"
          >
            Built by practitioners, not theorists.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-slate-400">
            Every course decision is made by people who use these tools daily.
          </p>
        </header>

        <div
          className={
            founders.length > 1
              ? "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
              : "mx-auto grid max-w-xl grid-cols-1 gap-8"
          }
        >
          {founders.map((founder, index) => (
            <FounderCard key={founder.id} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
