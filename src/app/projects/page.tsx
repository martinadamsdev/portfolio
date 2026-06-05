import type { Metadata } from "next";
import ProjectList from "@/components/project-list";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects - Martin",
  alternates: { canonical: "/projects" },
  description:
    "Explore projects by Martin, showcasing expertise in React, Next.js, TypeScript, Node.js, Hono.js, and more.",
  openGraph: {
    title: "Projects - Martin",
    description:
      "Explore projects by Martin, showcasing expertise in React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    url: "/projects",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Projects - Martin",
    description:
      "Explore projects by Martin, showcasing expertise in React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    images: ["/opengraph-image"],
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="container py-12">
      <h1 className="text-4xl font-extrabold mb-4 text-white">Projects</h1>
      <p className="mb-8 text-lg text-neutral-400">
        A collection of my work and side projects.
      </p>
      <ProjectList projects={projects} />
    </section>
  );
}
