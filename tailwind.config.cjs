/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 2px 5px 2px rgba(0,0,0,0.19)",
      },
      colors: {
        primary: "#232532",
        secondary: "#303646",
        tertiary: " #0d6ca0",
        white: "#dde0e5",
      },
      fontFamily: {
        main: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("postcss-nesting"), require("@tailwindcss/typography")],
};
