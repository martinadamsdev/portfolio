import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-xl border border-neutral-800 bg-gradient-to-br from-[#181c24] to-[#23272f] shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl">
      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-neutral-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="bg-neutral-700 text-xs text-cyan-300 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block text-cyan-400 hover:text-cyan-200 font-medium transition-colors"
        >
          Visit Project &rarr;
        </a>
      </div>
    </div>
  );
}
