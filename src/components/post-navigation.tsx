import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PostNavigationProps {
  prevPost?: {
    slug: string;
    title: string;
  };
  nextPost?: {
    slug: string;
    title: string;
  };
}

export default function PostNavigation({
  prevPost,
  nextPost,
}: PostNavigationProps) {
  return (
    <nav className="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8">
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="group flex items-center text-sm text-neutral-500 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <div>
            <div className="text-xs text-neutral-400">Previous</div>
            <div className="group-hover:text-cyan-400">{prevPost.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex items-center text-sm text-neutral-500 hover:text-cyan-400 transition-colors text-right"
        >
          <div>
            <div className="text-xs text-neutral-400">Next</div>
            <div className="group-hover:text-cyan-400">{nextPost.title}</div>
          </div>
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
