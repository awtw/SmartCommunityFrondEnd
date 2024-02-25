import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SmartCommunityFrondEnd/',   
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7048/api/',
        changeOrigin: true,
        secure: true,
      },
    },
  }
})
