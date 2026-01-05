"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
  Download,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <section className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 md:gap-4">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl">
              Bikash Tiwari
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Senior Full Stack Developer
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Globe className="h-3.5 w-3.5" /> Ranchi, Jharkhand, India •
              Remote Open
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full" asChild>
              <a href="/resume.pdf" download="Bikash_Tiwari_Resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              asChild
            >
              <Link href="mailto:bikashtiwari020@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              asChild
            >
              <Link
                href="https://github.com/Bikash9609"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/bikash-t-35ab48179/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex md:flex-col items-center md:items-end gap-6 md:gap-4">
          <div className="relative h-32 w-32 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-full border-4 border-muted">
            <Image
              src="/profile.jpeg"
              alt="Bikash Tiwari"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 md:items-end md:text-right hidden md:flex">
            {/* Desktop contact details hidden here as they are now in buttons/left */}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-bold font-heading mb-4 border-b pb-2">
          About
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-none">
          Senior full-stack JavaScript leader based in Jharkhand with 5+ years
          delivering scalable, high-performance web applications. Expertise in
          React/Next.js, Node.js and Rust for performance-sensitive modules,
          combined with enterprise-grade practices across frontend, backend and
          infrastructure. Experienced mentor and architect who drives code
          reviews, cross-team collaboration and architecture decisions to ensure
          maintainability and reliability. Currently a Senior Software Developer
          at Material+, providing a solid platform for technical leadership and
          delivery rather than a founder-focused profile.
        </p>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold font-heading mb-4 border-b pb-2">
          Experience
        </h2>

        {/* Material */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
            <h3 className="font-bold text-lg">
              Senior Software Developer - L2
            </h3>
            <span className="text-sm text-muted-foreground tabular-nums">
              Oct 2022 – Present
            </span>
          </div>
          <div className="text-base font-medium text-foreground/80">
            Material+ · Full-time · India
          </div>
          <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
            <li>
              Led architecture and optimization of large-scale MERN + Fastify
              systems
            </li>
            <li>
              Built high-volume data pipelines for complex filtering and
              transformations
            </li>
            <li>Optimized APIs for sub-2s response times under heavy load</li>
            <li>
              Reduced SQL query cost using indexing, caching, and query
              refactoring
            </li>
            <li>
              Improved React performance with non-blocking rendering and
              virtualization
            </li>
            <li>
              Owned cascading feature updates across multiple dependent modules
            </li>
            <li>
              Implemented memory-efficient data processing and Redis caching
            </li>
            <li>
              Managed Kubernetes deployments, CI/CD automation, and
              observability
            </li>
            <li>
              Upgraded dependencies and resolved breaking changes across
              environments
            </li>
            <li>
              Mentored engineers and set performance and reliability standards
            </li>
          </ul>
        </div>

        {/* Srijan Technologies */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
            <h3 className="font-bold text-lg">
              Senior JavaScript Developer - L1
            </h3>
            <span className="text-sm text-muted-foreground tabular-nums">
              Jan 2022 – Oct 2022
            </span>
          </div>
          <div className="text-base font-medium text-foreground/80">
            Srijan Technologies · Full-time · Remote
          </div>
          <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
            <li>
              Built and maintained frontend and backend in MERN with Fastify.
            </li>
            <li>Monitored and optimized services using Dynatrace.</li>
            <li>Wrote Kubernetes consumers for scalable deployments.</li>
            <li>Used GitHub and GitLab for version control.</li>
            <li>Fixed bugs and improved performance across projects.</li>
          </ul>
        </div>

        {/* Jai Infoway */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
            <h3 className="font-bold text-lg">Web Developer</h3>
            <span className="text-sm text-muted-foreground tabular-nums">
              Jan 2021 – Jan 2022
            </span>
          </div>
          <div className="text-base font-medium text-foreground/80">
            Jai Infoway · Full-time · Ranchi, Jharkhand, India
          </div>
          <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
            <li>Proficient in Git, GitHub, and GitLab</li>
            <li>Collaborated on debugging and feature development</li>
            <li>Built a multi-product booking platform using Redux</li>
            <li>Designed and developed complete UI</li>
            <li>Worked on backend with Node.js, PostgreSQL, and Maps APIs</li>
            <li>Developed React Native apps for clients</li>
            <li>
              Created API documentation using Swagger and tested with Postman
            </li>
            <li>Built microservice-based backend on AWS EC2</li>
          </ul>
        </div>

        {/* Freelancer.com */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
            <h3 className="font-bold text-lg">Freelance Web Developer</h3>
            <span className="text-sm text-muted-foreground tabular-nums">
              Jun 2020 – Jan 2021
            </span>
          </div>
          <div className="text-base font-medium text-foreground/80">
            Freelancer.com · India
          </div>
          <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
            <li>
              Created multiple client projects, including an interactive
              flipbook in React.js
            </li>
            <li>
              Integrated a library to render text as a realistic book-like view
            </li>
            <li>
              Delivered the project in a short timeline, earning positive client
              feedback
            </li>
            <li>
              Developed a digital events website by converting an HTML template
              to React.js
            </li>
            <li>Integrated APIs with dynamic JSON responses in the UI</li>
            <li>
              Implemented OTP-based authentication and front-end verification
            </li>
            <li>Added protected routing for secure user access</li>
          </ul>
        </div>

        {/* OLSO Rental */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
            <h3 className="font-bold text-lg">Front-End Web Developer</h3>
            <span className="text-sm text-muted-foreground tabular-nums">
              Nov 2019 – Jun 2020
            </span>
          </div>
          <div className="text-base font-medium text-foreground/80">
            OLSO Rental · Full-time · Dhanbad-Ranchi Area
          </div>
          <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
            <li>
              Started front-end career focusing on React.js and modern
              JavaScript (ES6+)
            </li>
            <li>Collaborated on building scalable, high-performance UIs</li>
            <li>
              Experienced in component-based architecture and Redux/Context API
            </li>
            <li>
              Built responsive, pixel-perfect UIs with HTML5, CSS3, Tailwind,
              and Material UI
            </li>
            <li>
              Integrated REST APIs, React Router, and authentication workflows
            </li>
            <li>Worked with Git, GitHub, and Agile development practices</li>
            <li>
              Ensured performance optimization and cross-browser compatibility
            </li>
            <li>Wrote clean, maintainable code following best practices</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold font-heading mb-4 border-b pb-2">
          Licenses & Certifications
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full transition-all hover:bg-muted/40 hover:shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>AI Agents Fundamentals</span>
              </CardTitle>
              <CardDescription>Hugging Face</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Issued Jan 2026</p>
              <p className="text-xs text-muted-foreground/80 mt-1">
                Credential ID: BIkash9609
              </p>
            </CardContent>
          </Card>

          <Card className="h-full transition-all hover:bg-muted/40 hover:shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>Learn Rust by Building Real Applications</span>
              </CardTitle>
              <CardDescription>Udemy</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Issued Dec 2024</p>
              <p className="text-xs text-muted-foreground/80 mt-1">
                Credential ID: UC-893559a5-a835-4e54-8393-5a9ab071016c
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold font-heading mb-4 border-b pb-2">
          Featured Projects
        </h2>
        <div className="grid gap-6 grid-cols-1">
          <Link
            href="https://www.producthunt.com/products/thin/launches/thin"
            target="_blank"
            className="block group"
          >
            <Card className="h-full transition-all hover:bg-muted/40 hover:shadow-sm overflow-hidden border-2 hover:border-primary/20">
              <div className="relative w-full h-48 sm:h-64 md:h-80">
                <Image
                  src="/projects/thin/381ac27b-3098-4918-b688-941d7ee89bc9.avif"
                  alt="Thin - Cross-platform App"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span className="group-hover:underline underline-offset-4">
                    Thin
                  </span>
                  <Badge variant="secondary" className="font-normal text-xs">
                    Product Hunt Launch
                  </Badge>
                </CardTitle>
                <CardDescription className="text-base">
                  A cross-platform app, resilient backend, and robust aggregator
                  pipeline with clear separation of concerns.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "TypeScript",
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blog/deep-research-agent" className="block group">
            <Card className="h-full transition-all hover:bg-muted/40 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span className="group-hover:underline underline-offset-4">
                    Deep Research Agent
                  </span>
                  <Badge variant="outline" className="font-normal text-xs">
                    AI/RAG
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Autonomous research assistant using RAG and LLMs.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Next.js, Python, Vector DB, LangChain.
              </CardContent>
            </Card>
          </Link>
          <Link href="/projects" className="block group">
            <Card className="h-full transition-all hover:bg-muted/40 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span className="group-hover:underline underline-offset-4">
                    WebRat Extension
                  </span>
                  <Badge variant="outline" className="font-normal text-xs">
                    Chrome
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Browser automation and productivity tool.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                JavaScript, Chrome API, React.
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="flex justify-center mt-6">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/projects">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-bold font-heading mb-4 border-b pb-2">
          Technical Proficiency
        </h2>

        {/* Highlighted Skills */}
        <div className="mb-6">
          <h3 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "Node.js",
              "TypeScript",
              "Rust",
              "Python",
              "AWS",
              "PostgreSQL",
              "AI / RAG Agents",
            ].map((skill) => (
              <Badge key={skill} className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Comprehensive List */}
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">Frontend Ecosystem</h4>
            <p className="text-muted-foreground leading-relaxed">
              SvelteKit, Tailwind CSS, Redux / Zustand, React Query, shadcn/ui,
              Framer Motion, React Hook Form, Zod.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-foreground">
              Backend & Architecture
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              REST APIs, WebSockets, Redis, BullMQ, Microservices, JWT/OAuth,
              OpenAPI/Swagger.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-foreground">Database & DevOps</h4>
            <p className="text-muted-foreground leading-relaxed">
              PostgreSQL, Prisma/Drizzle, Docker, CI/CD (GitHub Actions),
              Terraform, Nginx, Linux.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-foreground">AI & Emerging Tech</h4>
            <p className="text-muted-foreground leading-relaxed">
              RAG pipelines, Vector Databases (Pinecone/pgvector), LLM Tool
              Calling, LangChain, Embeddings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
