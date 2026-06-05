import Link from "next/link";

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
          <span
            className="icon-[ph--caret-left] h-4 w-4 mr-1"
            aria-hidden="true"
          />
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
          <span
            className="icon-[ph--caret-right] h-4 w-4 ml-1"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
