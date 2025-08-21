/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Determine base path based on environment
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV || process.env.VERCEL_URL
const base = isVercel ? '/' : '/NCRSTWEBSITE-/'

console.log('Environment check:', { 
  VERCEL: process.env.VERCEL, 
  VERCEL_ENV: process.env.VERCEL_ENV, 
  VERCEL_URL: process.env.VERCEL_URL,
  isVercel,
  base 
})

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