/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a1e4c', // Deeper navy blue for better contrast
          light: '#2c407c',
          dark: '#091638',
        },
        secondary: {
          DEFAULT: '#6d7b97', // Gray-blue for text
          light: '#9eadc3',
          dark: '#53647e',
        },
        accent: {
          DEFAULT: '#d95c6c', // Red accent for highlights
        },
        light: '#f5f6f9', // Light background
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'pricing': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
