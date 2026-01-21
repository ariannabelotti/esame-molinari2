import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ["@vue-leaflet/vue-leaflet"]
  },
  ssr: {
    noExternal: ["@vue-leaflet/vue-leaflet"]
  },
  base: '/',
})

