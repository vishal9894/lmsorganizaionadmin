import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/organizations': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/roles': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/database': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
    historyApiFallback: true,
  },
})
