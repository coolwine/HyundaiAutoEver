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
        primary: '#05141F',
        secondary: '#697077',
        accent: '#E63312',
      },
      fontFamily: {
        sans: ['Kia Signature', 'sans-serif'],
        signature: ['Kia Signature', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 