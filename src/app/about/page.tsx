"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: "easeOut" as const,
    },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const latestProjects = [
  { name: "Yoni", desc: "Software specification language — you describe intent, AI implements it.", href: "https://github.com/Bikash9609/yoni", tag: "Python / TypeScript" },
  { name: "Layr", desc: "High-performance data layering in Rust.", href: "https://github.com/Bikash9609/Layr", tag: "Rust" },
  { name: "ChronicStream", desc: "Uninterrupted, low-latency data pipelines.", href: "https://github.com/Bikash9609/chronic_stream", tag: "Rust" },
  { name: "DdiverRAG", desc: "Autonomous deep research agent with belief states and entropy-driven loops.", href: "https://github.com/Bikash9609/DdiverRAG", tag: "Python / LangGraph" },
];

export default function AboutPage() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full"
    >
      <motion.section variants={fadeUp} custom={0} className="bento-card flex flex-col space-y-4">
        <h1 className="text-2xl font-bold font-heading tracking-tight">
          About me
        </h1>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            I&apos;m Bikash — a Senior Full-Stack Engineer based in India. 5+ years building systems that
            need to actually work under production conditions: sub-2s APIs, non-blocking renders, reliable ETL pipelines,
            and more recently, agentic AI systems that reason instead of just retrieve.
          </p>
          <p>
            My background is in JavaScript/TypeScript across the stack — React, Next.js, Node.js, Fastify — but I reach for
            Python when I&apos;m doing data work or building AI pipelines, and Rust when a hot path in Node.js becomes
            a throughput bottleneck. The choice of tool is always deliberate.
          </p>
          <p>
            I&apos;ve worked on products ranging from enterprise carbon-emission analysis platforms (thousands of daily users,
            heavy datasets, custom spreadsheets in React) to cross-platform mobile apps with Python ETL aggregators to
            community forums to Chrome extensions. The variety is intentional — I learn more from different problem domains
            than from depth in a single one.
          </p>
          <p>
            The thing I care about most is{" "}
            <span className="text-foreground font-medium">architecture that ages well</span>. Not clever code.
            Not code that impresses in a PR review. Code that a new engineer can onboard on in a day,
            that a future you can maintain without archaeology, and that fails gracefully when it does fail.
          </p>
        </div>
      </motion.section>

      <motion.section variants={fadeUp} custom={1} className="flex flex-col">
        <div className="bento-card flex items-center gap-2">
          <Cpu className="h-4 w-4 text-primary" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">How I approach technology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {[
            {
              q: "SQL or NoSQL?",
              a: "SQL — until the data model genuinely doesn't fit a relational structure. I use PostgreSQL JSONB for semi-structured data so I can stay on one system longer. I reach for MongoDB when document mutation patterns are the norm and joins would be artificial."
            },
            {
              q: "REST or GraphQL?",
              a: "REST for most backends. GraphQL when clients have meaningfully different data requirements and over-fetching is a real network cost — typically mobile clients hitting a shared API. GraphQL's tooling overhead isn't worth it for a standard web app with predictable data needs."
            },
            {
              q: "When do you use AI in a system?",
              a: "When the problem involves ambiguity that explicit rules can't handle well. Classification, extraction, synthesis, intent understanding. I don't reach for LLMs to do things deterministic code does better — filtering, sorting, arithmetic, rule-based validation."
            },
            {
              q: "Microservices or monolith?",
              a: "Monolith first. Extract services only when a component has a genuinely different scaling axis, failure mode, or deployment lifecycle. Premature decomposition creates distributed systems complexity without the benefits."
            },
          ].map((item, i) => (
            <div key={i} className="bento-card space-y-1.5">
              <p className="text-sm font-semibold text-foreground">{item.q}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={fadeUp} custom={2} className="flex flex-col">
        <div className="bento-card flex items-center gap-2">
          <Github className="h-4 w-4 text-primary" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Recent activity</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {latestProjects.map((p) => (
            <Link key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bento-card h-full space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold group-hover:text-primary transition-colors">{p.name}</p>
                  <span className="skill-tag text-[10px] shrink-0">{p.tag}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section variants={fadeUp} custom={3} className="flex flex-col">
        <div className="bento-card flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Education</h2>
        </div>
        <div className="bento-card">
          <p className="text-sm font-semibold">Bachelor&apos;s Degree in Computer Applications</p>
          <p className="text-xs text-primary mt-0.5">DSPMU, Ranchi, India</p>
          <p className="text-xs text-muted-foreground mt-0.5">GPA: 8.8 · Graduated 2022</p>
        </div>
      </motion.section>

      <motion.section variants={fadeUp} custom={4}>
        <div className="bento-card gradient-border flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold">Looking for a thorough engineer?</p>
            <p className="text-xs text-muted-foreground mt-0.5">Open to remote full-time and contract roles.</p>
          </div>
          <a href="mailto:bikashtiwari020@gmail.com" className="shrink-0">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
              Get in touch <ArrowRight className="h-3 w-3" />
            </span>
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}
