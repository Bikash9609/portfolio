import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { StackOverflow } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/30 backdrop-blur-sm py-12 mt-12">
      <div className="max-w-screen-lg mx-auto w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-base font-heading font-bold text-foreground">
              Bikash Tiwari<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Senior Full-Stack & AI Engineer · Ranchi → Remote
            </p>
            <a href="mailto:bikashtiwari020@gmail.com" className="inline-block mt-3 text-sm font-medium text-primary hover:underline">
              bikashtiwari020@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Bikash9609"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-md border border-border/50"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bikash-t-35ab48179/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-md border border-border/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://stackoverflow.com/users/12255214/blatzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-md border border-border/50"
              aria-label="StackOverflow"
            >
              <StackOverflow className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/80">
          <p>© {new Date().getFullYear()} Bikash Tiwari. All rights reserved.</p>
          <p>Built with Next.js 16 · Tailwind v4 · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
