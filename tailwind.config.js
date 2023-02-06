/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': 'Poppins, sans-serif;'
      },
      colors: {
        'color-dark': 'var(--color-dark)',
        'active': 'var(--active)'
      }, 
      backgroundImage:{
        'check': 'linear-gradient()'
      },
      backgroundColor: {
        'dark': 'var(--dark)',
        'item-dark': 'var(--bg-item-dark)'
      },
      letterSpacing: {
        'title': '.7rem'
      }
    },
  },
  plugins: [],
}
