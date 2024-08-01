/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        content1: "#797979",
        background: "#F7F7F7",
        low: "#0ECC5A",
        medium: "#FFA235",
        urgent: "#FF6B6B",
      },
    },
  },
  plugins: [],
};
