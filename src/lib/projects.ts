import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  link?: string;
  image?: string;
  tags?: string[];
  date?: string;
  featured?: boolean;
  category?: string;
  liveUrl?: string;
  githubUrl?: string;
  content?: string;
}

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      // 确保必需的字段存在，否则使用默认值
      const project: Project = {
        slug,
        title: data.title || slug,
        description: data.description || "No description available",
        link: data.link,
        image: data.image,
        tags: data.tags || [],
        date: data.date,
        featured: data.featured || false,
        category: data.category,
        liveUrl: data.liveUrl,
        githubUrl: data.githubUrl,
      };

      return project;
    });
  return projects.sort((a, b) => ((a.date || "") < (b.date || "") ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter(project => project.featured).slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "No description available",
      link: data.link,
      image: data.image,
      tags: data.tags || [],
      date: data.date,
      featured: data.featured || false,
      category: data.category,
      liveUrl: data.liveUrl,
      githubUrl: data.githubUrl,
      content,
    };
  } catch (error) {
    return null;
  }
}
