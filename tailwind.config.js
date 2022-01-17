module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{scss,module.scss}',
  ],
  darkMode: 'media',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: 'var(--main-pink)',
        orange: 'var(--main-orange)',
      },
      width: {
        'c-100': '100px',
        'c-150': '150px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
