import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiRedux,
  SiAntdesign,
  SiNestjs,
  SiGoland,
  SiPython,
  SiFastapi,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { Squirrel } from "lucide-react";
import type { Metadata } from "next";

const skills = [
  { name: "React", icon: SiReact, level: 90, url: "https://react.dev" },
  { name: "Next.js", icon: SiNextdotjs, level: 85, url: "https://nextjs.org" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 90,
    url: "https://www.typescriptlang.org",
  },
  { name: "Node.js", icon: SiNodedotjs, level: 80, url: "https://nodejs.org" },
  { name: "Vue", icon: SiVuedotjs, level: 70, url: "https://vuejs.org" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 90,
    url: "https://tailwindcss.com",
  },
  { name: "Golang", icon: SiGoland, level: 60, url: "https://go.dev" },
  { name: "Redux", icon: SiRedux, level: 80, url: "https://redux.js.org" },
  {
    name: "Ant Design",
    icon: SiAntdesign,
    level: 75,
    url: "https://ant.design",
  },
  { name: "Nest.js", icon: SiNestjs, level: 70, url: "https://nestjs.com" },
  { name: "Hono.js", icon: SiNodedotjs, level: 70, url: "https://hono.dev/" },
  { name: "Python", icon: SiPython, level: 70, url: "https://www.python.org" },
  {
    name: "FastAPI",
    icon: SiFastapi,
    level: 70,
    url: "https://fastapi.tiangolo.com",
  },
  { name: "PHP", icon: SiPhp, level: 70, url: "https://www.php.net" },
  { name: "Laravel", icon: SiLaravel, level: 70, url: "https://laravel.com" },
  {
    name: "Zustand",
    icon: Squirrel,
    level: 80,
    url: "https://zustand-demo.pmnd.rs/",
  },
];

export const metadata: Metadata = {
  title: "Home - Liquan (Martin) Wang",
  description:
    "Welcome to the portfolio of Liquan (Martin) Wang, senior software engineer. Explore projects, blog posts, and professional skills in React, Next.js, TypeScript, Node.js, Hono.js, and more.",
  openGraph: {
    title: "Home - Liquan (Martin) Wang",
    description:
      "Welcome to the portfolio of Liquan (Martin) Wang, senior software engineer. Explore projects, blog posts, and professional skills in React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Home - Liquan (Martin) Wang",
    description:
      "Welcome to the portfolio of Liquan (Martin) Wang, senior software engineer. Explore projects, blog posts, and professional skills in React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <section className="container max-w-3xl mx-auto py-12">
        <div className="flex flex-col items-center gap-2 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter mb-4">
            Senior Software Engineer
          </h1>
          <h2 className="text-lg md:text-xl text-primary mb-6 font-semibold">
            Full-Stack Engineer · Next.js · TypeScript
          </h2>
          <p className="max-w-[500px] text-lg text-muted-foreground mb-8">
            Hi, I&apos;m Liquan (Martin) Wang. I build modern web apps with{" "}
            <b>React</b>, <b>Next.js</b>, and <b>TypeScript</b>, and scalable
            backends with <b>Node.js</b>, <b>Nest.js</b>, <b>Hono.js</b>, and{" "}
            <b>Redis</b>.
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Read Blog
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(({ name, icon: Icon, level, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative flex items-center gap-4 p-5 rounded-2xl border border-border bg-card shadow-sm
                  transition-all duration-200
                  hover:shadow-lg hover:border-primary hover:bg-accent/40
                  cursor-pointer
                  overflow-hidden
                "
                title={`Open ${name} official website`}
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-accent/30 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-7 h-7 text-primary" />
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-lg">{name}</span>
                    <span className="text-xs text-muted-foreground">
                      {level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
                <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
