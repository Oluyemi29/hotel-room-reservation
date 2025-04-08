import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    light: {
      colors: {
        background: "#FFFFFF", // or DEFAULT
        foreground: "#11181C", // or 50 to 900 DEFAULT
        primary: {
          //... 50 to 900
          foreground: "#FFFFFF",
          DEFAULT: "#006FEE",
        },
        // ... rest of the colors
      },
    },
    dark: {
      colors: {
        background: "#000000", // or DEFAULT
        foreground: "#ECEDEE", // or 50 to 900 DEFAULT
        primary: {
          //... 50 to 900
          foreground: "#FFFFFF",
          DEFAULT: "#006FEE",
        },
      },
      // ... rest of the colors
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        carton: "#f5c7a2",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({ addCommonColors: true })],
} satisfies Config;
