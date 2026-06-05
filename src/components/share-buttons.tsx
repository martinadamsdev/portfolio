"use client";

import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url,
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url,
    )}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 hover:text-cyan-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <span className="sr-only">Share on Twitter</span>
        <span className="icon-[simple-icons--x] h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 hover:text-cyan-400 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <span className="sr-only">Share on LinkedIn</span>
        <span
          className="icon-[simple-icons--linkedin] h-5 w-5"
          aria-hidden="true"
        />
      </a>
      <button
        type="button"
        onClick={copyToClipboard}
        className="text-neutral-500 hover:text-cyan-400 transition-colors"
        aria-label="Copy link"
      >
        <span className="icon-[ph--link] h-5 w-5" aria-hidden="true" />
      </button>
      {copied && <span className="text-sm text-cyan-400">Link copied!</span>}
    </div>
  );
}
