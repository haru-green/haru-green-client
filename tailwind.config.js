const colors = {
  green: '#34AA70',
  white: '#FFFFFF',
  score: {
    zero: '#000000',
    one: '#F15252',
    two: '#FFC700',
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    colors,
    fontFamily: {
      jalnan: ['var(--font-jalnan)'],
    }
  },
  plugins: [],
}

