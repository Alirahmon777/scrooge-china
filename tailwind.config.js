/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      base: '300px',
      320: '320px',
      mobile: '425px',
      sm: '640px',
      md: '768px',
      tablet: '820px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
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
      },
    },
  },
  plugins: [],
};
