import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "#1C00ff00",
      primary: {
        "0": "var(--color-p00)",
        "1": "var(--color-p10)",
        "2": "var(--color-p20)",
        "3": "var(--color-p30)",
      },
      secondary: {
        "0": "var(--color-s00)",
        "1": "var(--color-s10)",
        "2": "var(--color-s20)",
        "3": "var(--color-s30)",
      },
      neutral: {
        "0": "var(--color-n00)",
        "1": "var(--color-n10)",
        "2": "var(--color-n20)",
        "3": "var(--color-n30)",
        "4": "var(--color-n40)",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
