import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dealsanddiscounts-poject.onrender.com', // Your backend server URL
        changeOrigin: true,
      },
    },
  },
})