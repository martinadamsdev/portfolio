import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPostMeta {
  slug: string;
  title?: string;
  description?: string;
  date?: string;
  cover?: string;
  [key: string]: any;
}

export function getAllPosts(): BlogPostMeta[] {
  const fileNames = fs.readdirSync(blogDirectory);
  const posts = fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        ...data,
      } as BlogPostMeta;
    });
  return posts.sort((a, b) => (a.date && b.date && a.date < b.date ? 1 : -1));
}
