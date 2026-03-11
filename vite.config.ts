import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(),],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
