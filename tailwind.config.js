/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {
      colors: {
        'primary-green': '#00ff88',
        'dark-green': '#00cc6a',
        'bg-dark': '#0a0a0a',
        'bg-light': '#f5f5dc',
        'text-dark': '#ffffff',
        'text-light': '#1a1a1a',
        'card-light': '#faf8f3',
      },
      keyframes : {
        blob : {
           "0%" : {transform  : "scale(1)" } , 
            "33%" : { transform : "scale(1.2)"} , 
            "66%" : {transform  : "scale(0.8)"}  ,
            "100%" : { transfrom : "scale(1)" }
        }
      }  ,
       animation : {
        blob : "blob 10s infinite"
       } ,
        backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 204, 106, 0) 50%), linear-gradient(141.27deg, rgba(0, 255, 136, 0) 50%, rgba(0, 255, 136, 0.15) 100%)',
      }
    },
  },
  plugins: [],
}
