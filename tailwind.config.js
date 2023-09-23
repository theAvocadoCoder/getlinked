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
        "unica-one": ['"Unica One"', ...defaultTheme.fontFamily.sans],
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
        },
      },
      backgroundImage: {
        "gradient-gl": "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
    },
  },
  plugins: [],
}

