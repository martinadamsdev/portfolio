import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
    };
  };
  verification?: {
    google?: string;
    bing?: string;
    yandex?: string;
  };
  additionalMetaTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
  jsonLd?: object | object[];
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Martin Wang",
  section,
  tags = [],
  locale = "en_US",
  alternates,
  robots,
  verification,
  additionalMetaTags = [],
}: SEOProps): Metadata {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  const defaultTitle = "Martin Wang - Senior Software Engineer";
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/opengraph-image`;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: author, url: siteUrl }],
    creator: author,
    publisher: author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: alternates || {
      canonical: pageUrl,
    },
    robots: robots || {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: "Martin Wang Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || "Martin Wang - Senior Software Engineer",
          type: "image/png",
        },
      ],
      locale,
      type: type === "article" ? "article" : type === "profile" ? "profile" : "website",
      ...(type === "article" && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: [author],
        section,
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@martinadamsdev",
      creator: "@martinadamsdev",
      title: fullTitle,
      description,
      images: {
        url: imageUrl,
        alt: title || "Martin Wang - Senior Software Engineer",
      },
    },
    verification,
    other: {
      "dc.title": fullTitle,
      "dc.creator": author,
      "dc.publisher": author,
      "dc.rights": `© ${new Date().getFullYear()} ${author}. All rights reserved.`,
      "dc.language": locale.replace("_", "-"),
      "dc.source": pageUrl,
      "article:author": author,
      ...additionalMetaTags.reduce((acc, tag) => {
        if (tag.name) {
          acc[tag.name] = tag.content;
        } else if (tag.property) {
          acc[tag.property] = tag.content;
        }
        return acc;
      }, {} as Record<string, string>),
    },
  };

  return metadata;
}

// Helper function to generate SEO-friendly URLs
export function generateSEOUrl(path: string): string {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";
  return `${siteUrl}${path}`;
}

// Helper function to generate canonical URL
export function generateCanonicalUrl(path: string): string {
  return generateSEOUrl(path);
}

// Helper function to truncate description for optimal SEO
export function truncateDescription(
  description: string,
  maxLength: number = 160
): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3).trim() + "...";
}

// Helper function to generate keywords from tags and content
export function generateKeywords(
  tags: string[] = [],
  additionalKeywords: string[] = []
): string[] {
  const baseKeywords = [
    "Martin Wang",
    "software engineer",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
  ];

  return [...new Set([...baseKeywords, ...tags, ...additionalKeywords])];
}

// Helper function to format date for SEO
export function formatDateForSEO(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toISOString();
}

// Social media meta tags generator
export function generateSocialMetaTags(props: SEOProps): Array<{
  name?: string;
  property?: string;
  content: string;
}> {
  const {
    title,
    description,
    image,
    author = "Martin Wang",
    type = "website",
    tags = [],
  } = props;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/opengraph-image`;

  return [
    // Facebook specific
    { property: "fb:app_id", content: process.env.NEXT_PUBLIC_FB_APP_ID || "" },
    
    // Pinterest specific
    { name: "pinterest-rich-pin", content: "true" },
    
    // LinkedIn specific
    { property: "linkedin:owner", content: "Martin Wang" },
    
    // Additional social tags
    { property: "article:author", content: author },
    { property: "article:tag", content: tags.join(", ") },
    
    // Schema.org microdata fallbacks
    { name: "author", content: author },
    { name: "image", content: imageUrl },
    { name: "thumbnail", content: imageUrl },
  ].filter(tag => tag.content);
}

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

// Generate organization schema
export function generateOrganizationSchema() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://martinadams.dev";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Martin Wang",
    alternateName: "martinadamsdev",
    description:
      "Senior Software Engineer specializing in React, Next.js, TypeScript, and full-stack development",
    url: siteUrl,
    email: "mailto:martinadams.dev@gmail.com",
    image: `${siteUrl}/opengraph-image`,
    sameAs: [
      "https://github.com/martinadamsdev",
      "https://www.linkedin.com/in/liquan-wang/",
      "https://x.com/martinadamsdev",
      "https://stackoverflow.com/users/12156529/martiadamsdev",
    ],
    jobTitle: "Senior Software Engineer",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Software Engineering",
    ],
  };
}