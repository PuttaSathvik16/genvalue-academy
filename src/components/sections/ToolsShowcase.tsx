const ROW_LTR: readonly string[] = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Cursor",
  "Midjourney",
  "Sora",
  "ElevenLabs",
  "Perplexity",
  "Notion AI",
  "Figma AI",
  "Julius AI",
  "Zapier AI",
] as const;

const ROW_RTL: readonly string[] = [
  "GitHub Copilot",
  "Runway",
  "HeyGen",
  "Grammarly",
  "DALL-E",
  "Replit",
  "Kling AI",
  "Descript",
  "Adobe Firefly",
  "Motion",
  "Power BI",
  "AutoGPT",
] as const;

type AccentKey = "blue" | "emerald" | "gold";

const ACCENT_BORDER: Record<AccentKey, string> = {
  blue: "border-l-[#2563EB]",
  emerald: "border-l-[#10B981]",
  gold: "border-l-[#F59E0B]",
};

const ACCENT_CYCLE: readonly AccentKey[] = ["blue", "emerald", "gold"];

function accentForIndex(index: number): AccentKey {
  return ACCENT_CYCLE[index % ACCENT_CYCLE.length] ?? "blue";
}

function MarqueeRow({
  direction,
  tools,
}: {
  direction: "ltr" | "rtl";
  tools: readonly string[];
}) {
  const animationClass =
    direction === "ltr"
      ? "animate-tools-marquee-ltr"
      : "animate-tools-marquee-rtl";

  return (
    <div className="group/marquee relative overflow-hidden py-2" aria-hidden>
      <div
        className={`flex w-max ${animationClass} motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused]`}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex w-max shrink-0 items-center gap-3 pr-3 md:gap-4 md:pr-4"
            aria-hidden={copy === 1}
          >
            {tools.map((name, index) => {
              const accent = accentForIndex(index);
              const accentClass = ACCENT_BORDER[accent];
              return (
                <li key={`${copy}-${name}-${index}`}>
                  <span
                    className={`inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm md:px-5 md:text-base dark:border-white/10 dark:bg-[#0D1B2A] dark:text-white ${accentClass} border-l-4`}
                  >
                    {name}
                  </span>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function ToolsShowcase() {
  return (
    <section
      className="border-t border-zinc-200 bg-zinc-100 px-4 py-16 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#04050A]"
      aria-labelledby="tools-showcase-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl text-center md:mb-12 md:mx-auto">
          <h2
            id="tools-showcase-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-white"
          >
            40+ Tools. One Program.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg dark:text-slate-400">
            Handpicked, real-world, and taught in context.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <MarqueeRow direction="ltr" tools={ROW_LTR} />
          <MarqueeRow direction="rtl" tools={ROW_RTL} />
        </div>
      </div>
    </section>
  );
}
