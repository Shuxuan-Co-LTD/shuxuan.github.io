import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://shuxuan-co-ltd.github.io',
  base: '/shuxuan.github.io'
});