import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import dayjs from "dayjs";
import TableOfContents from "@/components/table-of-contents";
import ShareButtons from "@/components/share-buttons";
import PostNavigation from "@/components/post-navigation";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/content/blog"));
  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter,
    content,
  };
}

const MDXComponents = {
  h2: (props: any) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-24"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-24"
      {...props}
    />
  ),
};

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === params.slug);
  const prevPost = allPosts[currentIndex + 1];
  const nextPost = allPosts[currentIndex - 1];

  return (
    <div className="container max-w-6xl py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        <article>
          {frontmatter.cover && (
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={frontmatter.cover}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
            <div className="flex items-center justify-between">
              <time
                dateTime={frontmatter.date}
                className="text-sm text-neutral-500"
              >
                {dayjs(frontmatter.date).format("MM/DD/YY")}
              </time>
              <ShareButtons
                url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`}
                title={frontmatter.title}
              />
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={content} components={MDXComponents} />
          </div>

          <PostNavigation
            prevPost={
              prevPost
                ? { slug: prevPost.slug, title: prevPost.title }
                : undefined
            }
            nextPost={
              nextPost
                ? { slug: nextPost.slug, title: nextPost.title }
                : undefined
            }
          />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  const { frontmatter } = post;
  const title = frontmatter.title || "Blog Post - Liquan (Martin) Wang";
  const description =
    frontmatter.summary ||
    frontmatter.description ||
    "Read this article by Liquan (Martin) Wang.";
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "http://localhost:3000";
  const cover = frontmatter.cover
    ? frontmatter.cover.startsWith("http")
      ? frontmatter.cover
      : `${siteUrl}${frontmatter.cover}`
    : `${siteUrl}/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/blog/${params.slug}`,
      images: [cover],
      type: "article",
      publishedTime: frontmatter.date,
      authors: ["Liquan (Martin) Wang"],
      tags: frontmatter.tags || [],
    },
    twitter: {
      title,
      description,
      images: [cover],
    },
  };
}
