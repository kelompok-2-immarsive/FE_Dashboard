/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors:{
      'alta-primary' : '#324479',
      'hover-primary' : '#1D4078',
      'grey-default' : '#BABABA',
      'black-default' : '#141414',
      'alta-secondary' : '#F47522',
      'border-primary' : '#E0E0E0',
      'hover-secondary' : '#E3742B',
      'bg-primary' : '#F8F9FD',
      'white' : '#FFFFFF'
    }
  },
  plugins: [require('daisyui')],
}
