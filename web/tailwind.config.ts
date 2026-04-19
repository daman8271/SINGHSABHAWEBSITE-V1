import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        taupe: "#C9BFB3",
        "taupe-light": "#D9D1C5",
        hairline: "#E9E3DA",
        muted: "#8A8175",
        ink: "#1A1613",
        "ink-dark": "#100E0C",
        "card-dark": "#1C1917",
        "hairline-dark": "#2A2520",
        "muted-dark": "#5C574F",
        amber: "#D4820A",
        "amber-light": "#E89B20",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wordmark: "0.3em",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
