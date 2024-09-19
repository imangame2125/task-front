/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-navbar-header': 'linear-gradient(90deg, rgba(204, 204, 204, 0) 0%, rgba(190, 190, 190, 0.2) 100%, rgba(173, 173, 173, 0.2) 100%, rgba(173, 173, 173, 0.2) 100%)',
      },
      backgroundIcons:{
        '#242424'
      }
    },
  },
  plugins: [],
};
