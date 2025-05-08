import ProjectCard from "./project-card";

interface Project {
  slug: string;
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
