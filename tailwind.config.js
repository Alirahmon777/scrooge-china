/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        default: [
          '12px',
          {
            lineHeight: '144%',
            fontFamily: ['SF Pro Display', 'sans-serif'],
          },
        ],
        small: [
          '10px',
          {
            lineHeight: '144%',
            fontFamily: ['SF Pro Display', 'sans-serif'],
          },
        ],
        medium: [
          '11px',
          {
            lineHeight: '144%',
            fontFamily: ['SF Pro Display', 'sans-serif'],
          },
        ],
        big: [
          '14px',
          {
            lineHeight: '144%',
            fontFamily: ['SF Pro Display', 'sans-serif'],
          },
        ],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          default: '1210px',
        },
      },
      colors: {
        success: '#52EA73',
        gray: '#68716C',
        header: '#151716',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        sfPro: ['var(--font-sf-pro)'],
        ttInterfaces: ['var(--font-tt-interfaces)'],
      },
    },
  },
  plugins: [],
};
