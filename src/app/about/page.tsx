"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const experiences = [
  {
    company: "Srijan Technologies (A Material+ Company)",
    role: "Senior JavaScript Developer",
    period: "Jan '21 — Present",
    description:
      "Leading development of high-impact web applications using React, Next.js, and TypeScript. Mentoring junior developers and performing code reviews.",
    skills: ["React", "Next.js", "TypeScript", "Performance"],
  },
  {
    company: "Jai Infoway",
    role: "Web Developer",
    period: "Jan '21 — Jan '22",
    description:
      "Delivered responsive, custom-built ReactJS interfaces. Owned end-to-end delivery process.",
    skills: ["ReactJS", "UI/UX"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Jun '20 — Jan '21",
    description:
      "Developed reusable UI components and design systems. Translated Figma designs into pixel-perfect interfaces.",
    skills: ["ReactJS", "Figma"],
  },
  {
    company: "OLSO Rental",
    role: "Frontend Web Developer",
    period: "Nov '19 — Jun '20",
    description:
      "Contributed to financial operations tools. Resolved bugs and maintained code quality.",
    skills: ["Frontend", "Testing"],
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-16"
      >
        <motion.div variants={item} className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-heading sm:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm a Senior Full-Stack JavaScript leader based in Jharkhand, India,
            with 5+ years of experience delivering scalable, high-performance
            web applications.
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-8">
          <h2 className="text-2xl font-bold font-heading border-b pb-2">
            Experience
          </h2>
          <div className="relative border-l border-muted ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-primary bg-background" />
                <Card className="border-none shadow-none bg-transparent">
                  <CardHeader className="p-0 mb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <span className="text-sm text-muted-foreground font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs border rounded-full px-2 py-1 bg-secondary/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold font-heading border-b pb-2">
            Education
          </h2>
          <div>
            <h3 className="text-xl font-bold">
              Bachelor's Degree in Computer Applications
            </h3>
            <p className="text-muted-foreground">
              DSPMU, Ranchi, India (GPA: 8.8)
            </p>
            <span className="text-sm text-muted-foreground">Jan '22</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
