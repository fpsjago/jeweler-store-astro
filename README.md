# AURELIAN — Premium Jewelry Store Template

A beautifully crafted Astro template for luxury jewelry stores. Features elegant design, dark/light theme switching, product filtering, and e-commerce integration placeholders.

![Astro](https://img.shields.io/badge/Astro-4.x-purple) ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue) ![License](https://img.shields.io/badge/License-Commercial-gold)

## Features

- **🎨 Light & Dark Theme** — Automatic detection + manual toggle with localStorage persistence
- **📱 Mobile-First Design** — Fully responsive from 320px to 4K
- **⚡ Performance First** — Static output, lazy-loaded images, minimal JS (~0.5KB)
- **🏗️ Modular Architecture** — Clean component structure, easy to customize
- **🔍 Product Filtering** — Client-side category filtering on collections page
- **📦 12 Mock Products** — Rings, necklaces, earrings, bracelets, watches
- **🛒 E-Commerce Ready** — Snipcart/Shopify/Stripe integration placeholders
- **♿ Accessible** — Semantic HTML, ARIA labels, keyboard navigation

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro         # Sticky nav, theme toggle, mobile menu
│   ├── Footer.astro         # Site footer with links
│   ├── Hero.astro           # Landing page hero section
│   ├── Categories.astro     # Category browse cards
│   ├── FeaturedProducts.astro # Featured products grid
│   ├── ProductCard.astro    # Reusable product card
│   └── Newsletter.astro     # Email signup form
├── data/
│   ├── products.ts          # Product data, types, filtering, formatting
│   └── store.ts             # Store config (name, contact, e-commerce)
├── layouts/
│   └── Base.astro           # HTML shell, head, header/footer
├── pages/
│   ├── index.astro          # Homepage
│   ├── collections.astro    # All products with filtering
│   ├── about.astro          # About / Our Story
│   ├── contact.astro        # Contact form
│   └── product/[slug].astro # Product detail pages (SSG)
└── styles/
    └── global.css           # CSS custom properties, reset, utilities
```

## Customization

### Store Info
Edit `src/data/store.ts` to change store name, contact details, and e-commerce provider.

### Products
Edit `src/data/products.ts` to add/modify products. Each product needs:
- `id`, `name`, `slug` (URL-safe)
- `price`, `category`, `metal`
- `images` array (replace placeholder URLs with your images)

### Theme Colors
Edit CSS custom properties in `src/styles/global.css`:
- `--color-accent` — Primary gold tone
- Light theme: `:root` block
- Dark theme: `[data-theme="dark"]` block

### Adding E-Commerce
1. Set provider in `store.ts` (`snipcart`, `shopify`, or `stripe`)
2. Add your API key
3. Set `enabled: true`
4. Add the provider's script tag in `Base.astro` head
5. Update the "Add to Cart" button in `product/[slug].astro`

## Tech Stack

- **Astro 4** — Static site generator
- **TypeScript** — Strict mode
- **Scoped CSS** — Component-level styles (no CSS modules needed with Astro scoping)
- **Zero frameworks** — No React/Vue/Svelte (pure Astro components)

## Performance

- **0 JS frameworks** shipped to client
- **~0.5KB** total client JS (theme toggle + filters)
- **Static HTML** — Every page pre-rendered at build time
- **Lazy loading** — All product images use `loading="lazy"`

## License

Commercial template. See LICENSE file for terms.
