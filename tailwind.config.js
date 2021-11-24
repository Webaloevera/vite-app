module.exports = {
     purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-green': '#002B32',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
