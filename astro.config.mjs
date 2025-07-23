// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://hasansujon786.github.io',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.png', '**/*.jpg'],
  },
})
