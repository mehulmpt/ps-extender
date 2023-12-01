import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { cpSync, rmdirSync } from 'node:fs'

// export default defineConfig({
//   build: {
//     sourcemap: 'inline',
//     lib: {
//       entry: resolve(__dirname, 'src/content.ts'),
//       fileName: 'content',
//       formats: ['es']
//     },
//   },
// })

export default defineConfig(({ mode }) => {
  const specificDir = mode === 'chrome' ? "public/chrome" : "public/firefox"
  rmdirSync(resolve(__dirname, 'dist'), { recursive: true })
  cpSync(resolve(__dirname, specificDir, 'manifest.json'), resolve(__dirname, 'dist', 'manifest.json'), { recursive: true })
  return {
    publicDir: 'public/shared',
    build: {
      emptyOutDir: false,
      sourcemap: 'inline',
      lib: {
        entry: resolve(__dirname, 'src/content.ts'),
        fileName: 'content',
        formats: ['es']
      },
    },
  }
  if (mode === "chrome") {
  } else if (mode === "firefox") {
    return {
      publicDir: 'public/shared',

      build: {
        sourcemap: 'inline',
        assetsDir: 'public/firefox',
        assetsInclude: ['manifest.json'],
        rollupOptions: {
          input: { content: resolve(__dirname, 'src/content.ts') },
          output: {
            entryFileNames: '[name].js',
            dir: 'dist_firefox',
            format: 'es'
          },
        }
      }
    }
  }
})