import { FaStar } from "react-icons/fa6";

export type TestimonialItem = {
  readonly quote: string;
  readonly studentName: string;
  readonly role: string;
};

// TODO: Replace PLACEHOLDER_TESTIMONIALS with real student testimonials (CMS, DB, or static content).
const PLACEHOLDER_TESTIMONIALS: readonly TestimonialItem[] = [
  {
    quote:
      "I finally stopped guessing which tool to open for each task. The workflow mindset alone changed how I work every day.",
    studentName: "Jordan Lee",
    role: "Product Manager",
  },
  {
    quote:
      "Capstone aside, the weekly builds forced me to ship real outputs-not slides. My portfolio finally matches what I claim on LinkedIn.",
    studentName: "Priya Malhotra",
    role: "Marketing Lead",
  },
  {
    quote:
      "Clear judgment beats chasing every new launch. This program teaches exactly that-fast picks, clean documentation, confident delivery.",
    studentName: "Marcus Chen",
    role: "Operations Consultant",
  },
];

function StarRating({ id }: { id: string }) {
  return (
    <div className="flex gap-0.5 text-[#F59E0B]" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={`${id}-star-${index}`} className="h-4 w-4 shrink-0" aria-hidden />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-white/10 dark:bg-[#050508]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="testimonials-heading"
          className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white"
        >
          What Our Students Say
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PLACEHOLDER_TESTIMONIALS.map((item, index) => (
            <li key={item.studentName}>
              <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-md sm:p-7 dark:border-white/10 dark:bg-[#0D1B2A]">
                <blockquote className="flex flex-1 flex-col">
                  <p className="text-base italic leading-relaxed text-zinc-600 dark:text-slate-400">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-zinc-200 pt-5 dark:border-white/10">
                    <StarRating id={`t-${index}`} />
                    <p className="mt-3 font-semibold text-zinc-900 dark:text-white">{item.studentName}</p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-slate-500">{item.role}</p>
                  </div>
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
