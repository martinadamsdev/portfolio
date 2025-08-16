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
    default: "Martin Wang - Senior Software Engineer | Full Stack Developer Portfolio",
    template: "%s | Martin Wang - Senior Software Engineer",
  },
  description:
    "Martin Wang is a senior software engineer with 7+ years of experience specializing in modern web development. Expert in React, Next.js, TypeScript, Node.js, and Hono.js. View portfolio projects, technical blog posts, and professional experience in full-stack development.",
  keywords: [
    "Martin Wang",
    "Martin Adams",
    "martinadamsdev",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Node.js Developer",
    "Hono.js Specialist",
    "Frontend Engineer",
    "Backend Developer",
    "JavaScript Developer",
    "Web Development",
    "Software Architecture",
    "Technical Blog",
    "Developer Portfolio",
    "Singapore Developer",
    "React 18",
    "Next.js 15",
    "TypeScript",
    "Node.js",
    "Hono.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "REST API",
    "GraphQL",
    "WebAssembly",
    "Performance Optimization",
    "Responsive Design",
    "Progressive Web Apps",
    "Cloud Computing",
    "DevOps",
    "CI/CD",
    "Git",
    "Agile Development",
    "Software Engineering Best Practices",
  ],
  authors: [{ name: "Martin Wang", url: siteUrl }],
  creator: "Martin Wang",
  publisher: "Martin Wang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "Martin Wang Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Portfolio, Blog, Technology",
  openGraph: {
    title: "Martin Wang - Senior Software Engineer | Full Stack Developer Portfolio",
    description:
      "Martin Wang is a senior software engineer with 7+ years of experience specializing in modern web development. Expert in React, Next.js, TypeScript, Node.js, and Hono.js. View portfolio projects, technical blog posts, and professional experience.",
    url: siteUrl,
    siteName: "Martin Wang - Senior Software Engineer Portfolio",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Martin Wang - Senior Software Engineer Portfolio",
        type: "image/png",
      },
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 1200,
        alt: "Martin Wang - Senior Software Engineer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    determiner: "the",
    countryName: "Singapore",
    emails: ["martinadams.dev@gmail.com"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@martinadamsdev",
    creator: "@martinadamsdev",
    title: "Martin Wang - Senior Software Engineer | Full Stack Developer",
    description:
      "Senior software engineer with 7+ years of experience. Expert in React, Next.js, TypeScript, Node.js. View portfolio projects and technical blog posts.",
    images: {
      url: `${siteUrl}/opengraph-image`,
      alt: "Martin Wang - Senior Software Engineer Portfolio",
    },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "zh-CN": `${siteUrl}/zh-cn`,
    },
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "Martin Wang Blog RSS Feed" },
      ],
      "application/atom+xml": [
        { url: "/atom.xml", title: "Martin Wang Blog Atom Feed" },
      ],
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.BING_SITE_VERIFICATION || "",
      "p:domain_verify": process.env.PINTEREST_VERIFICATION || "",
      "facebook-domain-verification": process.env.FACEBOOK_VERIFICATION || "",
    },
  },
  metadataBase: new URL(siteUrl),
  appleWebApp: {
    capable: true,
    title: "Martin Wang Portfolio",
    statusBarStyle: "black-translucent",
  },
  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },
  other: {
    "dc.title": "Martin Wang - Senior Software Engineer Portfolio",
    "dc.creator": "Martin Wang",
    "dc.publisher": "Martin Wang",
    "dc.rights": `© ${new Date().getFullYear()} Martin Wang. All rights reserved.`,
    "dc.language": "en-US",
    "dc.source": siteUrl,
    "article:author": "Martin Wang",
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "viewport": "width=device-width, initial-scale=1, maximum-scale=5",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="author" content="Martin Wang" />
        <meta name="copyright" content={`© ${new Date().getFullYear()} Martin Wang`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="alternate" type="application/rss+xml" title="Martin Wang Blog RSS Feed" href="/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Martin Wang Blog Atom Feed" href="/atom.xml" />
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
