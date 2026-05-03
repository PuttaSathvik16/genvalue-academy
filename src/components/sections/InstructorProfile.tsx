import { founders } from "@/data/founders";
import Image from "next/image";
import { FaCircleCheck, FaGithub, FaLinkedin } from "react-icons/fa6";

const sathvikFounder = founders.find((f) => f.id === "sathvik-putta")!;

const BIO_PARAGRAPHS = [
  "Sathvik builds and ships with AI tools daily — from research and writing to automation and lightweight product work. That practitioner lens shapes every lesson: what actually works when deadlines hit, not what sounds clever in a demo.",
  "Expect grounded workflows you can reuse Monday morning: how to pick tools fast, structure prompts, chain steps responsibly, and document outputs colleagues can trust.",
  "Teaching philosophy is simple — fewer buzzwords, more judgment. You leave knowing when to reach for a general assistant vs a specialized stack, and how to defend your choices with clarity.",
] as const;

const SKILL_TAGS = [
  "Prompt Engineering",
  "AI Workflow Design",
  "Tool Selection Frameworks",
  "Course Design",
] as const;

const CONTACT_EMAIL = "genvalue.academy@gmail.com" as const;

export function InstructorProfile() {
  return (
    <section
      className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 p-6 shadow-lg ring-1 ring-zinc-200 sm:p-8 md:p-10 dark:border-white/10 dark:from-[#0D1B2A] dark:via-[#0a1520] dark:to-[#050508] dark:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)] dark:ring-white/5"
      aria-labelledby="instructor-profile-heading"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
        <div className="flex shrink-0 flex-col items-center lg:items-start">
          <div className="relative">
            <div className="relative h-36 w-36 overflow-hidden rounded-full shadow-inner ring-2 ring-[#FBBF24]/50 ring-offset-4 ring-offset-white sm:h-40 sm:w-40 dark:ring-offset-[#0D1B2A]">
              <Image
                src={sathvikFounder.photo}
                alt="Sathvik Putta — Lead Instructor"
                width={160}
                height={160}
                className="h-full w-full object-cover"
                sizes="160px"
                priority
              />
            </div>
            <span className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full border border-[#10B981]/40 bg-[#10B981]/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[#34D399] shadow-lg backdrop-blur-sm">
              <FaCircleCheck className="h-3.5 w-3.5" aria-hidden />
              Verified
            </span>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h2
            id="instructor-profile-heading"
            className="text-3xl font-bold tracking-tight text-[#FBBF24] sm:text-4xl"
          >
            Sathvik Putta
          </h2>
          <p className="mt-1 text-base font-medium text-zinc-900 sm:text-lg dark:text-white">
            Lead Instructor, GenValue Academy
          </p>
          <p className="mt-3 text-lg font-semibold italic text-[#60A5FA] sm:text-xl">
            AI Practitioner. Not just a teacher.
          </p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-slate-400">
            {BIO_PARAGRAPHS.map((paragraph, index) => (
              <p key={`bio-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {SKILL_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#10B981]/35 bg-[#10B981]/12 px-3 py-1.5 text-xs font-medium text-[#6EE7B7] sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-zinc-200 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-slate-500">Contact</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 inline-block text-sm font-medium text-zinc-700 underline decoration-zinc-400 underline-offset-4 transition hover:text-[#10B981] hover:decoration-[#10B981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981] dark:text-slate-300 dark:decoration-slate-600"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-slate-500">Social</p>
              <ul className="mt-2 flex gap-3">
                <li>
                  <a
                    href="https://www.linkedin.com/in/sathvik-putta-7612611a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sathvik Putta on LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-[#2563EB]/50 hover:bg-[#2563EB]/15 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                  >
                    <FaLinkedin className="h-5 w-5" aria-hidden />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PuttaSathvik16"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sathvik Putta on GitHub"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-[#2563EB]/50 hover:bg-[#2563EB]/15 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                  >
                    <FaGithub className="h-5 w-5" aria-hidden />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
