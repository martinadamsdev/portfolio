import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const alt = "Blog Post - Liquan (Martin) Wang";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter } = matter(fileContent);
  return frontmatter;
}

export default async function OGImage({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getPost(params.slug);
  const title = frontmatter?.title || "Blog Post";
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          background: "linear-gradient(135deg, #18181b 0%, #2563eb 100%)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-2px",
          fontWeight: 700,
        }}
      >
        <span>{title}</span>
        <span style={{ fontSize: 28, marginTop: 24 }}>
          by Liquan (Martin) Wang
        </span>
      </div>
    ),
    { ...size }
  );
}
