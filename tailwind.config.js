/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#013F63',
        },
        accent: {
          300: '#FFBC82',
          500: '#FE6400',
          600: '#EAA93D',
        },
        neutral: {
          100: '#FFDEC1',
          900: '#2E2E2E',
        },
        'muted-blue': {
          200: '#9AB4BF',
        },
      },
      fontFamily: {
        brand: ['Wonderful Branding', 'cursive'],
        brittany: ['Brittany', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        signatura: ['Signatura Monoline', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        'section': '96px',
        'grid-gutter': '32px',
      },
      borderRadius: {
        'card': '16px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 