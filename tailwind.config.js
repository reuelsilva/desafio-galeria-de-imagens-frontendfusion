/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color: {
          '01': '#FAE3E3',
          '02': '#E60023',
        },
        'modal': 'rgb(0 0 0 / 83%)',
      }
    },
  },
  plugins: [],
}