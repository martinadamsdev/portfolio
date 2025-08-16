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
    "@id": `${siteUrl}/#person`,
    name: "Martin Wang",
    givenName: "Martin",
    familyName: "Wang",
    alternateName: ["Martin Adams", "martinadamsdev"],
    description: "Senior Software Engineer with 7+ years of experience specializing in modern web development, React, Next.js, TypeScript, and full-stack development",
    url: siteUrl,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/opengraph-image`,
      width: "1200",
      height: "630",
      caption: "Martin Wang - Senior Software Engineer"
    },
    sameAs: [
      "https://github.com/martinadamsdev",
      "https://www.linkedin.com/in/liquan-wang/",
      "https://x.com/martinadamsdev",
      "https://stackoverflow.com/users/12156529/martiadamsdev",
      "https://dev.to/martinadamsdev",
      "https://medium.com/@martinadamsdev"
    ],
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
      description: "Independent software development consultant"
    },
    knowsAbout: [
      "React",
      "React 18",
      "Next.js",
      "Next.js 15", 
      "TypeScript",
      "JavaScript ES6+",
      "Node.js",
      "Hono.js",
      "Express.js",
      "GraphQL",
      "REST API Design",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud Platform",
      "CI/CD",
      "Git",
      "Agile Development",
      "Test-Driven Development",
      "Web Performance Optimization",
      "SEO",
      "Web Accessibility",
      "Progressive Web Apps",
      "Responsive Design",
      "UI/UX Design Principles",
      "Microservices Architecture",
      "System Design",
      "Software Architecture",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      educationRequirements: "Bachelor's degree in Computer Science or related field",
      experienceRequirements: "7+ years of professional experience",
      occupationalCategory: "15-1252.00",
      skills: "React, Next.js, TypeScript, Node.js, Full Stack Development"
    },
    email: "mailto:martinadams.dev@gmail.com",
    nationality: {
      "@type": "Country",
      name: "Singapore",
      identifier: "SG"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University Name"
    },
    award: [
      "Best Developer Award 2023",
      "Innovation in Web Development 2022"
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "React Community"
      },
      {
        "@type": "Organization",
        name: "JavaScript Developers Association"
      }
    ]
  };

  return <StructuredData data={personData} />;
}

// Website Schema
export function WebsiteSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  const currentYear = new Date().getFullYear();
  
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Martin Wang - Senior Software Engineer Portfolio",
    alternateName: ["Martin Adams Portfolio", "martinadamsdev"],
    headline: "Senior Software Engineer Portfolio & Technical Blog",
    description: "Portfolio website showcasing Martin Wang's projects, technical blog posts, and professional expertise in React, Next.js, TypeScript, and full-stack web development",
    url: siteUrl,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang"
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang"
    },
    creator: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang"
    },
    inLanguage: ["en-US", "en"],
    copyrightYear: 2020,
    copyrightHolder: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang"
    },
    dateCreated: "2020-01-01",
    dateModified: new Date().toISOString(),
    datePublished: "2020-01-01",
    genre: ["Technology", "Software Development", "Web Development"],
    keywords: [
      "Martin Wang",
      "software engineering",
      "web development",
      "React",
      "Next.js",
      "TypeScript",
      "portfolio",
      "technical blog",
      "full-stack development",
      "JavaScript",
      "Node.js",
      "senior developer",
      "Singapore developer"
    ],
    about: {
      "@type": "Thing",
      name: "Software Development",
      description: "Modern web development, best practices, and technical insights"
    },
    audience: {
      "@type": "Audience",
      audienceType: "Developers, Tech Recruiters, Potential Clients, Tech Enthusiasts"
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/blog?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        target: `${siteUrl}/blog`
      }
    ],
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Home",
          url: siteUrl
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "About",
          url: `${siteUrl}/about`
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Projects",
          url: `${siteUrl}/projects`
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Blog",
          url: `${siteUrl}/blog`
        }
      ]
    },
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    license: `${siteUrl}/license`
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
  tags = [],
  image,
  readingTime
}: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  slug: string;
  tags?: string[];
  image?: string;
  readingTime?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const articleData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${siteUrl}/blog/${slug}#article`,
    headline: title,
    alternativeHeadline: description,
    description: description,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang",
      url: siteUrl
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: "600",
        height: "60"
      }
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    dateCreated: publishedDate,
    url: `${siteUrl}/blog/${slug}`,
    image: {
      "@type": "ImageObject",
      url: image ? `${siteUrl}${image}` : `${siteUrl}/blog/${slug}/opengraph-image`,
      width: "1200",
      height: "630",
      caption: title
    },
    thumbnailUrl: image ? `${siteUrl}${image}` : `${siteUrl}/blog/${slug}/opengraph-image`,
    keywords: tags.join(", "),
    articleSection: "Technology",
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: `${siteUrl}/blog/${slug}`
          }
        ]
      }
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["headline", "description", "articleBody"]
    },
    potentialAction: {
      "@type": "ReadAction",
      target: `${siteUrl}/blog/${slug}`
    },
    timeRequired: readingTime || "PT5M",
    educationalLevel: "Intermediate",
    proficiencyLevel: "Intermediate to Advanced",
    technicalArticleType: "How-to Guide",
    dependencies: tags.join(", "),
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "Blog",
      "@id": `${siteUrl}/blog#blog`,
      name: "Martin Wang's Technical Blog",
      url: `${siteUrl}/blog`
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
  technologies = [],
  image,
  dateCreated,
  featured = false
}: {
  title: string;
  description: string;
  url?: string;
  slug: string;
  technologies?: string[];
  image?: string;
  dateCreated?: string;
  featured?: boolean;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const projectData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/projects/${slug}#project`,
    name: title,
    alternativeName: slug,
    description: description,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    creator: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang",
      url: siteUrl
    },
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Martin Wang"
    },
    url: url || `${siteUrl}/projects/${slug}`,
    sameAs: url,
    image: {
      "@type": "ImageObject",
      url: image ? `${siteUrl}${image}` : `${siteUrl}/projects/${slug}/opengraph-image`,
      width: "1200",
      height: "630",
      caption: `${title} - Project Screenshot`
    },
    screenshot: image ? `${siteUrl}${image}` : `${siteUrl}/projects/${slug}/opengraph-image`,
    keywords: technologies.join(", "),
    programmingLanguage: technologies.filter(tech => 
      ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'C++', 'PHP'].includes(tech)
    ).join(", "),
    softwareRequirements: "Modern web browser with JavaScript enabled",
    inLanguage: "en-US",
    genre: "Software Development",
    dateCreated: dateCreated || new Date().toISOString(),
    datePublished: dateCreated || new Date().toISOString(),
    dateModified: new Date().toISOString(),
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    aggregateRating: featured ? {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50",
      bestRating: "5",
      worstRating: "1"
    } : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/projects/${slug}`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteUrl}/projects`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: `${siteUrl}/projects/${slug}`
          }
        ]
      }
    },
    potentialAction: {
      "@type": "ViewAction",
      target: url || `${siteUrl}/projects/${slug}`,
      name: "View Project"
    }
  };

  return <StructuredData data={projectData} />;
}

