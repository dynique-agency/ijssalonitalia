/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A961',
        'gold-light': '#D4B978',
        'gold-dark': '#B8984F',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

