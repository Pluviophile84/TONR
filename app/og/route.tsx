// app/og/route.tsx
import { ImageResponse } from "next/og";

// Valid export (optional): keep the route on the Edge
export const runtime = "edge";

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
          justifyContent: "space-between",
          padding: 48,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 1000,
              fontStyle: "italic",
              textTransform: "uppercase",
              letterSpacing: 6,
            }}
          >
            TONR
          </div>
          {/* Continuous CMYK gradient bar */}
          <div
            style={{
              height: 8,
              width: 220,
              background:
                "linear-gradient(90deg,#22d3ee 0%,#ec4899 33%,#facc15 66%,#000 100%)",
            }}
          />
        </div>

        {/* Center */}
        <div style={{ display: "grid", gap: 12 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: 2,
            }}
          >
            THE PRINTR RUNS ON TONR.
          </div>
          <div style={{ fontSize: 26, color: "#cbd5e1" }}>
            The beta ink powering the machine. No TONR, no print.
          </div>
        </div>

        {/* Footer */}
        <div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 800 }}>$TONR</div>
            <div style={{ width: 2, height: 24, background: "#334155" }} />
            <div style={{ fontSize: 18, color: "#94a3b8" }}>tonr.money</div>
          </div>
          <div
            style={{
              width: "100%",
              height: 6,
              marginTop: 16,
              background:
                "linear-gradient(90deg,#22d3ee 0%,#ec4899 33%,#facc15 66%,#000 100%)",
            }}
          />
        </div>
      </div>
    ),
    { width: 1200, height: 630 } // <-- pass size here, NOT as an export
  );
}
