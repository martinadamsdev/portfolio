"use client";

import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Martin. The source code is available on{" "}
            <a
              href="https://github.com/martinadamsdev/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
