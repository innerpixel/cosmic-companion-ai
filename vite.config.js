import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'CosmicCompanionAI',
      formats: ['es', 'umd'],
      fileName: (format) => `cosmic-companion-ai.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
