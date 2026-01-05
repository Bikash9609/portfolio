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
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Bee4By (VehicleForum)",
    client: "Personal Project",
    description:
      "A community forum for vehicle owners and enthusiasts. Built with a focus on performance and trust, featuring user accounts, posts, comments, image uploads, and moderation tools.",
    tags: ["TypeScript", "Next.js", "Vercel", "MongoDB"],
    link: "/blog/building-bee4by",
    image: "/projects/bee4by/1.png",
  },
  {
    title: "Thin",
    client: "Product Hunt Launch",
    description:
      "A cross-platform app, a resilient backend, and a robust aggregator pipeline. Designed with clear separation of concerns: a React Native client, a backend API, and a Python data aggregator.",
    tags: ["React Native", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    link: "https://www.producthunt.com/products/thin/launches/thin",
    image: "/projects/thin/381ac27b-3098-4918-b688-941d7ee89bc9.avif",
  },
  {
    title: "DLL (Decarbonization Library)",
    client: "Material+ (Internal)",
    description:
      "Built and led frontend delivery for an internal data-heavy application used by a global consulting firm to process large datasets and track carbon-emission goals.",
    tags: ["React", "Redux", "Material-UI", "Recharts"],
    link: "#",
  },
  {
    title: "Gopher Go",
    client: "On-demand Marketplace",
    description:
      "Marketplace handling thousands of users daily. Migrated backend from Ruby on Rails to Node.js microservices. Integrated Stripe, Firebase, and Twilio.",
    tags: ["React Native", "Node.js", "Firebase", "Stripe"],
    link: "#",
  },
  {
    title: "Simplenight",
    client: "Travel Booking",
    description:
      "Developed a multi-item booking website UI (hotels, cruises, tours, flights). Implemented custom domain support and pixel-perfect design.",
    tags: ["React", "HTML/CSS", "REST API"],
    link: "#",
  },
  {
    title: "Chickeera",
    client: "Food Delivery",
    description:
      "Online food delivery service frontend. Integrated REST APIs for order flows and ensured polished user experience.",
    tags: ["ReactJS", "REST API"],
    link: "#",
  },
  {
    title: "Sepsicon Live",
    client: "Digital Events",
    description:
      "Digital events platform enhancements. Resolved routing/UI issues to improve online auditorium experience.",
    tags: ["ReactJS", "React Router"],
    link: "#",
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
              <Card className="h-full flex flex-col overflow-hidden">
                {project.image && (
                  <div className="relative w-full h-48 sm:h-64 md:h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {project.title}
                      </CardTitle>
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
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto gap-2"
                  >
                    <Link href={project.link} target="_blank">
                      <ExternalLink className="h-4 w-4" /> View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
