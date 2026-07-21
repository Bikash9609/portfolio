import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm py-8 mt-8">
      <div className="max-w-screen-lg mx-auto w-full px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-foreground">
              Bikash Tiwari<span className="text-primary">.</span>
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Senior Full-Stack & AI Engineer · Ranchi → Remote
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="mailto:bikashtiwari020@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/Bikash9609"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bikash-t-35ab48179/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Bikash Tiwari. All rights reserved.</p>
          <p>Built with Next.js 16 · Tailwind v4 · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
