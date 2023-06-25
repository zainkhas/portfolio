/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        title: { DEFAULT: "#3F3D56", dark: "#cccccc" },
        primary: {
          DEFAULT: "#3F3D56",
          dark: "#bebebe",
        },
        secondary: { DEFAULT: "#6D6B6B", dark: "#d1d1d1" },
        resumePaper: {
          DEFAULT: "#F9FAFB",
          dark: "#232222",
        },
      },

      fontFamily: {
        jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        11: "2.4rem",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark"], // Add 'dark' variant to textColor
    },
  },
  plugins: [],
};
