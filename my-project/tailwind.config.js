/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chirp':['Chirp'],
      },
      colors:{
        "neutral-1000":"#000000",
        "twitter-blue-default":"#1D9BF0",
        "stroke":"rgba(29, 155, 240, 0.24)",
      }
    },
  },
  plugins: [],
}