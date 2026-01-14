/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter','sans-serif']
      },
      colors: {
        'custom-gray': '#F1F1EF99',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #F1F1EF8d 25%, #FFFFFF 55%)',
      },
    }
  },
  plugins: [],
}

