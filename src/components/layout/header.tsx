"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Writing", href: "/blog" },
  { name: "Contact", href: "mailto:bikashtiwari020@gmail.com" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-screen-lg mx-auto w-full flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border group-hover:border-primary/50 transition-colors">
            <Image
              src="/profile.jpeg"
              alt="Bikash"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight">
            Bikash<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-2">
          {navItems.map((item) => {
            const isMailto = item.href.startsWith('mailto:');
            const commonProps = {
              key: item.href,
              className: cn(
                "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                pathname === item.href || (pathname === '/' && item.href === '/#work')
                  ? "text-foreground bg-muted/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              )
            };
            
            return isMailto ? (
              <a href={item.href} {...commonProps}>
                {item.name}
              </a>
            ) : (
              <Link href={item.href} {...commonProps}>
                {item.name}
              </Link>
            );
          })}
          <div className="ml-2 pl-2 border-l border-border/50">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex items-center md:hidden gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-4 max-w-screen-lg mx-auto">
              {navItems.map((item) => {
                const isMailto = item.href.startsWith('mailto:');
                const commonProps = {
                  key: item.href,
                  onClick: () => setIsOpen(false),
                  className: cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )
                };

                return isMailto ? (
                  <a href={item.href} {...commonProps}>
                    {item.name}
                  </a>
                ) : (
                  <Link href={item.href} {...commonProps}>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
