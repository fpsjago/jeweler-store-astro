import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://fpsjago.github.io',
  base: '/jeweler-store-astro/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  // Self-hosted variable fonts (SIL OFL 1.1, licenses next to the files).
  // Astro emits the @font-face rules, a preload for the display face and a
  // metric-matched fallback so the swap does not shift the layout.
  fonts: [
    {
      name: 'Playfair Display',
      cssVariable: '--font-display',
      provider: fontProviders.local(),
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            weight: '400 900',
            style: 'normal',
            display: 'swap',
            src: ['./src/assets/fonts/PlayfairDisplay-latin-wght.woff2'],
          },
        ],
      },
    },
    {
      name: 'Cormorant Garamond',
      cssVariable: '--font-body',
      provider: fontProviders.local(),
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            weight: '300 700',
            style: 'normal',
            display: 'swap',
            src: ['./src/assets/fonts/CormorantGaramond-latin-wght.woff2'],
          },
        ],
      },
    },
  ],
});
