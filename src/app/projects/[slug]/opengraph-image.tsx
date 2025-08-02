import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/projects";

export const alt = "Project - Martin";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  const title = project?.title || "Project";
  const description = project?.description || "A software project by Martin";
  
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
          padding: "80px",
          textAlign: "center",
        }}
      >
        <span style={{ marginBottom: 24 }}>{title}</span>
        <span style={{ 
          fontSize: 28, 
          fontWeight: 400,
          opacity: 0.9,
          lineHeight: 1.3,
          maxWidth: "80%",
        }}>
          {description}
        </span>
        <span style={{ 
          fontSize: 24, 
          marginTop: 40,
          opacity: 0.8,
        }}>
          by Martin
        </span>
      </div>
    ),
    { ...size }
  );
}