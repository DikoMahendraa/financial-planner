/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      'aero-blue': '#CEF1E5',
      'forest-green': '#51AA77',
      'majorelle-blue': '#5C42E2',
      'earth-yellow': '#E8AB63',
      'mid-blue-purple': '#8A6DC8',
      'vampire-black': '#070807',
      'main-white': '#FFFFFF'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
