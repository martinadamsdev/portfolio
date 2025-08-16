import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/static/",
          "/.well-known/",
          "/private/",
          "/tmp/",
          "/temp/",
          "/*.json$",
          "/404",
          "/500",
          "/error",
        ],
        crawlDelay: 10,
      },
      // Google specific rules
      {
        userAgent: "Googlebot",
        allow: ["/", "/*.js$", "/*.css$"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/opengraph-image", "/*.png$", "/*.jpg$", "/*.jpeg$", "/*.webp$", "/*.avif$"],
        disallow: ["/api/", "/admin/"],
      },
      // Bing specific rules
      {
        userAgent: "Bingbot",
        allow: ["/", "/*.js$", "/*.css$"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 5,
      },
      // Yandex specific rules
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 5,
      },
      // Baidu specific rules
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 10,
      },
      // Social media crawlers
      {
        userAgent: "facebookexternalhit",
        allow: ["/", "/blog/", "/projects/", "/about/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Twitterbot",
        allow: ["/", "/blog/", "/projects/", "/about/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: ["/", "/blog/", "/projects/", "/about/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "WhatsApp",
        allow: ["/", "/blog/", "/projects/", "/about/"],
        disallow: ["/api/", "/admin/"],
      },
      // AI crawlers - Control access for AI training
      {
        userAgent: "GPTBot",
        allow: ["/blog/", "/projects/", "/about/"],
        disallow: ["/", "/api/", "/admin/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/blog/", "/projects/", "/about/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 30,
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/blog/", "/projects/", "/about/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Claude-Web",
        allow: ["/blog/", "/projects/", "/about/"],
        disallow: ["/api/", "/admin/"],
      },
      // SEO tools
      {
        userAgent: "AhrefsBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 10,
      },
      {
        userAgent: "SemrushBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 10,
      },
      {
        userAgent: "MJ12bot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 20,
      },
      {
        userAgent: "DotBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 10,
      },
      // Block bad bots
      {
        userAgent: "SiteExplorer",
        disallow: "/",
      },
      {
        userAgent: "HTTrack",
        disallow: "/",
      },
      {
        userAgent: "WebCopier",
        disallow: "/",
      },
      {
        userAgent: "Offline Explorer",
        disallow: "/",
      },
      {
        userAgent: "WebZIP",
        disallow: "/",
      },
      {
        userAgent: "Teleport Pro",
        disallow: "/",
      },
      {
        userAgent: "GetRight",
        disallow: "/",
      },
      {
        userAgent: "wget",
        disallow: "/",
      },
      {
        userAgent: "curl",
        disallow: "/",
      },
    ],
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap-images.xml`,
    ],
    host: siteUrl,
  };
}