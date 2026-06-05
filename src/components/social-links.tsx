"use client";

const socialLinks: Array<{
  name: string;
  url: string;
  icon: string;
}> = [
  {
    name: "GitHub",
    url: "https://github.com/martinadamsdev",
    icon: "icon-[simple-icons--github]",
  },
  {
    name: "Twitter",
    url: "https://x.com/martinadamsdev",
    icon: "icon-[simple-icons--x]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/liquan-wang",
    icon: "icon-[simple-icons--linkedin]",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/12156529/martiadamsdev",
    icon: "icon-[simple-icons--stackoverflow]",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => {
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={link.name}
          >
            <span className="sr-only">{link.name}</span>
            <span className={`${link.icon} h-5 w-5`} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
