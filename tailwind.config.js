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
        "banger": ["Bangers", "system-ui"],
      },
      colors:{
        primary: "#FBA919",
      },
      backgroundImage: {
        'ruins': "url('/assets/destroyed-city.jpg')",
        'headphone': "url('/assets/hero-headphone.png')",
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        updown: 'updown 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

