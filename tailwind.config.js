/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-left': 'moveLeft 1s linear infinite',
        'move-left': 'moveLeft 30s linear infinite',
        'move-right': 'moveRight 30s linear infinite'
      },
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-60%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    plugins: [],
  }
}
