import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/moviesite/',
  build: {
    outDir: 'moviesite'
  },
  plugins: [react()],
})