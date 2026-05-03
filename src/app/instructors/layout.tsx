import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: "/instructors",
    title: "Instructors | GenValue Academy",
    description:
      "Meet Sathvik Putta — Lead Instructor at GenValue Academy. Practitioner-led AI tools training with real-world workflows.",
    ogTitle: "Instructors | GenValue Academy",
  });
}

export default function InstructorsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
