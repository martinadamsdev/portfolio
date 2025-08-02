"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Fallback project data for client-side rendering
const fallbackProjects = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, TypeScript, and Stripe. Features include real-time inventory, advanced search, and mobile-responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and advanced project tracking capabilities.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    category: "Data Visualization",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
];

// Project image component with error handling
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <ImageIcon className="w-12 h-12 text-muted-foreground" />
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-500 group-hover:scale-110 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        unoptimized // Prevent Next.js from optimizing external images
      />
    </>
  );
}

export default function FeaturedProjectsFallback() {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my most impactful work, demonstrating expertise in modern web technologies and scalable architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {fallbackProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group project-card bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="shine-effect text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Live
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Source Code
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.div
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}