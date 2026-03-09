/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        forest: 'var(--forest-void)',
        neon: 'var(--neon-pulse)',
        leaf: 'var(--leaf-green)',
        pine: 'var(--tactical-pine)',
        border: 'var(--pine-border)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        module: 'var(--module-bg)',
        spiral: 'var(--spiral-bg)',
        'pine-stroke': 'var(--spiral-stroke)',
        'hero-from': 'var(--hero-from)',
        'hero-to': 'var(--hero-to)',
      },
    },
  },
  plugins: [],
}
