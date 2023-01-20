/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#252E37'
      },
      fontFamily: {
        'sans': ['var(--chivo-font)', ...fontFamily.sans],
        'serif': ['var(--chivo-font)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}
