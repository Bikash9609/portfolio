"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Deep Research Agent",
    client: "Personal Project",
    description:
      "An autonomous research agent inspired by human cognition. Features a LangGraph-based architecture with Belief State and Entropy-driven decision making to perform deep-dive web research.",
    tags: ["Python", "LangChain", "LangGraph", "Vector DB", "FastAPI"],
    link: "/blog/deep-research-agent",
    images: [
      "/projects/deep-research-agent/1.png",
      "/projects/deep-research-agent/banner.png",
    ],
  },
  {
    title: "Webrat",
    client: "Personal Project",
    description:
      "A community-driven Chrome extension for crowdsourced website safety ratings. Built with React 19, Tailwind v4, and Node.js to bring decentralized trust to the web.",
    tags: ["React 19", "Tailwind v4", "Node.js", "Chrome Extension"],
    link: "/blog/building-webrat",
    images: [
      "/projects/webrat/1.png",
      "/projects/webrat/2.png",
      "/projects/webrat/3.png",
      "/projects/webrat/4.png",
      "/projects/webrat/5.png",
    ],
  },
  {
    title: "Frulow (LibQuest)",
    client: "Personal Project",
    description:
      "A full-stack web application exploring end-to-end development. Features a React frontend, Node.js backend, and a monorepo structure for shared types and utilities.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Monorepo",
    ],
    link: "/blog/building-frulow",
    images: [
      "/projects/frulow/1.png",
      "/projects/frulow/2.png",
      "/projects/frulow/3.png",
      "/projects/frulow/4.png",
      "/projects/frulow/5.png",
      "/projects/frulow/6.png",
    ],
  },
  {
    title: "Thin",
    client: "Product Hunt Launch",
    description:
      "A cross-platform app, a resilient backend, and a robust aggregator pipeline. Designed with clear separation of concerns: a React Native client, a backend API, and a Python data aggregator.",
    tags: ["React Native", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    link: "https://www.producthunt.com/products/thin/launches/thin",
    images: [
      "/projects/thin/381ac27b-3098-4918-b688-941d7ee89bc9.avif",
      "/projects/thin/8d27736a-ba75-495e-a320-0c241732329f.avif",
      "/projects/thin/c52c5b7c-0a3b-4865-af9e-32ad714ab0e0.avif",
      "/projects/thin/e2368a6f-8cd5-4843-a18b-5b93ee6150ed.avif",
      "/projects/thin/e687aa1f-a179-4a46-851d-1cd89ca88e82.avif",
      "/projects/thin/e9c31783-6258-40ac-bcfb-70f4f5079b31.avif",
    ],
  },
  {
    title: "Bee4By (VehicleForum)",
    client: "Personal Project",
    description:
      "A community forum for vehicle owners and enthusiasts. Built with a focus on performance and trust, featuring user accounts, posts, comments, image uploads, and moderation tools.",
    tags: ["TypeScript", "Next.js", "Vercel", "MongoDB"],
    link: "/blog/building-bee4by",
    images: ["/projects/bee4by/1.png"],
  },
  {
    title: "DLL (Decarbonization Library)",
    client: "Material+ (Internal)",
    description:
      "Built and led frontend delivery for an internal data-heavy application used by a global consulting firm to process large datasets and track carbon-emission goals.",
    tags: ["React", "Redux", "Material-UI", "Recharts"],
    link: "#",
    images: [],
  },
  {
    title: "Gopher Go",
    client: "On-demand Marketplace",
    description:
      "Marketplace handling thousands of users daily. Migrated backend from Ruby on Rails to Node.js microservices. Integrated Stripe, Firebase, and Twilio.",
    tags: ["React Native", "Node.js", "Firebase", "Stripe"],
    link: "#",
    images: [],
  },
  {
    title: "Simplenight",
    client: "Travel Booking",
    description:
      "Developed a multi-item booking website UI (hotels, cruises, tours, flights). Implemented custom domain support and pixel-perfect design.",
    tags: ["React", "HTML/CSS", "REST API"],
    link: "#",
    images: [],
  },
  {
    title: "Chickeera",
    client: "Food Delivery",
    description:
      "Online food delivery service frontend. Integrated REST APIs for order flows and ensured polished user experience.",
    tags: ["ReactJS", "REST API"],
    link: "#",
    images: [],
  },
  {
    title: "Sepsicon Live",
    client: "Digital Events",
    description:
      "Digital events platform enhancements. Resolved routing/UI issues to improve online auditorium experience.",
    tags: ["ReactJS", "React Router"],
    link: "#",
    images: [],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      {project.images && project.images.length > 0 && (
        <div className="relative group/carousel">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex">
              {project.images.map((src, idx) => (
                <div
                  className="flex-[0_0_100%] min-w-0 relative h-48 sm:h-64 md:h-80"
                  key={idx}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover blur-xl scale-110 opacity-50"
                  />
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-contain z-10"
                  />
                </div>
              ))}
            </div>
          </div>
          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  emblaApi?.scrollPrev();
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  emblaApi?.scrollNext();
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
            <CardDescription className="text-base font-medium text-primary">
              {project.client}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-6 text-base leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium border rounded-full px-3 py-1 bg-secondary/50 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      {project.link && project.link !== "#" && (
        <CardFooter>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full sm:w-auto gap-2"
          >
            <Link
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={
                project.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <ExternalLink className="h-3 w-3" />
              {project.link.includes("producthunt")
                ? "View on Product Hunt"
                : "View Project"}
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:py-24 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold font-heading sm:text-5xl">
            Selected Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects demonstrating my expertise in full-stack
            development, from enterprise data tools to consumer marketplaces.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 grid-cols-1 mt-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center py-12 mt-4 space-y-3">
          <span className="text-4xl inline-block animate-bounce">🧑‍💻</span>
          <p className="text-muted-foreground italic text-sm max-w-sm mx-auto">
            I am coding everyday and all the time, so it&apos;s hard to
            add/update it here all the time! 😅
          </p>
        </div>
      </div>
    </div>
  );
}
