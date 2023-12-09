/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        default: 'url(./img/arrow.png), default',
        pointer: 'url(./img/jet.jpeg), pointer',
      },
    },
  },
  plugins: [],
}

