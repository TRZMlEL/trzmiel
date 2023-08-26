/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light': '#FFFBF2',
      'dark': '#1A1100',
      'color': '#FFCA68',
      'gray': '#CCC8C2',
    },
    spacing: {
    ...generateSpacing(40),
    '0.25rem': '0.25rem',
    '0.5rem': '0.5rem',
    '2.5rem': '2.5rem',
    '0rem': '0rem',
    '7.5rem': '7.5rem',
    },
    text: generateText(20), 
    tracking: generateTracking(20), 
    fontFamily: {
      'Lato': 'Lato'
    }
  },
  plugins: [],
}

function generateSpacing(count) {
  const spacing = {};
  for (let i = 1; i <= count; i++) {
    spacing[`${i}rem`] = `${i}rem`;
  }
  return spacing;
}

function generateText(count) {
  const text = {};
  for (let i = 1; i <= count; i++) {
    text[`${i}xl`] = `${i}rem`;
  }
  return text;
}

function generateTracking(count) {
  const spacing = {};
  for (let i = 1; i <= count; i++) {
    spacing[`${i}%`] = `${i}%`;
  }
  return spacing;
}