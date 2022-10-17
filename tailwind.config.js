import tailwindScrollbarHide from 'tailwind-scrollbar-hide'

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [tailwindScrollbarHide],
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'],
}