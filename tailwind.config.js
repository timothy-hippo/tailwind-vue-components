/** @type {import('tailwindcss').Config} */
const flagger = require('tailwind-flagger')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {}
  },
  plugins: [flagger]
}
