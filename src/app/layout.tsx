import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  title: "Liquan (Martin) Wang - Portfolio",
  description:
    "Liquan (Martin) Wang is a senior software engineer specializing in modern web development with React, Next.js, TypeScript, Node.js, Hono.js, and more. Explore projects, blog posts, and professional skills.",
  keywords: [
    "liquan wang",
    "martin wang",
    "software engineer",
    "full stack developer",
    "next.js",
    "typescript",
    "node.js",
    "hono.js",
    "react",
    "portfolio",
    "blog",
  ],
  authors: [{ name: "Liquan (Martin) Wang" }],
  openGraph: {
    title: "Liquan (Martin) Wang - Portfolio",
    description:
      "Liquan (Martin) Wang is a senior software engineer specializing in modern web development with React, Next.js, TypeScript, Node.js, Hono.js, and more. Explore projects, blog posts, and professional skills.",
    url: "/",
    siteName: "Liquan (Martin) Wang Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Liquan (Martin) Wang - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquan (Martin) Wang - Portfolio",
    description:
      "Liquan (Martin) Wang is a senior software engineer specializing in modern web development with React, Next.js, TypeScript, Node.js, Hono.js, and more. Explore projects, blog posts, and professional skills.",
    images: ["/opengraph-image"],
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
