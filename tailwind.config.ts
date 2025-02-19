import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        dark: "var(--background-color)",
        semiDark: "var(--semi-dark-color)",
      },
      width: {
        "128": "32rem",
      },
      height: {
        "608": "38rem",
        cover: "670px",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
    },
  },
  plugins: [],
} satisfies Config;
