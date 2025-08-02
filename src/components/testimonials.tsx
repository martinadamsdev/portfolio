"use client";

import { motion } from "motion/react";
import { Quote, Star, User } from "lucide-react";
import Image from "next/image";
import { createCardStyles, typography, layouts } from "@/styles/design-system";
import type { Testimonial } from "@/types";
import { useState } from "react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Martin is an exceptional full-stack developer who delivered our complex e-commerce platform ahead of schedule. His expertise in React and Node.js is outstanding.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    content: "Working with Martin was a game-changer for our startup. His modern approach to web development and attention to performance optimization helped us scale rapidly.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    content: "Martin's TypeScript skills and clean code practices significantly improved our codebase quality. He's a true professional who delivers exceptional results.",
    author: "Emily Rodriguez",
    role: "Engineering Manager",
    company: "DataFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 4,
    content: "The Next.js application Martin built for us exceeded all expectations. His architectural decisions and performance optimizations were spot-on.",
    author: "Michael Kim",
    role: "Product Director",
    company: "CloudTech Inc",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 5,
    content: "Martin's ability to translate complex business requirements into elegant technical solutions is remarkable. He's our go-to developer for critical projects.",
    author: "Lisa Wang",
    role: "VP of Engineering",
    company: "FinanceFlow",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 6,
    content: "His expertise in modern web technologies and DevOps practices helped us modernize our entire tech stack. Highly recommended!",
    author: "James Miller",
    role: "Technical Lead",
    company: "ModernApps",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
];

// Avatar component with error handling
function TestimonialAvatar({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <User className="w-5 h-5 text-muted-foreground" />
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
        className={`object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        sizes="40px"
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        unoptimized // Prevent Next.js from optimizing external images
      />
    </>
  );
}

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Success Rate", value: "99%" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what industry leaders and clients say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed text-foreground/90 mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <TestimonialAvatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let&apos;s discuss your project and see how we can create something amazing together.
          </p>
          <motion.a
            href="mailto:martinadams.dev@gmail.com"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}