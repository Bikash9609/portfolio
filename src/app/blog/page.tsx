import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { ArrowRight, PenLine } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-1">
        <div className="flex items-center gap-2 mb-3">
          <PenLine className="h-4 w-4 text-primary" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Writing</p>
        </div>
        <h1 className="text-2xl font-bold font-heading tracking-tight">Blog</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Deep dives into systems, architecture decisions, and the reasoning behind tool choices.
          Not tutorials — engineering retrospectives.
        </p>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="bento-card flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1 space-y-1.5 min-w-0">
                <h2 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                <span className="text-xs font-mono text-muted-foreground/70 whitespace-nowrap">
                  {post.date
                    ? formatDistanceToNow(new Date(post.date), { addSuffix: true })
                    : ""}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
