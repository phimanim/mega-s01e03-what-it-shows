import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      layout: {
        runbook: join(root, 'src/lib/layouts/runbook.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter({
      pages: 'desk-view',
      assets: 'desk-view',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    alias: {
      '#lib': './src/lib',
      '#lib/*': './src/lib/*'
    }
  }
};

export default config;
