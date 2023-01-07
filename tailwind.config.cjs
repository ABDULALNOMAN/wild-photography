/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebas": ['Bebas Neue', "cursive"],
        "roboto": ['Roboto', "sans-serif"],
        "fontParagrap":['Roboto Condensed', "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}
