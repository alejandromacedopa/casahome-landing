import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/static'

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: true }),
  ],
  adapter: vercel(),
})
