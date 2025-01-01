/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#191423",
        "sky-blue": "#026070",
        "aqua-blue": "#56E3CB"
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px',
      },
    },
  },
  plugins: [],
}