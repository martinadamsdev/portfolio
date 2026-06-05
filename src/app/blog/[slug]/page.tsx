import fs from "node:fs";
import path from "node:path";
import dayjs from "dayjs";
import matter from "gray-matter";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import PostNavigation from "@/components/post-navigation";
import ShareButtons from "@/components/share-buttons";
import { ArticleSchema, BreadcrumbSchema } from "@/components/structured-data";
import TableOfContents from "@/components/table-of-contents";
import { getAllPosts } from "@/lib/blog";

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
    { name: frontmatter.title, url: `/blog/${slug}` },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {frontmatter.title}
              </h1>

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
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {dayjs(frontmatter.date).format("MMMM D, YYYY")}
                </time>

                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
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
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
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
              <MDXContent source={content} />
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
    "https://martinadams.dev";
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
        },
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
