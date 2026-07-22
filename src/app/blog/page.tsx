import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";
import { ArrowRight, PenLine } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col w-full">
      <div className="bento-card space-y-1">
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

      <div className="grid grid-cols-1 gap-0">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="bento-card flex flex-col gap-4 overflow-hidden p-0">
              {post.images && post.images.length > 0 && (
                <div className="w-full h-48 sm:h-64 relative overflow-hidden bg-muted">
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 pt-2">
                <div className="flex-1 space-y-1.5 min-w-0">
                  <h2 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground/70 whitespace-nowrap">
                    {post.date
                      ? formatDistanceToNow(new Date(post.date), { addSuffix: true })
                      : ""}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
