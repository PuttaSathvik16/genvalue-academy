import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { getPostBySlug, getPostParagraphs, getRelatedPosts, POSTS } from "@/data/posts";
import { buildPageMetadata } from "@/lib/seo";

type Props = Readonly<{ params: Promise<{ slug: string }> }>;

function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return buildPageMetadata({
    path: `/blog/${post.slug}`,
    title: `${post.title} | GenValue Academy`,
    description: post.excerpt,
    ogTitle: post.title,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const related = getRelatedPosts(post.slug, 2);
  const paragraphs = getPostParagraphs(post);

  return (
    <article className="bg-zinc-50 pb-20 text-zinc-700 dark:bg-[#050508] dark:text-slate-300">
      <div className="border-b border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:text-slate-400 dark:hover:text-[#60A5FA]"
          >
            <FaArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back to blog
          </Link>
        </div>
      </div>

      <div className="relative mx-auto aspect-[21/9] max-h-[420px] w-full max-w-5xl overflow-hidden sm:aspect-[2/1] lg:rounded-b-2xl lg:border-x lg:border-b lg:border-zinc-200 dark:lg:border-white/10">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 sm:pt-12">
        <header>
          <span className="inline-flex rounded-full bg-[#2563EB]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2563EB] dark:bg-[#2563EB]/20 dark:text-[#60A5FA]">
            {post.category}
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-zinc-200 pb-8 text-sm text-zinc-600 dark:border-white/10 dark:text-slate-400">
            <span>
              <span className="font-medium text-zinc-800 dark:text-slate-200">{post.author}</span>
              <span className="text-zinc-500 dark:text-slate-500"> · {post.authorRole}</span>
            </span>
            <span className="text-zinc-300 dark:text-slate-600" aria-hidden>
              ·
            </span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span className="text-zinc-300 dark:text-slate-600" aria-hidden>
              ·
            </span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-700 dark:text-slate-300 sm:text-lg">
          {paragraphs.map((paragraph, i) => (
            <p key={`p-${i}`}>{paragraph}</p>
          ))}
        </div>
      </div>

      {related.length > 0 ? (
        <div className="mx-auto mt-16 max-w-5xl border-t border-zinc-200 px-4 pt-12 sm:px-6 dark:border-white/10">
          <h2 className="text-center text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
            Related posts
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-white/10 dark:bg-[#0D1B2A] dark:hover:border-[#2563EB]/35"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-white/5">
                    <Image
                      src={r.coverImage}
                      alt={`Cover image: ${r.title}`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
                      {r.category}
                    </span>
                    <span className="mt-2 text-lg font-bold leading-snug text-zinc-900 group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-[#60A5FA]">
                      {r.title}
                    </span>
                    <span className="mt-3 text-sm text-zinc-500 dark:text-slate-500">{r.readTime}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
