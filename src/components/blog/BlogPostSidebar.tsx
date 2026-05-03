"use client";

import { useCallback, useState } from "react";
import { enrollMailto } from "@/lib/constants";
import { FaLinkedin, FaLink, FaXTwitter } from "react-icons/fa6";

type Props = {
  readonly postUrl: string;
  readonly title: string;
};

export function BlogPostSidebar({ postUrl, title }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [postUrl]);

  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <aside className="flex flex-col gap-6">
      <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-gradient-to-br from-[#2563EB]/10 via-white to-amber-50 p-6 shadow-lg ring-1 ring-zinc-200/80 dark:border-white/10 dark:from-[#2563EB]/20 dark:via-[#0D1B2A] dark:to-[#0a1520] dark:ring-white/5">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Ready to level up?</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-slate-400">
          Join the 12-week AI Tools Mastery cohort — practical workflows, 40+ tools, real projects.
        </p>
        <a
          href={enrollMailto}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-[#0D1B2A] shadow-md transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
        >
          Enroll Now
        </a>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-[#0D1B2A]">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-slate-500">Share</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          <li>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-[#0A66C2] transition hover:bg-zinc-100 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 transition hover:bg-zinc-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              aria-label="Share on X"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={copy}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:bg-zinc-100 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              aria-label="Copy link"
            >
              <FaLink className="h-4 w-4" />
            </button>
          </li>
        </ul>
        {copied ? (
          <p className="mt-3 text-xs font-medium text-[#10B981]" role="status">
            Link copied
          </p>
        ) : null}
      </div>
    </aside>
  );
}
