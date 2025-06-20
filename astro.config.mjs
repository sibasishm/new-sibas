import { defineConfig } from 'astro/config'
import UnoCss from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCss({
      injectReset: true,
    }),
  ],
})
