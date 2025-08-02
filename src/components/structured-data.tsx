import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Person Schema for Martin
export function PersonSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Martin Wang",
    alternateName: "Martin",
    description: "Senior Software Engineer with 7+ years of experience specializing in modern web development",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    sameAs: [
      "https://github.com/martinadamsdev",
      "https://www.linkedin.com/in/liquan-wang/",
      "https://x.com/martinadamsdev",
      "https://stackoverflow.com/users/12156529/martiadamsdev"
    ],
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance"
    },
    knowsAbout: [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Hono.js",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development"
    ],
    email: "mailto:martinadams.dev@gmail.com",
    nationality: {
      "@type": "Country",
      name: "Singapore"
    }
  };

  return <StructuredData data={personData} />;
}

// Website Schema
export function WebsiteSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "Martin Portfolio",
    alternateName: "Martin - Senior Software Engineer",
    description: "Portfolio website showcasing Martin's projects, blog posts, and professional skills in web development",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: "Martin Wang"
    },
    publisher: {
      "@type": "Person", 
      name: "Martin Wang"
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    genre: "Technology",
    keywords: "software engineering, web development, React, Next.js, TypeScript, portfolio"
  };

  return <StructuredData data={websiteData} />;
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`
    }))
  };

  return <StructuredData data={breadcrumbData} />;
}

// Article Schema for blog posts
export function ArticleSchema({ 
  title, 
  description, 
  publishedDate, 
  modifiedDate, 
  slug,
  tags = []
}: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  slug: string;
  tags?: string[];
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: "Martin Wang",
      url: siteUrl
    },
    publisher: {
      "@type": "Person",
      name: "Martin Wang"
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    url: `${siteUrl}/blog/${slug}`,
    image: `${siteUrl}/opengraph-image`,
    keywords: tags.join(", "),
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`
    }
  };

  return <StructuredData data={articleData} />;
}

// Creative Work Schema for projects
export function CreativeWorkSchema({
  title,
  description,
  url,
  slug,
  technologies = []
}: {
  title: string;
  description: string;
  url?: string;
  slug: string;
  technologies?: string[];
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const projectData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: description,
    creator: {
      "@type": "Person",
      name: "Martin Wang",
      url: siteUrl
    },
    url: url || `${siteUrl}/projects/${slug}`,
    image: `${siteUrl}/opengraph-image`,
    keywords: technologies.join(", "),
    inLanguage: "en-US",
    genre: "Software Development"
  };

  return <StructuredData data={projectData} />;
}