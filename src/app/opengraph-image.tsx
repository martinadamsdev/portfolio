import { ImageResponse } from "next/og";

export const alt = "Liquan (Martin) Wang - Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
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
        <span>Liquan (Martin) Wang</span>
        <span style={{ fontSize: 32, marginTop: 24 }}>
          Senior Software Engineer
        </span>
        <span style={{ fontSize: 24, marginTop: 12 }}>
          React · Next.js · TypeScript · Node.js · Hono.js
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
