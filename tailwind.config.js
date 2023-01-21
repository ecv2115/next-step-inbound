/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#252E37',
        'navy-medium': '#4E6174',
        'grayscale-black': '#222222',
        'grayscale-charcoal': '#373737',
      },
      fontFamily: {
        sans: ['var(--chivo-font)', ...fontFamily.sans],
        serif: ['var(--chivo-font)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
