/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'var(--color-primary)',
        secondary: "#eef2ff",
      },
    },
  },
  plugins: [],
}