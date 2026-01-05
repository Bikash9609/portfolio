import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold font-heading sm:text-5xl">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights on web development.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 max-w-4xl mx-auto">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="flex flex-col h-full transition-all hover:border-primary/50 hover:shadow-md"
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <CardTitle className="text-2xl line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="shrink-0">
                  {post.date}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                {post.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="ghost"
                className="group w-full sm:w-auto justify-start pl-0 hover:pl-2 transition-all p-0"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2"
                >
                  Read Article{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
