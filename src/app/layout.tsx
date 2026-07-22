import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackgroundWatermark } from "@/components/BackgroundWatermark";
import { MouseTracker } from "@/components/MouseTracker";

export const metadata: Metadata = {
  title: "Bikash Tiwari — Senior Full-Stack & AI Engineer",
  description:
    "Full-Stack engineer who architects AI-augmented systems — from agentic pipelines and RAG frameworks to production-grade React/Node.js platforms. 5+ years. Ranchi → Remote.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "LangGraph",
    "RAG",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Rust",
    "Agentic AI",
  ],
  authors: [{ name: "Bikash Tiwari" }],
  creator: "Bikash Tiwari",
  openGraph: {
    type: "website",
    title: "Bikash Tiwari — Senior Full-Stack & AI Engineer",
    description:
      "Full-Stack engineer who architects AI-augmented systems — from agentic pipelines and RAG frameworks to production-grade React/Node.js platforms.",
    siteName: "Bikash Tiwari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikash Tiwari — Senior Full-Stack & AI Engineer",
    description:
      "Full-Stack engineer who architects AI-augmented systems — from agentic pipelines and RAG frameworks to production-grade React/Node.js platforms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&f[]=cabinet-grotesk@900,800,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "font-sans antialiased min-h-screen flex flex-col bg-background"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MouseTracker />
          <BackgroundWatermark />
          <Header />
          <main className="flex-1 flex flex-col max-w-screen-lg mx-auto w-full px-4 py-8 md:py-12 relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
