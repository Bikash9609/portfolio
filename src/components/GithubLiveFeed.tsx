"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string;
  fork: boolean;
}

export function GithubLiveFeed({ limit }: { limit?: number }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/Bikash9609/repos?sort=updated&direction=desc&per_page=100");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Repo[] = await res.json();
        const nonForked = data.filter((repo) => !repo.fork);
        setRepos(limit ? nonForked.slice(0, limit) : nonForked);
      } catch (error) {
        console.error("Error fetching github repos:", error);
        setError("Unable to load GitHub activity right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [limit]);

  if (loading) {
    return (
      <div className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
        {[...Array(limit || 6)].map((_, i) => (
          <div key={i} className="h-48 bg-muted rounded-none border border-border m-[-1px_0_0_-1px]" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 p-6 border border-border/50 rounded-xl bg-muted/30 text-center text-muted-foreground text-sm">
        {error}
      </div>
    );
  }

  return (
    <div className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo, i) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex"
        >
          <div className="bento-card flex-1 flex flex-col w-full h-full">
            <div className="pb-3">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-lg font-heading font-bold line-clamp-1 truncate" title={repo.name}>{repo.name}</h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex-1 pb-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {repo.description || "No description provided."}
              </p>
            </div>
            <div className="pt-0 flex items-center justify-between text-xs text-muted-foreground mt-auto">
              <div className="flex items-center space-x-4">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" /> {repo.forks_count}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
