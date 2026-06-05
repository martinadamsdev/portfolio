import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllProjects } from "@/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  const staticLastModified = new Date("2026-06-05");

  // Static routes with enhanced metadata
  const routes = [
    {
      url: siteUrl,
      lastModified: staticLastModified,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: staticLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: staticLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: staticLastModified,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // Blog post routes with enhanced metadata
  const posts = getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }));

  // Project routes with enhanced metadata
  const projects = getAllProjects()
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: project.date ? new Date(project.date) : staticLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...routes, ...posts, ...projects];
}
