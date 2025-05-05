/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',  // Light blue
        secondary: '#9ca3af' // Grey
      },
      backgroundImage: {
        carwash: "url('/src/assets/Carwash.jpeg')"
      }
    },
  },
  plugins: [],
};
