/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#6749F5',
          green: '#3FE364',
          darkGrey: '#64697F',
          grey: '#C7CDDB',
          lightGrey: '#F5F7FC',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
