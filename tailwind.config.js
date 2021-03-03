const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      keyframes: true,
      // considers dynamic class bindings when purging unused classes
      // credit: https://github.com/matebek https://dev.to/matebek
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        gray: colors.blueGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        'huvison-primary': '#14213D',
        'huvison-secondary': '#FCA311',
      },
    },
    borderColors: theme => ({
        ...theme('colors'),
        'huvison-primary': '#14213D',
        'huvison-secondary': '#FCA311',
      }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'huvison-primary': '#14213D',
      'huvison-secondary': '#FCA311',
    }),
  },
  variants: {
    extend: {
      boxSizing: ['hover', 'focus'],
    },
  },
  plugins: [],
};
