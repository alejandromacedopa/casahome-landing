// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static', // sitio estático, perfecto para Vercel
})
