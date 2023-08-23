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
      'halfprimary': '#B9D4BA50',
      'secondary': '#101910',
      'accent': '#5D986B',
    },
    fontSize: {
      '1xl': '2vmin',
      '2xl': '4vmin',
      '3xl': '6vmin',
      '4xl': '96px',
      '5xl': '15vmin',
    },
    padding: {
      'webborder': '3vmin',
    },
    margin: {
      'webborder': '3vmin',
    },
    width: {
      'mojezdjecie': '60vmin',
      '1/2': '50%',
      'full': '100%',
    }
  },
  plugins: [],
}