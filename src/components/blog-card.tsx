import Image from "next/image";
import dayjs from "dayjs";

export default function BlogCard({ title, description, date, cover, slug }) {
  // 使用 dayjs 格式化日期为 MM/DD/YY 格式
  const formattedDate = date ? dayjs(date).format("MM/DD/YY") : "";

  return (
    <a
      href={`/blog/${slug}`}
      className="group block rounded-xl border border-neutral-200 bg-white dark:bg-[#181c24] shadow hover:shadow-lg transition overflow-hidden"
    >
      {cover && (
        <div className="relative h-48 w-full">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      )}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 mb-2">{description}</p>
        <div className="text-xs text-neutral-400">{formattedDate}</div>
      </div>
    </a>
  );
}
