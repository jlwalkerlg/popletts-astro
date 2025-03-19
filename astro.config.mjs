// @ts-check
import 'dotenv/config'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_URL,
  trailingSlash: 'ignore',
  devToolbar: {
    enabled: false,
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
})
