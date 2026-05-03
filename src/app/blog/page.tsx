import type { Metadata } from "next";
import { BlogListing } from "@/components/blog/BlogListing";
import { posts } from "@/data/posts";
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

export default function BlogPage() {
  return <BlogListing posts={posts} />;
}
