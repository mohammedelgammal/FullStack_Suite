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
      },
      width: {
        "128": "32rem",
      },
      height: {
        "608": "38rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
