import type { IconType } from "react-icons";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  date: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  readingTime?: string;
  content: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
  url: string;
  color: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
}

export interface Metadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    images: OpenGraphImage[];
    url: string;
    siteName: string;
  };
  twitter?: {
    card: "summary" | "summary_large_image";
    title: string;
    description: string;
    images: string[];
  };
}