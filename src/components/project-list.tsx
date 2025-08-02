import ProjectCard from "./project-card";
import type { Project } from "@/lib/projects";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard 
          key={project.slug} 
          slug={project.slug}
          title={project.title}
          description={project.description}
          link={project.liveUrl || project.link}
          image={project.image}
          tags={project.tags}
          featured={project.featured}
        />
      ))}
    </div>
  );
}
