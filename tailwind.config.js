/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        fg: "#ffffff",
        border: "rgba(255,255,255,0.12)",
        sub: "rgba(255,255,255,0.7)"
      },
      fontFamily: {
        heading: ["var(--font-rajdhani)"],
        body: ["var(--font-intertight)"],
        code: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"]
      }
    },
  },
  plugins: [],
};
