/** @type {import('tailwindcss').Config} */

import tailwind from 'tailwindcss/defaultTheme';

const colors = {
  ...tailwind.colors,
  ...{
    'aero-blue': '#CEF1E5',
    'forest-green': '#51AA77',
    'majorelle-blue': '#5C42E2',
    'earth-yellow': '#E8AB63',
    'mid-blue-purple': '#8A6DC8',
    'vampire-black': '#070807',
    'main-white': '#FFFFFF',
    'spanish-gray': '#989898',
    'gray-platinum': '#E7E7E7',
    yellow: '#F9EC82'
  }
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: colors
    }
  },
  plugins: []
};
