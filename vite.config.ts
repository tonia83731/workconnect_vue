import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    // proxy: {
    //   '/api/*': {
    //     target: '',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    //   '/api/schedule/*': {
    //     target: '',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
