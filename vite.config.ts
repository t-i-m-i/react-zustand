import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    },
    // modules: {
    //   generateScopedName: '[name]__[local]___[hash:base64:5]',
    // }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
})
