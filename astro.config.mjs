import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fpsjago.github.io',
  base: '/jeweler-store-astro/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
  },
});
