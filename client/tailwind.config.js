/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#00917C",
      },
      white: {
        100: "#FFFBF8"
      },
      dark: {
        100: "#433520",
      }
    },
    fontFamily: {
      "head": ["Plaster", "sans-serif"],
      "body": ["League Spartan", "sans-serif"]
    }
  },
  plugins: [],
}