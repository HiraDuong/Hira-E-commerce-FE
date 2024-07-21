/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '26': '6.5rem', // Giá trị bạn cần, ví dụ: 6.5rem = 26 x 0.25rem
      },
    },
  },
  plugins: [],
}