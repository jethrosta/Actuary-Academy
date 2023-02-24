/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: "'Inter'",
        roboto: "'Roboto', sans-serif"
      },
      backgroundImage:{
        'wave' :  "url('Background.jpg')"
      }
    },
  },
  plugins: [],
}
