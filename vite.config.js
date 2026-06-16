import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // esbuild-мініфікатор CSS схлопує пару backdrop-filter / -webkit-backdrop-filter
    // і лишає тільки -webkit-, через що ефект розмиття зникає у Firefox (він знає
    // лише стандартну властивість). Вимикаємо мініфікацію CSS, щоб лишались обидві.
    // JS-мініфікація працює як зазвичай.
    cssMinify: false,
  },
})
