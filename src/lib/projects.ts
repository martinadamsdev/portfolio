import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
  date?: string;
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
        link: data.link || "#",
        image: data.image,
        tags: data.tags || [],
        date: data.date,
      };

      return project;
    });
  return projects.sort((a, b) => ((a.date || "") < (b.date || "") ? 1 : -1));
}
