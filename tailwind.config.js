/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'text': '#EBF1E9',
      'background': '#121910',
      'primary': '#B9D4BA',
      'secondary': '#101910',
      'accent': '#5D986B',
    },
    fontSize: {
      '1xl': '16px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '96px',
      '5xl': '115px',
    },
    padding: {
      'webborder': '3vmin',
    },
    margin: {
      'webborder': '3vmin',
    },
    width: {
      'mojezdjecie': '60vmin',
    }
  },
  plugins: [],
}