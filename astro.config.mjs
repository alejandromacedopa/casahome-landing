import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/static'
import vercelAnalytics from '@vercel/analytics/astro'

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    vercelAnalytics(), 
  ],
  adapter: vercel(),
})
