/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000', 
        'white': '#FFFFFF',
        'gray': '#F4F4F4',
        'primary': '#ED3F55',
      },
    },
  },
  plugins: [],
}
