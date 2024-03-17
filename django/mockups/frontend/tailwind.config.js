/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["nord"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
