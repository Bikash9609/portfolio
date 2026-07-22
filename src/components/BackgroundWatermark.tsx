"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", 
  "Rust", "PostgreSQL", "Docker", "AWS", "LangGraph",
  "LLM", "RAG", "GraphQL", "Fastify", "Redis", "Vector DB",
  "TailwindCSS", "Kafka", "Microservices", "System Design"
];

export function BackgroundWatermark() {
  // Repeat the skills array enough times to densely fill the screen
  const repeatedSkills = Array(40).fill(skills).flat();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.04] dark:opacity-[0.03]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] sm:w-[120vw] h-[150vh] flex flex-wrap gap-x-3 gap-y-2 justify-center content-center -rotate-12"
      >
        {repeatedSkills.map((skill, i) => (
          <span 
            key={`${skill}-${i}`} 
            className="text-base sm:text-lg md:text-xl font-heading font-bold text-foreground whitespace-nowrap select-none"
          >
            {skill} <span className="opacity-40 mx-1 text-sm">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
