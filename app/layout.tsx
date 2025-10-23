export const metadata = {
  title: "tonr — The Printr runs on tonr",
  description:
    "The Printr runs on TONR — the beta ink powering the machine. No TONR, no print.",
  openGraph: {
    title: "tonr — beta ink for Printr",
    description:
      "Before the future prints, the printer leaks. $TONR is the beta cartridge of the Printr ecosystem.",
    images: ["/api/og"], // handled by /app/og/route.tsx
  },
  twitter: { card: "summary_large_image" },
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
