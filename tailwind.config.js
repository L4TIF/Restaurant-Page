/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      dropShadow: {
        '9xl': '0 25px 25px rgb(0,0,0,0.8)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [  ],
}