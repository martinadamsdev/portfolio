import dynamic from "next/dynamic";
import BlogCard from "./blog-card";

// 懒加载博客卡片组件
const LazyBlogCard = dynamic(() => import("./blog-card"), {
  loading: () => (
    <div className="animate-pulse rounded-xl border border-neutral-200 bg-white dark:bg-[#181c24] p-5">
      <div className="h-48 bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-4" />
      <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-2" />
      <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full mb-2" />
      <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2" />
    </div>
  ),
});

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <LazyBlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
