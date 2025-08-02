"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  link?: string;
  image?: string;
  tags?: string[];
  className?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  slug,
  link,
  image,
  tags,
  className,
  featured = false,
}: ProjectCardProps) {
  const cardContent = (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/50",
        featured && "ring-2 ring-primary/20",
        className
      )}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Project Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* External Link Icon */}
          {link && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(link, '_blank', 'noopener,noreferrer');
              }}
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label={`Open ${title} project in new tab`}
            >
              <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors">
                <ExternalLink className="w-4 h-4 text-foreground" />
              </div>
            </button>
          )}
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md transition-colors group-hover:bg-primary/10 group-hover:text-primary"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                +{tags.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
          Learn More
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </div>
  );

  return (
    <Link href={`/projects/${slug}`} className="block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    </Link>
  );
}