/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
