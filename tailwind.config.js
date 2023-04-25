/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      // Primary

      'bright-blue': 'hsl(220, 98%, 61%)',

      // Light theme

      'very-light-gray': 'hsl(0, 0%, 98%)',
      'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
      'light-grayish-blue': 'hsl(233, 11%, 84%)',
      'dark-grayish-blue': 'hsl(236, 9%, 61%)',
      'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',

      // Dark theme

      'dt-very-dark-blue': 'hsl(235, 21%, 11%)',
      'dt-very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
      'dt-light-grayish-blue': 'hsl(234, 39%, 85%)',
      'dt-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
      'dt-dark-grayish-blue': 'hsl(234, 11%, 52%)',
      'dt-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
      'dt-very-dark-grayish-blue-hover': 'hsl(237, 14%, 26%)',

      // Custom

      'white': '#fff'
    },
    gradientColorStops: {
      'check-bg-from': 'hsl(192, 100%, 67%)',
      'check-bg-to': 'hsl(280, 87%, 65%)'
    },
    fontFamily: {
      'josefin-sans': ['Josefin Sans', 'sans-serif']
    },
    screens: {
      'xs': '376px',
      ...defaultTheme.screens
    },
    extend: {
      screens: {
        '2xl': '1440px'
      },
      backgroundImage: {
        'mobile-light': 'url("./images/bg-mobile-light.jpg")',
        'desktop-light': 'url("./images/bg-desktop-light.jpg")'
      }
    }
  },
  plugins: []
}
