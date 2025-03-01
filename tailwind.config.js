/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'Neutral-black': '#0E1422',
        'neutral-white': '#F6F6F6',
        'gray' : '#717171',
        'neutral-gray' : '#5C5F6A',
        'text-gray': '#878A92',
        'grey' : '#71747E',
        'hr-grey': '#E9E9EB',
        'box-grey': '#E6E7E8',
        'green': '#98BE9E',
        'blue' : '#A8B2FF',
        'light-gray': '#F6F6F6',
        'input-text': '#474B57',
        'greyborder': '#B6B7BC',
        'success' : '#D5E5D7',
        'fail' : '#FBD9D0',
        'semantic-blue': '#A3BEF8',
        'semantic-yellow': '#FFD58A',
        'semantic-green': '#83B18B',
        'lightborder': '#E6E7E8',
      },
     
    },
  },
  plugins: [],
}

