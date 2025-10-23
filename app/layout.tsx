export const metadata = {
  title: "tonr — The Printr runs on tonr",
  description:
    "The Printr runs on TONR — the beta ink powering the machine. No TONR, no print.",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
