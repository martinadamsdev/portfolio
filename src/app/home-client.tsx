"use client";

import React, { useState, useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiRedux,
  SiAntdesign,
  SiNestjs,
  SiGoland,
  SiPython,
  SiFastapi,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { Squirrel, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { FaTwitter, FaStackOverflow } from "react-icons/fa";
import { motion } from "motion/react";
import FeaturedProjectsFallback from "@/components/featured-projects-fallback";
import { LazyTestimonials } from "@/components/lazy-client-components";
import type { Skill, SocialLink } from "@/types";

const skills: Skill[] = [
  { name: "React", icon: SiReact, level: 90, url: "https://react.dev", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, level: 85, url: "https://nextjs.org", color: "#000000" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 90,
    url: "https://www.typescriptlang.org",
    color: "#3178C6",
  },
  { name: "Node.js", icon: SiNodedotjs, level: 80, url: "https://nodejs.org", color: "#339933" },
  { name: "Vue", icon: SiVuedotjs, level: 70, url: "https://vuejs.org", color: "#4FC08D" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 90,
    url: "https://tailwindcss.com",
    color: "#06B6D4",
  },
  { name: "Golang", icon: SiGoland, level: 60, url: "https://go.dev", color: "#00ADD8" },
  { name: "Redux", icon: SiRedux, level: 80, url: "https://redux.js.org", color: "#764ABC" },
  {
    name: "Ant Design",
    icon: SiAntdesign,
    level: 75,
    url: "https://ant.design",
    color: "#0170FE",
  },
  { name: "Nest.js", icon: SiNestjs, level: 70, url: "https://nestjs.com", color: "#E0234E" },
  { name: "Hono.js", icon: SiNodedotjs, level: 70, url: "https://hono.dev/", color: "#E36002" },
  { name: "Python", icon: SiPython, level: 70, url: "https://www.python.org", color: "#3776AB" },
  {
    name: "FastAPI",
    icon: SiFastapi,
    level: 70,
    url: "https://fastapi.tiangolo.com",
    color: "#009688",
  },
  { name: "PHP", icon: SiPhp, level: 70, url: "https://www.php.net", color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, level: 70, url: "https://laravel.com", color: "#FF2D20" },
  {
    name: "Zustand",
    icon: Squirrel,
    level: 80,
    url: "https://zustand-demo.pmnd.rs/",
    color: "#FFB13B",
  },
];

const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: Github, url: "https://github.com/martinadamsdev" },
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/martinadamsdev" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/liquan-wang/" },
  { name: "StackOverflow", icon: FaStackOverflow, url: "https://stackoverflow.com/users/12156529/martiadamsdev" },
  { name: "Email", icon: Mail, url: "mailto:martinadams.dev@gmail.com" },
];

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <main className="flex-1">
      {/* Hero Section with Animated Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-bg opacity-10 dark:opacity-5" />
        
        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                7+ Years of Experience
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
                Senior Software Engineer
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full-Stack Engineer · Next.js · TypeScript · Architecture
            </motion.h2>

            <motion.p
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I&apos;m Martin. I craft exceptional digital experiences with{" "}
              <span className="text-foreground font-semibold">React</span>,{" "}
              <span className="text-foreground font-semibold">Next.js</span>, and{" "}
              <span className="text-foreground font-semibold">TypeScript</span>, building scalable
              solutions that push the boundaries of web technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-4 text-lg font-medium text-foreground transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:shadow-primary/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Blog
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map(({ name, icon: Icon, url }) => {
                const IconComponent = Icon as React.FC<{ className?: string }>;
                return (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={name}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToSkills}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Technologies I use to build amazing products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ name, icon: Icon, level, url, color }, index) => {
              const IconComponent = Icon as React.FC<{ className?: string; style?: React.CSSProperties }>;
              return (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                title={`Open ${name} official website`}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${color}20 0%, transparent 100%)`,
                  }}
                />

                <motion.span
                  className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="w-8 h-8" style={{ color }} />
                </motion.span>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg">{name}</span>
                    <span className="text-sm text-muted-foreground font-medium">{level}%</span>
                  </div>
                  <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`,
                      } as React.CSSProperties}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <motion.span
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.span>
              </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjectsFallback />

      {/* Testimonials Section */}
      <LazyTestimonials />

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
        
        .bg-300 {
          background-size: 300% 300%;
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </main>
  );
}