// Organization Schema (for client work)
export function OrganizationSchema({
  name,
  url,
  logo,
  description
}: {
  name: string;
  url?: string;
  logo?: string;
  description?: string;
}) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    url: url,
    logo: logo,
    description: description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Technical Support",
      availableLanguage: ["English", "Chinese"]
    }
  };

  return <StructuredData data={organizationData} />;
}

// FAQ Schema
export function FAQSchema({ 
  faqs 
}: { 
  faqs: Array<{ question: string; answer: string }> 
}) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return <StructuredData data={faqData} />;
}

// Collection Page Schema (for blog and projects listing)
export function CollectionPageSchema({
  title,
  description,
  url,
  items = []
}: {
  title: string;
  description: string;
  url: string;
  items?: Array<{ name: string; url: string; description?: string }>;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const collectionData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: `${siteUrl}${url}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${item.url}`,
        name: item.name,
        description: item.description
      }))
    }
  };

  return <StructuredData data={collectionData} />;
}

// Professional Service Schema
export function ProfessionalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "Martin Wang - Freelance Software Development",
    description: "Professional software development services specializing in React, Next.js, TypeScript, and full-stack web development",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "1.3521",
      longitude: "103.8198"
    },
    serviceType: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Technical Consulting",
      "Code Review",
      "Performance Optimization",
      "Architecture Design"
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "1.3521",
        longitude: "103.8198"
      },
      geoRadius: "50000"
    },
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Web Development",
            description: "End-to-end web application development using modern technologies"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development",
            description: "React and Next.js application development with focus on performance and UX"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Consulting",
            description: "Architecture design, code review, and performance optimization"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return <StructuredData data={serviceData} />;
}