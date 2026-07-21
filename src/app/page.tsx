"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Download,
  ArrowRight,
  Cpu,
  Layers,
  Zap,
  GitBranch,
  Brain,
  Terminal,
  ExternalLink,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const experiences = [
  {
    role: "Sr. JavaScript Developer",
    company: "Srijan Technologies (A Material+ Company)",
    period: "Jan 2021 – Present",
    location: "India",
    highlights: [
      "Led frontend delivery of DLL — a data-heavy global consulting tool processing carbon-emission datasets for thousands of daily users.",
      "Architected React + Redux + react-query data flows with custom spreadsheets, interactive Recharts, and filtered views.",
      "Migrated Gopher Go backend from Ruby on Rails to Node.js microservices; integrated Stripe, Firebase, and Twilio.",
      "Owned sub-2s API response optimization under heavy load via indexing, Redis caching, and query refactoring.",
      "Mentored engineers, drove code reviews, and set architecture standards across front and backend.",
    ],
  },
  {
    role: "Web Developer",
    company: "Jai Infoway",
    period: "Jan 2021 – Jan 2022",
    location: "Ranchi, India",
    highlights: [
      "Built responsive, production-grade ReactJS UIs for diverse client products.",
      "Delivered end-to-end features from Figma to deployment with zero handoff ambiguity.",
      "Owned client communication, demos, and iteration cycles.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Freelancer.com",
    period: "Jun 2020 – Jan 2021",
    highlights: [
      "Built a React flipbook, digital events platform, and OTP-authenticated booking apps for clients.",
      "Integrated dynamic REST APIs; earned top feedback for delivery speed and quality.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "OSLO Rental",
    period: "Nov 2019 – Jun 2020",
    location: "Dhanbad–Ranchi",
    highlights: [
      "Built component-driven React UIs with Redux/Context API for financial operations.",
      "Delivered production features and maintained code quality via rigorous multi-environment testing.",
    ],
  },
];

const skillGroups = [
  {
    icon: Layers,
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    icon: Terminal,
    label: "Backend",
    skills: ["Node.js", "Fastify", "Express", "Python / FastAPI", "REST", "WebSockets"],
  },
  {
    icon: GitBranch,
    label: "Data & Infra",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Docker", "AWS", "GitHub Actions"],
  },
  {
    icon: Brain,
    label: "AI & Agentic",
    skills: ["LangGraph", "LangChain", "RAG / Vector DB", "OpenAI API", "Ollama", "Embeddings"],
  },
  {
    icon: Cpu,
    label: "Systems",
    skills: ["Rust", "Microservices", "Event-Driven Architecture", "BullMQ", "Monorepo"],
  },
];

const projects = [
  {
    title: "Yoni",
    subtitle: "AI Specification Language",
    desc: "From one spec, everything emerges. A software specification language where you describe intent — AI (or the compiler toolchain) decides implementation.",
    tags: ["Python", "TypeScript", "AI Compiler"],
    href: "https://github.com/Bikash9609/yoni",
    external: true,
    highlight: true,
    icon: "🧠",
  },
  {
    title: "Deep Research Agent (DdiverRAG)",
    subtitle: "Autonomous AI Researcher",
    desc: "LangGraph-based stateful agent with Belief State and Entropy-driven decision loops — multi-turn research that thinks before it answers.",
    tags: ["Python", "LangGraph", "ChromaDB", "FastAPI"],
    href: "/blog/deep-research-agent",
    external: false,
    icon: "🔬",
  },
  {
    title: "ChronicStream",
    subtitle: "Low-latency Data Pipelines in Rust",
    desc: "Uninterrupted, low-latency data streaming pipeline. Built in Rust for maximum throughput and memory efficiency where Node.js becomes a bottleneck.",
    tags: ["Rust", "Systems Programming", "Streaming"],
    href: "https://github.com/Bikash9609/chronic_stream",
    external: true,
    icon: "⚡",
  },
  {
    title: "Thin",
    subtitle: "Cross-Platform App + Aggregator",
    desc: "React Native client + Fastify backend + Python ETL aggregator. Clear separation of concerns — heavy ETL never touches the user path.",
    tags: ["React Native", "TypeScript", "Python", "PostgreSQL"],
    href: "https://www.producthunt.com/products/thin/launches/thin",
    external: true,
    icon: "📱",
  },
  {
    title: "Webrat",
    subtitle: "Chrome Extension — Community Trust",
    desc: "Crowdsourced website safety ratings. React 19, Tailwind v4, Google OAuth, PostgreSQL/Drizzle. Community is the best antivirus.",
    tags: ["React 19", "Tailwind v4", "Node.js", "Chrome Extension"],
    href: "/blog/building-webrat",
    external: false,
    icon: "🛡️",
  },
];

const certifications = [
  { title: "AI Agents Fundamentals", issuer: "Hugging Face", date: "Jan 2026", id: "BIkash9609" },
  { title: "Learn Rust by Building Real Applications", issuer: "Udemy", date: "Dec 2024", id: "UC-893559a5" },
];

const principles = [
  { icon: "🎯", title: "Right tool, right scope", body: "I pick PostgreSQL over MongoDB when data is relational. I reach for Rust when Node.js becomes a bottleneck. I use LLMs when pattern-matching beats explicit logic — not to seem modern." },
  { icon: "📐", title: "Architecture over cleverness", body: "A system that a new engineer can onboard in a day is worth more than one that impresses in a README. I optimize for cognitive load, not LOC." },
  { icon: "⚡", title: "Performance is a feature", body: "Sub-2s APIs, non-blocking React renders, Rust for hot paths, Redis for read amplification. I measure before I optimize — but I always measure." },
  { icon: "🤖", title: "AI-augmented, not AI-replaced", body: "I build systems where LLMs handle ambiguity and humans handle judgment. Agents are orchestrators, not oracles. I design the graph, the beliefs, the fallbacks." },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* ── Hero Bento ── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main hero card — spans 2 cols */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="bento-card md:col-span-2 relative overflow-hidden"
        >
          {/* Background subtle grid */}
          <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col-reverse sm:flex-row items-start gap-6 sm:gap-8">
            <div className="flex-1 space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Available for work · Remote-first
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight leading-tight">
                  Bikash Tiwari
                </h1>
                <p className="gradient-text text-lg font-semibold mt-1">
                  Senior Full-Stack & AI Engineer
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-2">
                  <Globe className="h-3.5 w-3.5 shrink-0" />
                  Ranchi, Jharkhand · Remote Open
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                5+ years building production systems where I{" "}
                <span className="text-foreground font-medium">choose the right tool for the right problem</span>{" "}
                — from high-performance React/Node.js platforms to agentic AI pipelines and Rust modules for hot paths. I don&apos;t just ship features; I make architecture decisions that age well.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <Button className="rounded-full h-9 text-sm" asChild>
                  <a href="/resume.pdf" download="Bikash_Tiwari_Resume.pdf">
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                    Resume
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full h-9 text-sm" asChild>
                  <Link href="mailto:bikashtiwari020@gmail.com">
                    <Mail className="mr-1.5 h-3.5 w-3.5" />
                    Get in touch
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" asChild>
                  <Link href="https://github.com/Bikash9609" target="_blank" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" asChild>
                  <Link href="https://www.linkedin.com/in/bikash-t-35ab48179/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative shrink-0">
              <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/10">
                <Image
                  src="/profile.jpeg"
                  alt="Bikash Tiwari"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 rounded-full bg-green-500 border-2 border-background h-4 w-4" title="Available" />
            </div>
          </div>
        </motion.div>

        {/* Right column: quick stats + principles teaser */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="bento-card flex flex-col justify-between gap-6"
        >
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">By the numbers</p>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[
                { val: "5+", label: "Years Production" },
                { val: "10+", label: "Shipped Products" },
                { val: "4", label: "Languages Used" },
                { val: "∞", label: "Curiosity level" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-muted/50 p-3 text-center">
                  <p className="text-xl font-bold gradient-text">{s.val}</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Core Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {["Next.js", "Node.js", "TypeScript", "Python", "Rust", "LangGraph"].map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Engineering Philosophy ── */}
      <motion.section variants={fadeUp} custom={2}>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-4 w-4 text-primary" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            How I think about engineering
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              className="bento-card space-y-2 group"
            >
              <span className="text-2xl block">{p.icon}</span>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Featured Projects ── */}
      <motion.section variants={fadeUp} custom={3}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-primary" />
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Selected projects
            </h2>
          </div>
          <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground hover:text-primary" asChild>
            <Link href="/projects">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} custom={i}>
              <Link
                href={p.href}
                target={p.external ? "_blank" : undefined}
                rel={p.external ? "noopener noreferrer" : undefined}
                className="block group h-full"
              >
                <div
                  className={`bento-card h-full flex flex-col gap-3 ${p.highlight ? "gradient-border glow-border" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">{p.icon}</span>
                    {p.highlight && (
                      <Badge className="text-[10px] py-0 px-2 bg-primary/20 text-primary border-primary/30">
                        Latest
                      </Badge>
                    )}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs text-primary/80 font-medium mt-0.5">{p.subtitle}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.tags.map((t) => (
                      <span key={t} className="skill-tag text-[10px] py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Skills ── */}
      <motion.section variants={fadeUp} custom={4}>
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-4 w-4 text-primary" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Technical Stack
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              variants={fadeUp}
              custom={i}
              className="bento-card space-y-3"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                  <g.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-xs font-semibold text-foreground">{g.label}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {g.skills.map((s) => (
                  <span key={s} className="skill-tag text-[10px] py-0.5">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Experience ── */}
      <motion.section variants={fadeUp} custom={5}>
        <div className="flex items-center gap-2 mb-4">
          <Layers className="h-4 w-4 text-primary" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Experience
          </h2>
        </div>
        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              custom={i}
              className="bento-card group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.company}{exp.location ? ` · ${exp.location}` : ""}</p>
                </div>
                <span className="shrink-0 text-xs font-mono text-primary/80 bg-primary/10 rounded-full px-2.5 py-0.5 border border-primary/20">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Certifications + Blog CTA ── */}
      <motion.section variants={fadeUp} custom={6}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-4 w-4 text-primary" />
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                Certifications
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="bento-card space-y-1">
                  <p className="text-sm font-semibold text-foreground leading-tight">{cert.title}</p>
                  <p className="text-xs text-primary">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date} · <span className="font-mono">{cert.id}</span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Blog CTA */}
          <div className="bento-card gradient-border flex flex-col justify-between gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">Writing</p>
              <h3 className="text-sm font-bold text-foreground leading-tight">
                I write about systems, tools, and the decisions between them.
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Deep dives into LangGraph agents, Rust pipelines, React architecture, and production lessons.
              </p>
            </div>
            <Button variant="outline" className="w-full rounded-xl text-xs gap-1.5 border-primary/30 hover:bg-primary/10 hover:border-primary/60 hover:text-primary" asChild>
              <Link href="/blog">
                Read the blog <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
