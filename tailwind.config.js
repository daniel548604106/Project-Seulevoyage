module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{scss,module.scss}',
  ],
  mode: 'jit',
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: 'var(--main-pink)',
        orange: 'var(--main-orange)',
        green: 'var(--main-green)',
      },
      width: {
        'c-100': '100px',
        'c-150': '150px',
      },
      minWidth: {
        'c-1/3': '33vw',
        'c-2/3': '66vw',
      },
      spacing: {
        'c-100': '100px',
        'c-47%': '47%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
