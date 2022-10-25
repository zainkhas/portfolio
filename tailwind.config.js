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
        title: "#3F3D56",
        primary: "#3F3D56",
        secondary: "#6D6B6B",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        11: "2.4rem",
      },
    },
  },
  plugins: [],
};
