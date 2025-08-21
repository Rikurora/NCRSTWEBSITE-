/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Force base path for Vercel - always use '/' for Vercel deployments
const base = '/'

console.log('Vite config - using base path:', base)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: '../../',
    sourcemap: true,
    rollupOptions: {
      output: {
        // Add cache busting to file names
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`
      }
    }
  },
  base: base,
}) 