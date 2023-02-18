/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bumped: "linear-gradient(145deg, #f2f8ff, #cbd1d8)",
      },
      boxShadow: {
        pressed: "inset 2px 2px 6px #c0c5cc, inset -2px -2px 6px #ffffff",
        bumped: "2px 2px 6px #c0c5cc, -2px -2px 6px #ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
