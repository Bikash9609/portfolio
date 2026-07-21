"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { StackOverflow } from "@/components/icons";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const experiences = [
  {
    role: "Sr. JavaScript Developer",
    company: "Material+ (Srijan)",
    period: "2021–Present",
    desc: "Architected React/Node data pipelines and optimized sub-2s API latency for global consulting tools. Mentoring 5+ engineers.",
  },
  {
    role: "Web Developer",
    company: "Jai Infoway",
    period: "2021–2022",
    desc: "Full-stack delivery. Built production React UIs and PostgreSQL/Node microservices with zero handoff ambiguity.",
  },
  {
    role: "Freelance & Frontend Developer",
    company: "Various",
    period: "2019–2021",
    desc: "Built component-driven UIs and digital event platforms. Integrated REST APIs and established rigorous testing.",
  },
];

const projects = [
  {
    title: "Yoni",
    subtitle: "AI Specification Language",
    desc: "From one spec, everything emerges. A software specification language where you describe intent — the compiler toolchain decides implementation.",
    tags: ["Python", "TypeScript", "AI Compiler"],
    href: "https://github.com/Bikash9609/yoni",
    external: true,
    colSpan: "md:col-span-8",
    featured: true,
  },
  {
    title: "Deep Research Agent",
    subtitle: "Autonomous RAG",
    desc: "LangGraph-based stateful agent with Belief State and Entropy-driven decision loops.",
    tags: ["LangGraph", "ChromaDB"],
    href: "/blog/deep-research-agent",
    external: false,
    colSpan: "md:col-span-4",
    featured: false,
  },
  {
    title: "ChronicStream",
    subtitle: "Rust Data Pipelines",
    desc: "Low-latency data streaming pipeline built in Rust for maximum throughput.",
    tags: ["Rust", "Systems"],
    href: "https://github.com/Bikash9609/chronic_stream",
    external: true,
    colSpan: "md:col-span-4",
    featured: false,
  },
  {
    title: "Thin",
    subtitle: "Cross-Platform App",
    desc: "React Native client + Fastify backend + Python ETL aggregator. Clear separation of concerns.",
    tags: ["React Native", "Fastify"],
    href: "https://www.producthunt.com/products/thin/launches/thin",
    external: true,
    colSpan: "md:col-span-4",
    featured: false,
  },
  {
    title: "Webrat",
    subtitle: "Chrome Extension",
    desc: "Crowdsourced website safety ratings using React 19, Tailwind v4, and PostgreSQL.",
    tags: ["React 19", "PostgreSQL"],
    href: "/blog/building-webrat",
    external: false,
    colSpan: "md:col-span-4",
    featured: false,
  },
];

const capabilities = [
  { label: "Frontend", tools: "React, Next.js, TypeScript, Tailwind" },
  { label: "Backend", tools: "Node.js, Fastify, Python, REST/GraphQL" },
  { label: "Data & Infra", tools: "PostgreSQL, Redis, Docker, AWS" },
  { label: "AI Systems", tools: "LangGraph, RAG, Ollama, Vector DBs" },
];

