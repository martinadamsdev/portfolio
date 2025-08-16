import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  const currentDate = new Date();

  // Static routes with enhanced metadata
  const routes = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: currentDate,
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
      lastModified: project.date ? new Date(project.date) : currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...routes, ...posts, ...projects];
}

// Additional sitemap for images
export async function generateImageSitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  const projects = getAllProjects();
  const posts = getAllPosts();

  const imageUrls: MetadataRoute.Sitemap = [];

  // Add project images
  projects.forEach((project) => {
    if (project.image) {
      imageUrls.push({
        url: `${siteUrl}${project.image}`,
        lastModified: project.date ? new Date(project.date) : new Date(),
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  });

  // Add blog post images
  posts.forEach((post) => {
    if (post.image) {
      imageUrls.push({
        url: `${siteUrl}${post.image}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  });

  return imageUrls;
}