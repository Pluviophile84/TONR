export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 1000, fontStyle: "italic" }}>
          tonr
        </div>
        <div style={{ fontSize: 28, marginTop: 20 }}>
          The Printr runs on TONR
        </div>
      </div>
    ),
    size
  );
}
