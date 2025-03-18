import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jawl/',
  plugins: [react()],
  server: {
    port: 4509,
    open: true,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
})
