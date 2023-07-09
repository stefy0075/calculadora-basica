/** @type {import('tailwindcss').Config} */
export default {
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#455A64',
        secondary: '#2196F3',
        tertiary: '#FFC107',
        quaternary: '#4CAF50',
        quintary: '#050a30',
        sextary: '#2d0085'
      },
    },
  },
  plugins: [],
};

