/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: { 
      'sm': '640px',
      'md': '991px',
      'semiMd':'991px'
      }, 
    fontFamily: {
      arima: [ 'Arima Madurai', 'cursive'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        'blueMain': '#4ab8de',
        'redMain': '#f14859',
        'blueSec': '#91bdc5',
        'graymain': '#6b809b',
        'navBlue': '#1a1a37',
        'bluetrans': 'rgba(74, 184, 222, 1)'
      },
    },
  },
  plugins: [],
}
