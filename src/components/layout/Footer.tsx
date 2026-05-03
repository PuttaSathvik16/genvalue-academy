"use client";

import Link from "next/link";
import { SiteLogoMark } from "@/components/layout/SiteLogoMark";
import { useId, useState, type FormEvent } from "react";
import { FaLinkedin, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { SITE } from "@/lib/constants";

export type QuickLinkItem = {
  readonly label: string;
  readonly href: string;
  readonly downloadFilename?: string;
};

const QUICK_LINKS: readonly QuickLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Syllabus", href: "/syllabus" },
  {
    label: "Download Syllabus",
    href: SITE.syllabusPdfUrl,
    downloadFilename: SITE.syllabusDownloadFilename,
  },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

type SocialNetwork = "linkedin" | "x" | "youtube" | "instagram";

const SOCIAL_LINKS: ReadonlyArray<{
  readonly id: SocialNetwork;
  readonly href: string;
  readonly label: string;
  readonly Icon: typeof FaLinkedin;
}> = [
  {
    id: "linkedin",
    href: SITE.socials.linkedin,
    label: "GenValue Academy on LinkedIn",
    Icon: FaLinkedin,
  },
  {
    id: "x",
    href: "https://x.com/",
    label: "GenValue Academy on X",
    Icon: FaXTwitter,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/",
    label: "GenValue Academy on YouTube",
    Icon: FaYoutube,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    label: "GenValue Academy on Instagram",
    Icon: FaInstagram,
  },
] as const;

const CONTACT_EMAIL = "genvalue.academy@gmail.com" as const;

const linkHoverClass =
  "transition-colors hover:text-[#10B981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]";

export function Footer() {
  const [email, setEmail] = useState("");
  const formId = useId();

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="border-t border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-white/10 dark:bg-[#0D1B2A] dark:text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* 1. Brand + tagline + social */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex w-fit items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
            >
              <SiteLogoMark />
              <span className="text-sm font-semibold tracking-[0.12em] text-zinc-900 dark:text-white">
                GENVALUE ACADEMY
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-slate-400">
              Choosing the Right AI Tool for Every Task
            </p>
            <ul className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ id, href, label, Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-zinc-700 shadow-sm ring-1 ring-zinc-200 dark:bg-white/5 dark:text-slate-200 dark:shadow-none dark:ring-transparent ${linkHoverClass} hover:bg-zinc-50 dark:hover:bg-white/10`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Quick links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Quick Links
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  {item.downloadFilename ? (
                    <a
                      href={item.href}
                      download={item.downloadFilename}
                      className={`text-sm text-zinc-700 dark:text-slate-300 ${linkHoverClass}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm text-zinc-700 dark:text-slate-300 ${linkHoverClass}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-slate-500">
                  Email
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={`break-all text-zinc-700 dark:text-slate-300 ${linkHoverClass}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-slate-500">
                  Instructor
                </span>
                <p className="text-zinc-700 dark:text-slate-300">Sathvik Putta</p>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Newsletter
            </h2>
            <form
              id={formId}
              onSubmit={handleSubscribe}
              className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch lg:flex-col"
            >
              <label htmlFor={`${formId}-email`} className="sr-only">
                Email for newsletter
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#10B981]/50 focus:outline-none focus:ring-2 focus:ring-[#10B981]/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B] px-5 text-sm font-semibold text-[#0D1B2A] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] sm:w-auto lg:w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-200/40 dark:border-white/10 dark:bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs text-zinc-600 sm:flex-row sm:text-left sm:text-sm dark:text-slate-500">
          <p>© 2026 GenValue Academy. All rights reserved.</p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end"
            aria-label="Legal"
          >
            <Link
              href="/privacy-policy"
              className={`${linkHoverClass} underline-offset-4 hover:underline`}
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-400 dark:text-slate-600" aria-hidden>
              |
            </span>
            <Link
              href="/terms-of-service"
              className={`${linkHoverClass} underline-offset-4 hover:underline`}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
