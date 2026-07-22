"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", 
  "Rust", "PostgreSQL", "Docker", "AWS", "LangGraph",
  "LLM", "RAG", "GraphQL", "Fastify", "Redis", "Vector DB",
  "TailwindCSS", "Kafka", "Microservices", "System Design"
];

// Helper to get random positions, we use fixed random seeds per index so hydration matches
const getPos = (index: number) => {
  const seed1 = (index * 137) % 100;
  const seed2 = (index * 251) % 100;
  return { left: `${seed1}%`, top: `${seed2}%` };
};

export function BackgroundWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] dark:opacity-[0.02]">
      {skills.map((skill, i) => {
        const { left, top } = getPos(i);
        return (
          <motion.div
            key={skill}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="absolute text-4xl sm:text-6xl md:text-8xl font-heading font-black whitespace-nowrap text-foreground select-none"
            style={{
              left,
              top,
              transform: `translate(-50%, -50%) rotate(${(i % 3 - 1) * 15}deg)`,
            }}
          >
            {skill}
          </motion.div>
        );
      })}
    </div>
  );
}
