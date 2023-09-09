import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@dozerjs/dozer', '@dozerjs/dozer-react'],
  },
  build: {
    commonjsOptions: {
      include: [/@dozerjs\/doze/, /@dozerjs\/dozer-react/, /node_modules/],
    },
  },
})
