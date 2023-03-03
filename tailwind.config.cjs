/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3f4452",
        secondary: "#484e5c",
        tertiary: "#0f5d44",
        white: "#dde0e5",
      },
      fontFamily: {
        main: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
