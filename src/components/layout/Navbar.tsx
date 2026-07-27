"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";
import { NotificationBell } from "@/components/layout/NotificationBell";
import { SiteLogoMark } from "@/components/layout/SiteLogoMark";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { EnrollNowLink } from "@/components/ui/EnrollNowLink";
import { SITE } from "@/lib/constants";

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Instructors", href: "/instructors" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const SCROLL_SHADOW_PX = 80;

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClassName(active: boolean): string {
  const base =
    "relative whitespace-nowrap py-2 text-sm font-medium text-zinc-800 transition-colors hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] dark:text-white/90 dark:hover:text-white";
  const activeStyles =
    active
      ? " text-zinc-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#2563EB] dark:text-white"
      : "";
  return `${base}${activeStyles}`;
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [elevated, setElevated] = useState(false);
  const menuId = useId();

  const updateScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 0);
    setElevated(y > SCROLL_SHADOW_PX);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const syncFromScrollPosition = () => {
      rafId = requestAnimationFrame(() => updateScroll());
    };
    syncFromScrollPosition();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateScroll);
    };
  }, [updateScroll]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const headerSurface = [
    "border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
    elevated && "border-zinc-200/90 shadow-lg dark:border-white/10",
    scrolled
      ? "bg-white/85 backdrop-blur-xl backdrop-saturate-150 dark:bg-[#0D1B2A]/80"
      : "border-transparent bg-white dark:bg-[#0D1B2A]",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={`sticky top-0 z-50 ${headerSurface}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="GenValue Academy - Home"
          className="flex min-w-0 items-center gap-3 rounded-lg py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        >
          <SiteLogoMark />
          <span className="hidden font-semibold tracking-[0.12em] text-zinc-900 dark:text-white sm:inline sm:text-[0.8125rem] md:text-sm">
            GENVALUE ACADEMY
          </span>
          <span className="truncate font-semibold tracking-[0.08em] text-zinc-900 dark:text-white sm:hidden">
            GENVALUE
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex lg:gap-8"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClassName(active)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <NotificationBell />
          <EnrollNowLink
            aria-label="Enroll in AI Tools Mastery"
            className="hidden rounded-full bg-[#F59E0B] px-4 py-2.5 text-sm font-semibold text-[#0D1B2A] shadow-sm transition-transform hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] sm:inline-flex sm:items-center sm:justify-center"
          >
            Enroll Now
          </EnrollNowLink>
          <span className="group relative hidden lg:inline-flex" title="Download Syllabus">
            <DownloadButton
              href={SITE.syllabusPdfUrl}
              filename={SITE.syllabusDownloadFilename}
              label="Download Syllabus"
              variant="ghost"
              size="sm"
              iconOnly
              trackingLabel="Download Syllabus"
            />
            <span
              className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-white dark:text-zinc-900"
              role="tooltip"
            >
              Download Syllabus
            </span>
          </span>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-900 transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:text-white dark:hover:bg-white/10 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Close main navigation menu" : "Open main navigation menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            id={menuId}
            key="mobile-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-zinc-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#0D1B2A]/95 lg:hidden"
          >
            <motion.nav
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="flex max-h-[min(70vh,480px)] flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6"
              aria-label="Mobile primary"
            >
              {NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onNavigate={closeMobileMenu}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                      active
                        ? "bg-zinc-100 text-zinc-950 underline decoration-2 decoration-[#2563EB] underline-offset-[10px] dark:bg-white/5 dark:text-white"
                        : "text-zinc-800 hover:bg-zinc-50 hover:text-zinc-950 dark:text-white/90 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <EnrollNowLink
                onClick={closeMobileMenu}
                aria-label="Enroll in AI Tools Mastery program"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-[#0D1B2A] shadow-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                Enroll Now
              </EnrollNowLink>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
