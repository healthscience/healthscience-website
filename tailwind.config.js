/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0a0f0d',
        neon: '#a9ff00',
        leaf: '#22c55e',
        pine: '#2d4635',
        border: '#1a241e',
      },
    },
  },
  plugins: [],
}
