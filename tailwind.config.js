/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Courgette", "sans-serif"],
        mitr: ["Mitr", "sans-serif"],
      },
    },
  },
  plugins: [],
};


