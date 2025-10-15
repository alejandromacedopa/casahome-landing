import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/static'
export default defineConfig({
  output: 'static',
  integrations: [],
  adapter: vercel(),
})