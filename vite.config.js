import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend-mentor-todo-app/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js')
    }
  },
  optimizeDeps: {
    include: ['@tailwindConfig']
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
