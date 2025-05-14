import Image from "next/image";
import dayjs from "dayjs";
import { Suspense } from "react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  cover?: string;
  slug: string;
}

// 图片组件
function BlogImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-48 w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform"
        loading="lazy"
        quality={75}
      />
    </div>
  );
}

export default function BlogCard({
  title,
  description,
  date,
  cover,
  slug,
}: BlogCardProps) {
  // 使用 dayjs 格式化日期为 MM/DD/YY 格式
  const formattedDate = date ? dayjs(date).format("MM/DD/YY") : "";

  return (
    <a
      href={`/blog/${slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white dark:bg-[#181c24] shadow hover:shadow-lg transition overflow-hidden"
    >
      {cover && (
        <Suspense
          fallback={
            <div className="h-48 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          }
        >
          <BlogImage src={cover} alt={title} />
        </Suspense>
      )}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 mb-2 line-clamp-2">
          {description}
        </p>
        <div className="text-xs text-neutral-400">{formattedDate}</div>
      </div>
    </a>
  );
}
