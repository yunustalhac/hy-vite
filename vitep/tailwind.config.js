module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: '768px',
        laptop: {'min': '768px', 'max': '1024px'},
        desktop: '1280px'
      }
    }
  },
  variants: {
    extend: {
      fontFamily: {
        'custom': ['Quicksand', 'sans-serif'],
      },
    }
  },
  plugins: []
}
