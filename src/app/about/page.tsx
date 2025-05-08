import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Liquan (Martin) Wang",
  description:
    "Learn more about Liquan (Martin) Wang, a senior software engineer passionate about modern web development, open source, and building scalable solutions.",
  openGraph: {
    title: "About - Liquan (Martin) Wang",
    description:
      "Learn more about Liquan (Martin) Wang, a senior software engineer passionate about modern web development, open source, and building scalable solutions.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "About - Liquan (Martin) Wang",
    description:
      "Learn more about Liquan (Martin) Wang, a senior software engineer passionate about modern web development, open source, and building scalable solutions.",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <section className="container flex flex-col items-center gap-10 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">About</h1>
        <p className="text-lg text-muted-foreground">
          I'm a full-stack engineer with 7 years of experience delivering
          scalable web applications, internal tools, and design
          systems—specializing in modern frontend and backend technologies.
        </p>
      </div>

      <div className="w-full max-w-2xl rounded-lg border bg-card text-card-foreground shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-2">Bio</h2>
        <p className="text-muted-foreground mb-4">
          I've led the development of business-grade component libraries (F UI,
          T UI, UF Components), built design systems from the ground up, and
          shipped high-performance SSR websites and enterprise-grade platforms
          across industries like 3D printing, photovoltaics, and law
          enforcement.
        </p>
        <p className="text-muted-foreground mb-4">
          I care deeply about clean architecture, developer experience, and
          remote collaboration efficiency. Based in a small town in China, I'm a
          disciplined remote worker with years of experience delivering across
          time zones and cultures.
        </p>
        <div className="pt-2 border-t text-muted-foreground text-sm">
          <div className="mb-1">
            🔍 <b>Open to remote-first opportunities</b> where I can help build
            impactful, maintainable products.
          </div>
          <div>
            💬 Let's connect if you're hiring or want to talk about design
            systems, frontend architecture, or remote team culture.
          </div>
        </div>
      </div>
    </section>
  );
}
