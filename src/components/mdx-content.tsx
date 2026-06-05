import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// Shared MDX element map used by both blog posts and project pages so the two
// render paths stay identical. Heading ids and anchors come from rehype-slug +
// rehype-autolink-headings; syntax highlighting from rehype-highlight; GFM
// tables/strikethrough/task-lists from remark-gfm.
const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-4xl font-bold mb-6 mt-8 text-foreground scroll-mt-24 border-b border-border pb-4"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-3xl font-semibold mb-4 mt-8 text-foreground scroll-mt-24 border-b border-border/50 pb-2"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-2xl font-semibold mb-3 mt-6 text-foreground scroll-mt-24"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="text-xl font-semibold mb-2 mt-5 text-foreground scroll-mt-24"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
    if (href?.startsWith("http")) {
      const isGitHub = href?.includes("github.com");
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isGitHub
              ? "inline-flex items-center gap-2 px-4 py-2 mx-1 bg-gradient-to-r from-muted to-muted/80 hover:from-primary/10 hover:to-primary/5 rounded-lg text-primary hover:text-primary/80 font-medium transition-all duration-200 border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md"
              : "text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-medium hover:no-underline"
          }`}
          {...props}
        >
          {isGitHub && (
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          )}
          <span>{children}</span>
          {isGitHub && (
            <svg
              className="w-4 h-4 opacity-60 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </a>
      );
    }
    return (
      <a
        href={href}
        className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-medium hover:no-underline"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-6 space-y-3 text-muted-foreground list-disc list-inside"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-6 space-y-3 text-muted-foreground list-decimal list-inside"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed pl-2" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-muted-foreground font-medium" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary pl-6 py-4 my-6 italic text-muted-foreground bg-gradient-to-r from-muted/50 to-transparent rounded-r-lg"
      {...props}
    />
  ),
  img: ({ alt, ...props }: ComponentPropsWithoutRef<"img">) => {
    // Use a wrapper that can be both block and inline to avoid p > div nesting
    return (
      <span className="block my-8 rounded-xl overflow-hidden border border-border shadow-sm">
        {/* biome-ignore lint/performance/noImgElement: MDX images have arbitrary remote sources unknown at build time */}
        <img className="w-full h-auto block" alt={alt || ""} {...props} />
      </span>
    );
  },
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-muted/80 px-2 py-1 rounded-md text-sm font-mono text-foreground border border-border/50"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-muted p-5 rounded-xl overflow-x-auto my-6 text-sm border border-border shadow-sm"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr
      className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <span className="block overflow-x-auto my-6 rounded-lg border border-border shadow-sm">
      <table className="min-w-full" {...props} />
    </span>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-border px-4 py-3 bg-muted text-left font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      className="border-b border-border/50 px-4 py-3 text-muted-foreground"
      {...props}
    />
  ),
};

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return MDXRemote({
    source,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });
}
