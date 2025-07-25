/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        sand: {
          100: '#fef9ec',
          200: '#fcecc5',
          300: '#f9df9e',
        },
        ocean: {
          500: '#0ea5e9',
          600: '#0284c7',
        },
        coral: {
          500: '#fb7185',
        },
        teal: {
          400: '#2dd4bf',
        },
        emerald: {
          400: '#34d399',
        }
      }
    },
  },
  plugins: [],
}