export type BlogPost = {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly date: string;
  readonly author: string;
  readonly category: string;
  readonly readTime: string;
  readonly coverImage: string;
  /** Paragraphs for the article body */
  readonly content: readonly string[];
};

export const POSTS: readonly BlogPost[] = [
  {
    slug: "5-ai-tools-every-marketer-needs-2026",
    title: "The 5 AI Tools Every Marketer Needs in 2026",
    excerpt:
      "From research and copy drafts to creative assets and analytics — here are the tools we reach for first when campaigns need to ship fast without sacrificing quality.",
    date: "2026-01-18",
    author: "Sathvik Putta",
    category: "Marketing",
    readTime: "8 min read",
    coverImage: "/blog/covers/marketing-2026.svg",
    content: [
      "Marketing teams in 2026 are judged less on how many tools they try and more on how consistently they deliver outcomes. The right AI stack shortens feedback loops: you draft, test, refine, and publish without losing the thread between strategy and execution.",
      "This guide assumes you already know your channels and personas. We focus on five categories — research synthesis, copy assistance, visual iteration, workflow automation, and measurement — and name specific tools that pair well with GenValue Academy’s judgment-first approach.",
      "Tool selection always depends on brand voice, compliance, and stack constraints. Use this list as a starting map, then narrow based on your procurement rules and what your team will actually adopt Monday morning.",
      "Expect follow-up posts that dive deeper into prompts, approval workflows, and how to document AI-assisted work for stakeholders who still ask, “Did a human sign off on this?”",
    ],
  },
  {
    slug: "choose-chatgpt-claude-gemini",
    title: "How to Choose Between ChatGPT, Claude, and Gemini",
    excerpt:
      "General-purpose assistants look interchangeable until you stress-test them on your real tasks. Here’s a practical framework for picking the right model for writing, coding, research, and multimodal work.",
    date: "2026-01-08",
    author: "Sathvik Putta",
    category: "Strategy",
    readTime: "12 min read",
    coverImage: "/blog/covers/model-choice.svg",
    content: [
      "When someone asks which assistant is “best,” the honest answer is: best for what? Context window size, tone, instruction-following, and multimodal features all shift the answer — sometimes weekly as vendors ship updates.",
      "Start by listing three recurring tasks you perform with an assistant: for example, long-form drafting, spreadsheet reasoning, and image critique. Score candidates against those tasks with the same prompts and rubric each time.",
      "Budget and privacy matter as much as raw capability. Enterprise contracts, data retention policies, and regional hosting can disqualify an otherwise powerful option — decide those constraints before you fall in love with a demo.",
      "We teach this comparison method directly in AI Tools Mastery so you’re not guessing when leadership asks why you standardized on one stack over another.",
    ],
  },
  {
    slug: "first-ai-workflow-zapier-make",
    title: "Building Your First AI Workflow with Zapier and Make",
    excerpt:
      "Connect triggers, LLM steps, and human approvals without writing a full backend. A starter pattern you can clone for lead routing, content prep, and internal notifications.",
    date: "2025-12-12",
    author: "Sathvik Putta",
    category: "Automation",
    readTime: "10 min read",
    coverImage: "/blog/covers/automation-workflow.svg",
    content: [
      "Automation platforms shine when they glue together systems your team already uses. Zapier and Make both support HTTP calls to language models, branching logic, and error handling — but their UX and pricing trade-offs differ.",
      "Begin with a single high-volume pain point: e.g., qualifying inbound leads from a form. Map the happy path first — form submit, summarize with an LLM, post to Slack — then add retries and a human review branch.",
      "Secrets and API keys belong in the platform vault, not in shared docs. Rotate keys when people leave the project, and log which version of a workflow ran for each record when auditing matters.",
      "This article pairs with Week 7–9 themes in our syllabus: chaining tools responsibly and documenting what ran automatically versus what a human approved.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): readonly BlogPost[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}