export default function Home() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="space-y-4 md:space-y-6 pb-12"
    >
      {/* ── Section 1: Hero Bento ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Intro Card */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="bento-card md:col-span-7 md:row-span-2 flex flex-col justify-between gap-6"
        >
          <div>
            <p className="text-sm text-primary font-medium mb-3">
              Senior Full-Stack Engineer • Performance • AI Architecture
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4 text-foreground">
              I build fast, reliable software systems for real-world scale.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              From MERN and Fastify to event-driven systems, GraphQL performance, Kubernetes deployments, and local LLM workflows.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <Button className="rounded-lg h-10 px-5 text-sm" asChild>
              <Link href="#work">View selected work</Link>
            </Button>
            <Button variant="outline" className="rounded-lg h-10 px-5 text-sm" asChild>
              <Link href="mailto:bikashtiwari020@gmail.com">Contact me</Link>
            </Button>
          </div>
        </motion.div>

        {/* Metrics Card */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="bento-card md:col-span-3 flex flex-col justify-center gap-1"
        >
          <p className="text-3xl font-heading font-bold text-foreground">Sub-2s</p>
          <p className="text-sm text-muted-foreground leading-tight">API latencies achieved via indexing and query refactoring</p>
        </motion.div>

        {/* Availability / Contact Card */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="bento-card md:col-span-2 flex flex-col justify-center gap-3 items-start"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Available</span>
          </div>
          <div className="flex gap-2">
            <Link href="https://github.com/Bikash9609" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 bg-muted rounded-md"><Github className="w-4 h-4" /></Link>
            <Link href="https://www.linkedin.com/in/bikash-t-35ab48179/" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 bg-muted rounded-md"><Linkedin className="w-4 h-4" /></Link>
            <Link href="https://stackoverflow.com/users/12255214/blatzo" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 bg-muted rounded-md"><StackOverflow className="w-4 h-4" /></Link>
          </div>
        </motion.div>

        {/* Second Row of Supporting Cards */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="bento-card md:col-span-5 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4">
             <div className="h-16 w-16 overflow-hidden rounded-full border border-border shrink-0">
                <Image src="/profile.jpeg" alt="Bikash Tiwari" width={64} height={64} className="object-cover h-full w-full grayscale hover:grayscale-0 transition-all" />
              </div>
              <div>
                <p className="text-lg font-heading font-bold text-foreground">Bikash Tiwari</p>
                <p className="text-sm text-muted-foreground">Mentoring 5+ engineers · 6+ years</p>
              </div>
          </div>
        </motion.div>
      </section>

      {/* ── Section 2: Selected Work Grid ── */}
      <section id="work" className="pt-8">
        <h2 className="text-xl font-heading font-bold mb-4">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i + 4}
              className={`${p.colSpan}`}
            >
              <Link href={p.href} target={p.external ? "_blank" : undefined} className="block h-full group">
                <div className={`bento-card h-full flex flex-col justify-between ${p.featured ? 'featured' : ''}`}>
                   <div>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold font-heading group-hover:text-primary transition-colors">{p.title}</h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                     <p className="text-sm font-medium text-primary mb-2">{p.subtitle}</p>
                     <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                   </div>
                   <div className="flex gap-2 flex-wrap mt-auto">
                     {p.tags.map(t => (
                       <span key={t} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md font-medium border border-border/50">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Philosophy & Experience ── */}
      <section className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Philosophy */}
        <motion.div variants={fadeUp} custom={9} className="bento-card md:col-span-5 flex flex-col gap-4">
          <h2 className="text-xl font-heading font-bold">Engineering Philosophy</h2>
          <div className="space-y-3">
             <p className="text-sm text-muted-foreground leading-relaxed">
               I optimize for cognitive load, not lines of code. A system that a new engineer can onboard in a day is worth more than one that impresses in a README.
             </p>
             <p className="text-sm text-muted-foreground leading-relaxed">
               I pick PostgreSQL over MongoDB when data is relational. I reach for Rust when Node.js becomes a bottleneck. Performance is a feature, and architecture matters over cleverness.
             </p>
          </div>
          <div className="mt-auto pt-4 border-t border-border/50">
             <p className="text-sm font-medium text-foreground mb-1">Exploring Now</p>
             <p className="text-sm text-muted-foreground">Rust, backend framework design, LLM agents, privacy-preserving local AI.</p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={fadeUp} custom={10} className="bento-card md:col-span-7">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-xl font-heading font-bold">Experience</h2>
             <Button variant="ghost" size="sm" className="h-8 text-xs gap-1" asChild>
               <a href="/resume.pdf" download="Bikash_Tiwari_Resume.pdf">
                 Full Resume <Download className="w-3 h-3" />
               </a>
             </Button>
          </div>
          <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[1px] before:bg-border/60 ml-2">
             {experiences.map((exp, idx) => (
               <div key={idx} className="relative pl-8">
                 <div className="absolute left-[8px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                 <h3 className="text-sm font-bold text-foreground">{exp.company}</h3>
                 <div className="flex items-center gap-2 mt-0.5 mb-1.5">
                   <span className="text-xs font-medium text-primary">{exp.role}</span>
                   <span className="text-xs text-muted-foreground">· {exp.period}</span>
                 </div>
                 <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
               </div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* ── Section 4: Expertise Strip ── */}
      <section className="pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.label} variants={fadeUp} custom={11 + i} className="bento-card flex flex-col justify-center">
              <h3 className="text-sm font-bold text-foreground mb-1">{cap.label}</h3>
              <p className="text-sm text-muted-foreground">{cap.tools}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Section 5: Writing / OSS ── */}
      <section className="pt-8">
         <motion.div variants={fadeUp} custom={15} className="bento-card relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-heading font-bold mb-2">Writing & Experiments</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                Deep dives into LangGraph agents, Rust pipelines, React architecture, and production lessons. I write about systems, tools, and the decisions between them.
              </p>
            </div>
            <Button variant="outline" className="shrink-0 gap-2 rounded-lg" asChild>
               <Link href="/blog">Read the blog <ArrowRight className="w-4 h-4" /></Link>
            </Button>
         </motion.div>
      </section>

    </motion.div>
  );
}
