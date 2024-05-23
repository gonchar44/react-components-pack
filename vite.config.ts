import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { extname, relative, resolve } from 'path'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'lib/assets'),
      '@components': resolve(__dirname, 'lib/components'),
      '@common': resolve(__dirname, 'lib/components/common'),
      '@contexts': resolve(__dirname, 'lib/contexts'),
      '@types': resolve(__dirname, 'lib/types'),
      '@utils': resolve(__dirname, 'lib/utils')
    }
  },
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-router-dom'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: [
              'lib/types/declarations.d.ts',
              'lib/**/*.stories.tsx',
              'lib/utils/**'
            ]
          })
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url))
          ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  }
})
