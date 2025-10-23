export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", background: "#0a0a0a", color: "white",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: 48, fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 1000, fontStyle: "italic", textTransform: "lowercase" }}>tonr</div>
          <div style={{ display: "flex", height: 8, width: 180, borderRadius: 4, overflow: "hidden" }}>
            <div style={{ background: "#22d3ee", flex: 1 }} />
            <div style={{ background: "#ec4899", flex: 1 }} />
            <div style={{ background: "#facc15", flex: 1 }} />
          </div>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          <div style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.1 }}>The Printr runs on tonr.</div>
          <div style={{ fontSize: 28, color: "#cbd5e1" }}>The beta ink powering the machine. No TONR, no print.</div>
        </div>
        <div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 800 }}>$TONR</div>
            <div style={{ width: 2, height: 24, background: "#334155" }} />
            <div style={{ fontSize: 20, color: "#94a3b8" }}>tonr.money</div>
          </div>
          <div style={{ display: "flex", width: "100%", height: 6, marginTop: 16 }}>
            <div style={{ background: "#22d3ee", flex: 1 }} />
            <div style={{ background: "#ec4899", flex: 1 }} />
            <div style={{ background: "#facc15", flex: 1 }} />
          </div>
        </div>
      </div>
    ),
    size
  );
}
