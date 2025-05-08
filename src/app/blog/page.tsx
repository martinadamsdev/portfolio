import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Liquan (Martin) Wang",
  description:
    "Read technical articles and insights from Liquan (Martin) Wang on React, Next.js, TypeScript, Node.js, Hono.js, and more.",
  openGraph: {
    title: "Blog - Liquan (Martin) Wang",
    description:
      "Read technical articles and insights from Liquan (Martin) Wang on React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    url: "/blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Blog - Liquan (Martin) Wang",
    description:
      "Read technical articles and insights from Liquan (Martin) Wang on React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    images: ["/opengraph-image"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="container py-12">
      <h1 className="text-4xl font-extrabold mb-4">Blog</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Thoughts, stories and ideas about web development and software
        engineering.
      </p>
      <BlogList posts={posts} />
    </section>
  );
}
