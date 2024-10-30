/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        branco: '#EEEEEE',
        roxoClaro: '#D4BEE4',
        roxoMedio: '#9B7EBD',
        roxoEscuro: '#3B1E54',
      },
    },
  },
  plugins: [],
};
