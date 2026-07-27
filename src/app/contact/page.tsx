import { ContactForm } from "@/components/contact/ContactForm";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { SITE } from "@/lib/constants";
import { FaLinkedin, FaLocationDot, FaXTwitter } from "react-icons/fa6";

const EMAIL = "genvalue.academy@gmail.com" as const;

export default function ContactPage() {
  return (
    <div className="bg-zinc-50 px-4 py-14 text-zinc-700 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:bg-[#050508] dark:text-slate-300">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
            GenValue Academy
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Contact
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-zinc-600 sm:text-lg dark:text-slate-400">
            Questions about the program, cohorts, or team training - send a note and we&apos;ll get back
            to you.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
          {/* Left - contact info */}
          <aside className="flex flex-col gap-10">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg ring-1 ring-zinc-200 sm:p-8 dark:border-white/10 dark:bg-[#0D1B2A]/80 dark:ring-white/5">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Contact info</h2>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-slate-500">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium text-[#2563EB] underline decoration-[#2563EB]/50 underline-offset-4 transition hover:text-[#1d4ed8] hover:decoration-[#1d4ed8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:text-[#60A5FA] dark:hover:text-white dark:hover:decoration-white"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-slate-500">Academy</dt>
                  <dd className="mt-1 text-zinc-900 dark:text-white">GenValue Academy</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-slate-500">
                    Response time
                  </dt>
                  <dd className="mt-1 text-zinc-700 dark:text-slate-300">We reply within 24 hours</dd>
                </div>
              </dl>

              <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-slate-500">Social</p>
                <ul className="mt-3 flex gap-3">
                  <li>
                    <a
                      href={SITE.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GenValue Academy on LinkedIn"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-[#2563EB]/50 hover:bg-[#2563EB]/15 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                    >
                      <FaLinkedin className="h-5 w-5" aria-hidden />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GenValue Academy on X (placeholder)"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-[#2563EB]/50 hover:bg-[#2563EB]/15 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                    >
                      <FaXTwitter className="h-5 w-5" aria-hidden />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location map */}
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-transparent p-6 shadow-inner dark:border-white/10 dark:from-white/[0.04] sm:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/15 text-[#2563EB] dark:text-[#60A5FA]">
                  <FaLocationDot className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">Location</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-slate-400">
                    New Haven, Connecticut, USA
                  </p>
                </div>
              </div>
              <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-200 ring-1 ring-inset ring-zinc-300 dark:bg-black/40 dark:ring-white/10">
                <iframe
                  title="Map showing New Haven, Connecticut, USA"
                  className="h-full min-h-[240px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  src="https://www.google.com/maps?q=New+Haven%2C+Connecticut%2C+USA&hl=en&z=13&output=embed"
                />
              </div>
              <p className="mt-3 text-center text-xs text-zinc-500 dark:text-slate-500">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=New+Haven%2C+CT%2C+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-400 underline-offset-2 transition hover:text-[#2563EB] hover:decoration-[#2563EB] dark:hover:text-[#60A5FA]"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </aside>

          {/* Right - form */}
          <ContactForm />
        </div>

        <section
          className="mx-auto mt-16 max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-lg ring-1 ring-zinc-200/80 sm:p-10 dark:border-white/10 dark:bg-[#0D1B2A] dark:ring-white/5"
          aria-labelledby="contact-syllabus-card-heading"
        >
          <h2
            id="contact-syllabus-card-heading"
            className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-white"
          >
            Not ready to enroll yet?
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-slate-400">Download the full course syllabus first.</p>
          <div className="mt-8 flex justify-center">
            <DownloadButton
              href={SITE.syllabusPdfUrl}
              filename={SITE.syllabusDownloadFilename}
              label="Download Syllabus PDF"
              variant="gold"
              size="md"
              trackingLabel="Download GenValue Academy syllabus PDF from contact page"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
