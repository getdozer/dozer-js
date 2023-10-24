import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@dozerjs/dozer', '@dozerjs/dozer-vue'],
  },
  build: {
    commonjsOptions: {
      include: [/@dozerjs\/dozer/, /@dozerjs\/dozer-vue/, /node_modules/],
    },
  },
})
