/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-dark': '#1E1E1E',
      'secondary-dark': '#9B9B9B',
      'tertiary-dark': '#505050',
      pinkish: '#F7F5FF',
      primary: '#892CDC',
      white: '#FFFFFF',
      yellow: '#DE9B35',
      black: '#000000',
      red: '#DE0000',
      green: '#39FF13',
    },
  },
  plugins: [],
}
