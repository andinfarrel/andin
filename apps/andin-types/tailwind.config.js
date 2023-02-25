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
      animation: {
        blob: "blob 6s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "trablsate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
