"use client";

import { GithubLiveFeed } from "@/components/GithubLiveFeed";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GithubProjectsPage() {
  return (
    <div className="container px-4 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="flex flex-col gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button asChild variant="ghost" className="w-fit pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/projects">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Selected Works
            </Link>
          </Button>
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-heading sm:text-5xl">
            Open Source & Live Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A live feed of my latest public repositories, updated in real-time from GitHub.
          </p>
        </div>

        <GithubLiveFeed />
      </div>
    </div>
  );
}
