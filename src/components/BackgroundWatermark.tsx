"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", 
  "Rust", "PostgreSQL", "Docker", "AWS", "LangGraph",
  "LLM", "RAG", "GraphQL", "Fastify", "Redis", "Vector DB",
  "TailwindCSS", "Kafka", "Microservices", "System Design",
  "Kubernetes", "WebSockets", "MongoDB"
];

export function BackgroundWatermark() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cloud: any;
    const containerNode = containerRef.current;

    if (containerNode) {
      import("TagCloud").then((TagCloudModule) => {
        const TagCloud = TagCloudModule.default;
        
        cloud = TagCloud([containerNode], skills, {
          radius: Math.min(window.innerWidth, window.innerHeight) / 2.2,
          maxSpeed: "normal",
          initSpeed: "slow",
          keep: true,
        });
      });
    }

    return () => {
      if (cloud) {
        cloud.destroy();
      }
      if (containerNode) {
        containerNode.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-[0.06] dark:opacity-[0.05]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          ref={containerRef} 
          className="font-heading font-black text-foreground text-xl sm:text-2xl md:text-3xl text-center select-none tagcloud-container"
        />
      </motion.div>
    </div>
  );
}
