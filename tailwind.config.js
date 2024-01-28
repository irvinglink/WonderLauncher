/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'mossGreen': "rgb(144, 169, 85)",
      }
    },
  },
  plugins: [],
}

