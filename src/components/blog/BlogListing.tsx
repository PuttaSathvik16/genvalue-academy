"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "@/data/posts";
import {
  authorInitials,
  blogCategoriesFromPosts,
  categoryBadgeClass,
  formatPostDate,
} from "@/lib/blog";

function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0D1B2A] dark:hover:border-[#2563EB]/30 ${featured ? "lg:min-h-[420px]" : ""}`}
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#050508]">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-white/5">
          <Image
            src={post.coverImage}
            alt={`Cover image: ${post.title}`}
            fill
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          />
        </div>
        <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-8" : "p-5 sm:p-6"}`}>
          <span
            className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${categoryBadgeClass(post.category)}`}
          >
            {post.category}
          </span>
          <h2
            className={`mt-3 font-bold leading-snug text-zinc-900 transition group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-[#60A5FA] ${featured ? "line-clamp-2 text-xl sm:text-2xl" : "line-clamp-2 text-lg"}`}
          >
            {post.title}
          </h2>
          <p
            className={`mt-2 flex-1 leading-relaxed text-zinc-600 dark:text-slate-400 ${featured ? "line-clamp-3 text-base sm:text-[1.05rem]" : "line-clamp-3 text-sm sm:text-base"}`}
          >
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-white/10">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D1B2A] text-xs font-bold text-[#FBBF24] ring-2 ring-[#FBBF24]/40 dark:bg-zinc-800"
              aria-hidden
            >
              {authorInitials(post.author)}
            </span>
            <div className="min-w-0 flex-1 text-xs text-zinc-600 dark:text-slate-400 sm:text-sm">
              <p className="truncate font-medium text-zinc-800 dark:text-slate-200">{post.author}</p>
              <p className="mt-0.5 truncate">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span className="mx-1.5 text-zinc-300 dark:text-slate-600" aria-hidden>
                  ·
                </span>
                {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

type Props = {
  readonly posts: readonly Post[];
};

export function BlogListing({ posts }: Props) {
  const categories = useMemo(() => blogCategoriesFromPosts(posts.map((p) => p.category)), [posts]);
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return [...posts];
    return posts.filter((p) => p.category === filter);
  }, [posts, filter]);

  const sorted = useMemo(
    () => [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [filtered],
  );

  const featuredPosts = useMemo(() => sorted.filter((p) => p.featured), [sorted]);
  const featuredSlugs = useMemo(() => new Set(featuredPosts.map((p) => p.slug)), [featuredPosts]);
  const gridPosts = useMemo(() => sorted.filter((p) => !featuredSlugs.has(p.slug)), [sorted, featuredSlugs]);

  return (
    <div className="min-h-[65vh] bg-zinc-50 px-4 py-14 text-zinc-700 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:bg-[#050508] dark:text-slate-300">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">Insights</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            GenValue Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-zinc-600 sm:text-lg dark:text-slate-400">
            Practical AI insights from the people who use these tools daily.
          </p>
        </header>

        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:mb-12"
          role="toolbar"
          aria-label="Filter by category"
        >
          <button
            type="button"
            onClick={() => setFilter("All")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === "All"
                ? "bg-[#2563EB] text-white shadow-md"
                : "border border-zinc-200 bg-white text-zinc-700 hover:border-[#2563EB]/40 dark:border-white/15 dark:bg-[#0D1B2A] dark:text-slate-200 dark:hover:border-[#2563EB]/40"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === cat
                  ? "bg-[#2563EB] text-white shadow-md"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:border-[#2563EB]/40 dark:border-white/15 dark:bg-[#0D1B2A] dark:text-slate-200 dark:hover:border-[#2563EB]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {featuredPosts.length > 0 ? (
          <section className="mb-14 sm:mb-16" aria-labelledby="featured-posts-heading">
            <h2 id="featured-posts-heading" className="sr-only">
              Featured posts
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} featured />
              ))}
            </div>
          </section>
        ) : null}

        <section aria-labelledby="all-posts-heading">
          <h2
            id="all-posts-heading"
            className="mb-8 text-center text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl"
          >
            All posts
          </h2>
          {gridPosts.length > 0 ? (
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {gridPosts.map((post) => (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-zinc-600 dark:text-slate-400">
              No posts in this category yet.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
