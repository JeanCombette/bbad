/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yel": "#FBB608",
        "yel2": "#FDDD05",
        "txt": "#000000",
        "overlay":"#EDB61B"


      },
      backgroundImage :{
        'bg' : 'linear-gradient(0.25turn, #FBB608, #FDDD05);',
        'bg2' : 'linear-gradient(0.25turn, #016A26, #103D2B);',
        'bg3' : 'linear-gradient(4turn, #FBB608, #FDDD05);',
        'bgw' : "url('./src/assets/wwhite.png')"

      },
      fontFamily: {
        'h1': "Cooper Lt BT Bold",
        'h2': "Helvetica",
        'txt':  ['Montserrat', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}
