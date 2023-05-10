/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      xxs: '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      fontFamily: {
        sans: '"League Spartan"'
      },
      colors: {
        'desaturated-dark-cyan': '#5BA4A4',
        'light-grayish-cyan': '#EFFAFA',
        'dark-grayish-cyan': '#7B8E8E',
        'very-dark-grayish-cyan': '#2C3A3A',
        white: '#FFFFFF'
      }
    }
  },
  plugins: []
};
