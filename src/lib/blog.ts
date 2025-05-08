import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
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

      // 确保必需的字段存在，否则使用默认值
      const post: BlogPostMeta = {
        slug,
        title: data.title || slug,
        description: data.description || "No description available",
        date: data.date || new Date().toISOString(),
        cover: data.cover,
        ...data,
      };

      return post;
    });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
