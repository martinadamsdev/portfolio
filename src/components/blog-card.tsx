import Image from "next/image";
import dayjs from "dayjs";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  cover?: string;
  slug: string;
  className?: string;
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
  className,
}: BlogCardProps) {
  // 使用 dayjs 格式化日期为 MM/DD/YY 格式
  const formattedDate = date ? dayjs(date).format("MM/DD/YY") : "";

  return (
    <a
      href={`/blog/${slug}`}
      className={cn(
        "group relative block rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/50",
        className
      )}
    >
      {cover && (
        <Suspense
          fallback={
            <div className="h-48 bg-muted animate-pulse" />
          }
        >
          <BlogImage src={cover} alt={title} />
        </Suspense>
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <div className="text-xs text-muted-foreground">{formattedDate}</div>
      </div>
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </a>
  );
}
