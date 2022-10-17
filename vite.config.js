import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import sveltePreProcess from 'svelte-preprocess'
import postcss from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreProcess()
    })
  ],
  css: {
    postcss
  }
})