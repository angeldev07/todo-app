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
        'active': 'var(--active)',
        'check2': 'linear-gradient(0deg, #57ddff 0%, #c058f3 100%);',
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
      },
      boxShadow: {
        '3xl': '0px 18px 30px 5px rgba(0 0 0 /.75);'
      }
    },
  },
  plugins: [],
}
