import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className="text-3xl font-bold font-heading mt-12 mb-6 text-foreground"
        {...props}
      />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className="text-2xl font-semibold font-heading mt-10 mb-4 text-foreground/90"
        {...props}
      />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className="text-xl font-medium font-heading mt-8 mb-3 text-foreground/90"
        {...props}
      />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground"
        {...props}
      />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        className="text-primary font-medium hover:underline underline-offset-4 transition-colors"
        {...props}
      />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground"
        {...props}
      />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground"
        {...props}
      />
    ),
    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
      <li className="" {...props} />
    ),
    blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground"
        {...props}
      />
    ),
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className="my-8 border-border" {...props} />
    ),
    table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full" {...props} />
      </div>
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
    ),
    th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
      <th
        className="border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    ),
    td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
      <td
        className="border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4 py-4"
        {...props}
      />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground"
        {...props}
      />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="rounded-lg border bg-muted my-8 shadow-sm"
        alt={props.alt}
        {...props}
      />
    ),
  };

  return (
    <article className="container max-w-3xl px-4 py-12 md:py-24">
      <div className="space-y-4 text-left mb-16">
        <h1 className="text-3xl font-bold font-heading md:text-4xl lg:text-5xl tracking-tight text-foreground">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {post.description}
        </p>
        <div className="flex items-center gap-3 pt-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-muted shadow-sm">
            <Image
              src="/profile.jpeg"
              alt="Bikash Tiwari"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="font-medium text-foreground">Bikash Tiwari</p>
            <p className="text-muted-foreground">{post.date}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
