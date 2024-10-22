/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./components/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0567ea",
      }
    },
  },
  plugins: [],
}

