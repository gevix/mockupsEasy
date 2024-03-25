/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./mockups/frontend/src/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./templates/frontend/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  daisyui: {
    themes: ["nord"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
