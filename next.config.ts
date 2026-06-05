import createMDX from "@next/mdx";
import type { NextConfig } from "next";

// MDX plugins (remark-gfm, rehype-highlight, rehype-slug, rehype-autolink-headings)
// are applied at render time in the blog route via next-mdx-remote's `mdxOptions`,
// since content is read from disk as strings rather than imported as `.mdx` modules.
// This wrapper only enables `.mdx` files as routable pages (see `pageExtensions`).
const withMDX = createMDX();

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: { unoptimized: true },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withMDX(nextConfig);
