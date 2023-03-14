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
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': '0px 5px 30px rgba(0, 0, 0, 0.2)'
      },
      colors:{
        'main_blue': '#0066CC',
        'sec_blue' : '#0D1C9F'
      },
      screens:{
        'keci':{'max':'400px'},
      }
    },
  },
  plugins: [],
}
