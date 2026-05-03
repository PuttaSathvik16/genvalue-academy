import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/data/posts";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/blog",
    title: "Blog | GenValue Academy",
    description:
      "Practical articles on AI tools, workflows, and choosing the right assistant for every professional task.",
    ogTitle: "Blog | GenValue Academy",
  });
}

function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}

export default function BlogPage() {
  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="min-h-[65vh] bg-zinc-50 px-4 py-14 text-zinc-700 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:bg-[#050508] dark:text-slate-300">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">Insights</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-zinc-600 sm:text-lg dark:text-slate-400">
            Practical notes on AI tools, workflows, and judgment — the same themes we teach in AI Tools
            Mastery.
          </p>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {sorted.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#0D1B2A] dark:hover:border-[#2563EB]/35">
                <Link href={`/blog/${post.slug}`} className="group block focus-visible:outline-none">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-white/5">
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex w-fit rounded-full bg-[#2563EB]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2563EB] dark:bg-[#2563EB]/20 dark:text-[#60A5FA]">
                      {post.category}
                    </span>
                    <h2 className="mt-3 text-lg font-bold leading-snug text-zinc-900 transition group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-[#60A5FA]">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-zinc-100 pt-4 text-xs text-zinc-500 dark:border-white/10 dark:text-slate-500">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      <span aria-hidden className="text-zinc-300 dark:text-slate-600">
                        ·
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
