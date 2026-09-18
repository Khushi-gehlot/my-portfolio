import type { Config } from "tailwindcss";

// Preflight is disabled so Tailwind never resets the hand-tuned design in
// globals.css. Utilities remain available for future additions.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        pink: "var(--pink)",
        "pink-soft": "var(--pink-soft)",
        "pink-deep": "var(--pink-deep)",
      },
      fontFamily: {
        display: "var(--font-d)",
        body: "var(--font-b)",
        mono: "var(--font-m)",
      },
    },
  },
  plugins: [],
};

export default config;
