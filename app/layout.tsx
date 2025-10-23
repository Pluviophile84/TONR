import type { Metadata } from "next";
import "./globals.css";
import { Rajdhani, Inter_Tight } from "next/font/google";

const raj = Rajdhani({ subsets: ["latin"], weight: ["600","700"], variable: "--font-rajdhani" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400","600"], variable: "--font-intertight" });

export const metadata: Metadata = {
  title: "tonr — The Printr runs on tonr",
  description: "The Printr runs on TONR — the beta ink powering the machine. No TONR, no print.",
  openGraph: {
    title: "tonr — beta ink for Printr",
    description: "Before the future prints, the printer leaks. $TONR is the beta cartridge of the Printr ecosystem.",
    images: ["/og.png"], // static fallback; dynamic route also provided
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raj.variable} ${interTight.variable} font-body bg-bg text-fg`}>
        {children}
      </body>
    </html>
  );
}
