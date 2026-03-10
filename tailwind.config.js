/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0D0F1A',
        'dark-navy-secondary': '#111320',
        'gold-primary': '#FACC15',
        'gold-secondary': '#EAB308',
        'gold-dark': '#CA8A04',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
