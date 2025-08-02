"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"));
    const usedIds = new Set<string>();
    
    const items = elements.map((element, index) => {
      let id = element.id;
      
      if (!id) {
        id = element.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      }
      
      // Ensure unique ID
      let uniqueId = id;
      let counter = 1;
      while (usedIds.has(uniqueId) || !uniqueId) {
        uniqueId = `${id || 'heading'}-${counter}`;
        counter++;
      }
      usedIds.add(uniqueId);
      
      // Set the ID on the element if it doesn't have one
      if (!element.id) {
        element.id = uniqueId;
      }
      
      return {
        id: uniqueId,
        text: element.textContent || "",
        level: Number(element.tagName.charAt(1)),
      };
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    elements.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="toc">
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 hover:text-cyan-400 transition-colors ${
                activeId === heading.id
                  ? "text-cyan-400 font-medium"
                  : "text-neutral-500"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(`#${heading.id}`);
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
