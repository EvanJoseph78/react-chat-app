/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': {
          '50': '#f2f7fd',
          '100': '#e4ecfa',
          '200': '#c2d9f5',
          '300': '#8cb9ed',
          '400': '#4f95e1',
          '500': '#2878cf',
          '600': '#1a5fb4',
          '700': '#164b8e',
          '800': '#164076',
          '900': '#183762',
          '950': '#102341',
        },
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
