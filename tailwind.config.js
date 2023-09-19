/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        "clash-display": ['"Clash Display"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        indigo: {
          gl: "#150E28",
        },
        orchid: {
          gl: "#D434FE",
        },
        lavendar: {
          gl: "#903AFF",
        }
      },
    },
  },
  plugins: [],
}

