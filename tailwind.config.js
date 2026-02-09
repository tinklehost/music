/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 15s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        'spin-slow': 'spin-slow 30s linear infinite',
        'float': 'floatWord 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(15vw, -10vh) scale(1.1)' },
          '50%': { transform: 'translate(-10vw, 15vh) scale(0.9)' },
          '75%': { transform: 'translate(5vw, -5vh) scale(1.05)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'floatWord': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}
