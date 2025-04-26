/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['"Playfair Display SC"', 'serif'],

      },
            
          extend: {
      keyframes: {
        slideFade: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideFade: 'slideFade 0.6s ease-out',
      },
    },



    },
  },
  plugins: [],
}



