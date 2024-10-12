/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
          'header-font' : ['Protest Strike' , 'sans-serif']
        },fontWeight:{
          'fonts-hard' : ['400','700']
        }

    },
  },
  plugins: [],
}