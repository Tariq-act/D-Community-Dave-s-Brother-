/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {

        customBlack: '#3a3541de',
        customPurple: '#37366fb3',
        customDarkPurple: '#37366F',
        customGray: "#9CA0AC",
        customBlue: "#0066FF",
        heroBg: "#f6f5f6",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
