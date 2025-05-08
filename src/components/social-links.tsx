"use client";

import { Github, Twitter, Linkedin, Code2 } from "lucide-react";
import { SiStackoverflow } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/martinadamsdev",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://x.com/martinadamsdev",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/liquan-wang",
    icon: Linkedin,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/12156529/martiadamsdev",
    icon: SiStackoverflow,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
