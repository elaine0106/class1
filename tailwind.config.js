const plugin = require('tailwindcss/plugin')

module.exports = {

  content: [
    './src/**/*.{html,js}',
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './src/layouts/**/*.{html,js}',
    './src/index.html',
  ],
  // --
  
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }){
      const buttons = {
        '.btn-red': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          }
        }
      }
      
      addComponents(buttons)
    })
  ],
}
