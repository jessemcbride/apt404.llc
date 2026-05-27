import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-apt-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-apt-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        signal: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
