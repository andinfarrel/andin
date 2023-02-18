/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bumped: "linear-gradient(145deg, #ffffff, #d9dde0)",
      },
      boxShadow: {
        pressed: "inset 4px 4px 10px #cdd0d4, inset -4px -4px 10px #ffffff",
        bumped: "4px 4px 12px #cdd0d4, -4px -4px 12px #ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
