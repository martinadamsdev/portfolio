import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import PageTransition from "@/components/page-transition";
import ErrorBoundary from "@/components/error-boundary";
import { LazyScrollToTop, LazySmoothScroll } from "@/components/lazy-client-components";
import { ThemeTransition } from "@/components/theme-transition";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Martin - Senior Software Engineer | Portfolio",
    template: "%s | Martin",
  },
  description:
    "Martin is a senior software engineer with 7+ years of experience specializing in modern web development with React, Next.js, TypeScript, Node.js, Hono.js, and more. Explore projects, blog posts, and professional skills.",
  keywords: [
    "martin wang",
    "martin",
    "software engineer",
    "senior developer",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "react developer",
    "nextjs developer",
    "typescript developer",
    "javascript developer",
    "next.js",
    "typescript",
    "react",
    "node.js",
    "hono.js",
    "web development",
    "software development",
    "portfolio",
    "blog",
    "tech blog",
    "programming",
    "coding",
    "javascript",
    "web applications",
    "responsive design",
    "performance optimization",
  ],
  authors: [{ name: "Martin", url: siteUrl }],
  creator: "Martin",
  publisher: "Martin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Martin - Senior Software Engineer | Portfolio",
    description:
      "Martin is a senior software engineer with 7+ years of experience specializing in modern web development with React, Next.js, TypeScript, Node.js, Hono.js, and more. Explore projects, blog posts, and professional skills.",
    url: "/",
    siteName: "Martin Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Martin - Senior Software Engineer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin - Senior Software Engineer | Portfolio",
    description:
      "Martin is a senior software engineer with 7+ years of experience specializing in modern web development with React, Next.js, TypeScript, Node.js, Hono.js, and more.",
    images: ["/opengraph-image"],
    creator: "@martinadamsdev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: 'Martin Blog RSS Feed' }
      ],
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
    },
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
      <head>
        <PersonSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <PageTransition>
                <main className="flex-1">{children}</main>
              </PageTransition>
              <Footer />
              <LazySmoothScroll />
              <LazyScrollToTop />
              <ThemeTransition />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
