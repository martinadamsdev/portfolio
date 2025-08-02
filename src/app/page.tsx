import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Martin - Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years of experience specializing in React, Next.js, TypeScript, and modern web development. Building scalable solutions that push the boundaries of web technology.",
  keywords: [
    "Martin Wang",
    "Martin",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Development",
    "Software Architecture",
  ],
  authors: [{ name: "Martin" }],
  creator: "Martin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://martinadams.dev",
    title: "Martin - Senior Software Engineer",
    description:
      "Senior Software Engineer with 7+ years of experience specializing in React, Next.js, TypeScript, and modern web development.",
    siteName: "Martin Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Martin - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin - Senior Software Engineer",
    description:
      "Senior Software Engineer with 7+ years of experience specializing in React, Next.js, TypeScript, and modern web development.",
    images: ["/opengraph-image"],
    creator: "@martin_wang",
  },
  robots: {
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
  alternates: {
    canonical: "https://martinadams.dev",
  },
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Martin",
  alternateName: ["Martin Wang", "Martin"],
  url: "https://martinadams.dev",
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Senior Software Engineer with 7+ years of experience specializing in React, Next.js, TypeScript, and modern web development.",
  sameAs: [
    "https://github.com/martinadamsdev",
    "https://x.com/martinadamsdev",
    "https://www.linkedin.com/in/liquan-wang/",
    "https://stackoverflow.com/users/12156529/martiadamsdev",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Vue.js",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "Nest.js",
    "Hono.js",
    "Python",
    "FastAPI",
    "PHP",
    "Laravel",
    "Go",
    "Software Architecture",
    "Web Development",
    "Full Stack Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Your University",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeClient />
    </>
  );
}