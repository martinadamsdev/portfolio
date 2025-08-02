import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import dayjs from "dayjs";
import React from "react";
import TableOfContents from "@/components/table-of-contents";
import ShareButtons from "@/components/share-buttons";
import PostNavigation from "@/components/post-navigation";
import { getAllPosts } from "@/lib/blog";
import { ArticleSchema, BreadcrumbSchema } from "@/components/structured-data";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/content/blog"));
  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

function getPost(slug: string) {
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
  h1: (props: any) => (
    <h1
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="text-4xl font-bold mb-6 mt-8 text-foreground scroll-mt-24 border-b border-border pb-4"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="text-3xl font-semibold mb-4 mt-8 text-foreground scroll-mt-24 border-b border-border/50 pb-2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="text-2xl font-semibold mb-3 mt-6 text-foreground scroll-mt-24"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className="text-xl font-semibold mb-2 mt-5 text-foreground scroll-mt-24"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  a: ({ href, children, ...props }: any) => {
    if (href?.startsWith('http')) {
      const isGitHub = href?.includes('github.com');
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${isGitHub 
            ? 'inline-flex items-center gap-2 px-4 py-2 mx-1 bg-gradient-to-r from-muted to-muted/80 hover:from-primary/10 hover:to-primary/5 rounded-lg text-primary hover:text-primary/80 font-medium transition-all duration-200 border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md' 
            : 'text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-medium hover:no-underline'
          }`}
          {...props}
        >
          {isGitHub && (
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          )}
          <span>{children}</span>
          {isGitHub && (
            <svg className="w-4 h-4 opacity-60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
  ul: (props: any) => (
    <ul className="mb-6 space-y-3 text-muted-foreground list-disc list-inside" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-6 space-y-3 text-muted-foreground list-decimal list-inside" {...props} />
  ),
  li: (props: any) => (
    <li className="leading-relaxed pl-2" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-muted-foreground font-medium" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary pl-6 py-4 my-6 italic text-muted-foreground bg-gradient-to-r from-muted/50 to-transparent rounded-r-lg"
      {...props}
    />
  ),
  img: (props: any) => {
    // Use a wrapper that can be both block and inline to avoid p > div nesting
    return (
      <span className="block my-8 rounded-xl overflow-hidden border border-border shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-auto block"
          alt={props.alt || ''}
          {...props}
        />
      </span>
    );
  },
  code: (props: any) => (
    <code
      className="bg-muted/80 px-2 py-1 rounded-md text-sm font-mono text-foreground border border-border/50"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-muted p-5 rounded-xl overflow-x-auto my-6 text-sm border border-border shadow-sm"
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" {...props} />
  ),
  table: (props: any) => (
    <span className="block overflow-x-auto my-6 rounded-lg border border-border shadow-sm">
      <table className="min-w-full" {...props} />
    </span>
  ),
  th: (props: any) => (
    <th
      className="border-b border-border px-4 py-3 bg-muted text-left font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="border-b border-border/50 px-4 py-3 text-muted-foreground" {...props} />
  ),
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }
  const { frontmatter, content } = post;
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);
  const prevPost = allPosts[currentIndex + 1];
  const nextPost = allPosts[currentIndex - 1];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: frontmatter.title, url: `/blog/${slug}` }
  ];

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.summary || frontmatter.description || ""}
        publishedDate={frontmatter.date}
        modifiedDate={frontmatter.updatedAt}
        slug={slug}
        tags={frontmatter.tags || []}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
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

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{frontmatter.title}</h1>
            
            {frontmatter.description && (
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {frontmatter.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 text-sm border-b border-border pb-6">
              <time
                dateTime={dayjs(frontmatter.date).toISOString()}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {dayjs(frontmatter.date).format("MMMM D, YYYY")}
              </time>
              
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Martin</span>
              </div>
              
              <div className="ml-auto">
                <ShareButtons
                  url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`}
                  title={frontmatter.title}
                />
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-em:text-muted-foreground prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:text-muted-foreground prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-img:rounded-lg prose-img:border prose-img:border-border prose-hr:border-border prose-table:border prose-table:border-border prose-th:border prose-th:border-border prose-th:bg-muted prose-td:border prose-td:border-border">
            {await MDXRemote({ source: content, components: MDXComponents })}
          </div>

          <PostNavigation
            prevPost={
              prevPost?.title
                ? { slug: prevPost.slug, title: prevPost.title }
                : undefined
            }
            nextPost={
              nextPost?.title
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
    </>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { frontmatter } = post;
  const title = frontmatter.title || "Blog Post - Martin";
  const description =
    frontmatter.summary ||
    frontmatter.description ||
    "Read this article by Martin.";
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
    keywords: frontmatter.tags || [],
    authors: [{ name: "Martin", url: siteUrl }],
    creator: "Martin",
    publisher: "Martin",
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      siteName: "Martin Portfolio",
      images: [
        {
          url: cover,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      type: "article",
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updatedAt || frontmatter.date,
      authors: ["Martin"],
      tags: frontmatter.tags || [],
      section: "Technology",
    },
    twitter: {
      title,
      description,
      images: [cover],
      card: "summary_large_image",
      creator: "@martinadamsdev",
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
