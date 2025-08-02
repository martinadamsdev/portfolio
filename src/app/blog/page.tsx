import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog-list";
import type { Metadata } from "next";
import { Rss } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Martin",
  description:
    "Read technical articles and insights from Martin on React, Next.js, TypeScript, Node.js, Hono.js, and more.",
  openGraph: {
    title: "Blog - Martin",
    description:
      "Read technical articles and insights from Martin on React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    url: "/blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Blog - Martin",
    description:
      "Read technical articles and insights from Martin on React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    images: ["/opengraph-image"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "http://localhost:3000";

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, stories and ideas about web development and software
            engineering.
          </p>
        </div>
        <a
          href="/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          title="Subscribe to RSS feed"
        >
          <Rss className="h-4 w-4" />
          <span>RSS Feed</span>
        </a>
      </div>
      <BlogList posts={posts} />
    </section>
  );
}
