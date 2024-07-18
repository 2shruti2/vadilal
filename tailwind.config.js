/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "paytone": ["Paytone One", "sans-serif"],
      },
      colors:{
        primary: "#FBA919",
      },
      backgroundImage: {
        'ruins': "url('/assets/destroyed-city.jpg')",
        'headphone': "url('/assets/hero-headphone.png')",
      }
    },
  },
  plugins: [],
}

