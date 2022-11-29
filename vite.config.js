import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: 'inline',
    lib: {
      entry: resolve(__dirname, 'src/content.ts'),
      fileName: 'content',
      formats: ['es']
    },
  },
})