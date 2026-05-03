import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MotionPreferences } from "@/components/providers/MotionPreferences";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE_URL } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GenValue Academy | AI Tools Mastery Program",
  description:
    "12-week practical program covering 40+ AI tools. Learn to choose the right AI tool for every task. Enroll with GenValue Academy.",
  keywords: [
    "AI tools course",
    "AI mastery program",
    "learn AI tools",
    "ChatGPT course",
    "Claude course",
    "Midjourney course",
  ],
  applicationName: "GenValue Academy",
  authors: [{ name: "GenValue Academy", url: SITE_URL }],
  creator: "GenValue Academy",
  publisher: "GenValue Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GenValue Academy | AI Tools Mastery Program",
    description:
      "12-week practical program covering 40+ AI tools. Learn to choose the right AI tool for every task. Enroll with GenValue Academy.",
    siteName: "GenValue Academy",
    locale: "en_US",
    type: "website",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GenValue Academy — AI Tools Mastery Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenValue Academy | AI Tools Mastery Program",
    description:
      "12-week practical program covering 40+ AI tools. Learn to choose the right AI tool for every task. Enroll with GenValue Academy.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${dmSans.className} bg-zinc-50 text-zinc-900 antialiased dark:bg-[#050508] dark:text-slate-300`}
      >
        <ThemeProvider>
          <MotionPreferences>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-3 focus:text-base focus:font-semibold focus:text-white focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#2563EB]"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </MotionPreferences>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
