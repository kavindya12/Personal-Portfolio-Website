import { copyFileSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const rootDir = dirname(fileURLToPath(import.meta.url))

function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const index = resolve(rootDir, 'dist/index.html')
      const fallback = resolve(rootDir, 'dist/404.html')
      if (existsSync(index)) {
        copyFileSync(index, fallback)
      }
    },
  }
}

export default defineConfig({
  // Use '/' for a custom domain. For a project site, set this to '/repo-name/'.
  base: '/',
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
})
