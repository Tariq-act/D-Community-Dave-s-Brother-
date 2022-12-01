/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#9CA0AC",
        customBlue: "#0066FF",
        heroBg: "#f6f5f6",
      },
    },
  },
  plugins: [],
};
