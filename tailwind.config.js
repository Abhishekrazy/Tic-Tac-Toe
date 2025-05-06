/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-medium': 'float 15s ease-in-out infinite',
        'float-fast': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'pulse-medium': 'pulse 5s ease-in-out infinite',
        'pulse-fast': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(25px, 25px)' },
          '50%': { transform: 'translate(-15px, 10px)' },
          '75%': { transform: 'translate(15px, -25px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        }
      },
    },
  },
  plugins: [],
}
