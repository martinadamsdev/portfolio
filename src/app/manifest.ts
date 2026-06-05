import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  return {
    name: "Martin Wang - Senior Software Engineer | Full Stack Developer Portfolio",
    short_name: "Martin Wang",
    description:
      "Martin Wang is a senior software engineer with 7+ years of experience specializing in React, Next.js, TypeScript, and full-stack web development. Explore portfolio projects, technical blog posts, and professional expertise.",
    start_url: "/",
    id: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone", "minimal-ui"],
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-US",
    dir: "ltr",
    prefer_related_applications: false,
    categories: [
      "business",
      "productivity",
      "technology",
      "developer",
      "education",
      "utilities",
    ],
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    shortcuts: [
      {
        name: "Blog",
        short_name: "Blog",
        description: "Read technical blog posts",
        url: "/blog",
      },
      {
        name: "Projects",
        short_name: "Projects",
        description: "View portfolio projects",
        url: "/projects",
      },
      {
        name: "About",
        short_name: "About",
        description: "Learn about Martin Wang",
        url: "/about",
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: siteUrl,
        id: "com.martinwang.portfolio",
      },
    ],
    // Advanced PWA features - uncomment when Next.js adds support
    // protocol_handlers: [{ protocol: 'web+portfolio', url: '/?project=%s' }],
    // file_handlers: [{ action: '/blog/new', accept: { 'text/markdown': ['.md', '.mdx'] } }],
    // share_target: { action: '/share', method: 'POST', enctype: 'multipart/form-data' },
    // launch_handler: { client_mode: ['navigate-existing', 'auto'] },
    // edge_side_panel: { preferred_width: 496 },
    // handle_links: 'preferred',
    // scope_extensions: [{ origin: siteUrl }]
  };
}
