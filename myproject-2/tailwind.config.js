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
        "overlay":"#EDB61B",
        "green": "#016A26",
        "green-dark": "#103D2B",
      },
      backgroundImage :{
        'bg' : 'linear-gradient(0.25turn, #FBB608, #FDDD05);',
        'bg2' : 'linear-gradient(1turn, #016A26, #103D2B);',
        'bg3' : 'linear-gradient(4turn, #FBB608, #FDDD05);',
        'bgw' : "url('./src/assets/wwhite.png')",
        'tableau' : "url('./src/assets/tableau.png)",

      },
      fontFamily: {
        'h1': "Cooper Bold BT V1",
        'title': ['Caprasimo', 'serif'],
        'txt':  ['Montserrat', 'sans-serif'],
        "test":"caps"

        
      },

      boxShadow:{
        'left': 'inset 120px 120px 120px -15px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

