# Customization

Every path below is real and current in this repo. Line references are
approximate — search for the quoted token rather than jumping to a line number.

---

## 1. Colors

All design tokens live in the `<style is:global>` block of
**`src/layouts/BaseLayout.astro`**, inside `:root`:

```css
:root {
  --gold: #C6A87D;      /* ornament: rules, icons, logo mark, text on --black */
  --gold-ink: #856532;  /* gold for TEXT on light grounds (prices, links), 5.0:1 on cream */
  --black: #0A0A0A;     /* ink: body text, footer, primary button */
  --cream: #FAF7F2;     /* page background */
  --surface: #FFFDF8;   /* raised panels: cards, header bands, form */
  --muted: #6F6656;     /* secondary text on light grounds, 5.3:1 on cream */
  --warm-gray: #A39B8B; /* secondary text on --black only, 7.2:1 */
  --hairline: rgba(10, 10, 10, 0.1);
}
```

**Keep text colours at WCAG AA.** Every text token above passes 4.5:1 against
the ground it is meant for. The pale `--gold` is only 2.1:1 on cream, which is
why gold text uses `--gold-ink`. If you change a colour, check it, for example
with the WebAIM contrast checker, against `--cream` and `--surface`.

A few shadows are written as literal warm `rgba(64, 46, 20, …)` values inside
`--shadow-lift` and the mobile menu. Retint them if you move to a cool palette.

```bash
# find every hardcoded colour in the template
grep -rn "rgba(\|#[0-9A-Fa-f]\{6\}" src --include="*.astro"
```

---

## 2. Fonts

Both fonts are **self-hosted** through the Astro Fonts API. The files are in
`src/assets/fonts/` (variable WOFF2, Latin subset, with their OFL licenses) and
are declared in **`astro.config.mjs`** under `fonts`:

```js
{
  name: 'Playfair Display',
  cssVariable: '--font-display',          // h1–h6
  provider: fontProviders.local(),
  fallbacks: ['Georgia', 'serif'],
  options: { variants: [{ weight: '400 900', style: 'normal', display: 'swap',
    src: ['./src/assets/fonts/PlayfairDisplay-latin-wght.woff2'] }] },
},
```

`BaseLayout.astro` renders `<Font cssVariable="--font-display" preload />` and
the same for `--font-body`. Astro writes the `@font-face` rules, preloads the
files and generates a size-adjusted fallback, so the swap from Georgia to the
web font does not shift the layout.

**To swap a font:** drop its `.woff2` into `src/assets/fonts/`, point the `src`
and `name` at it, and keep the `cssVariable`. Or use a hosted provider instead
of `local()`, for example `fontProviders.fontsource()` with just a `name`.

Base font size is `18px` on `html`, with a `@media (max-width: 768px)` block
lower in `BaseLayout.astro` that scales it and the headings down.

---

## 3. Spacing and motion

Also `:root` in `BaseLayout.astro`:

```css
--spacing-xs: 0.5rem;  --spacing-sm: 1rem;   --spacing-md: 2rem;
--spacing-lg: 4rem;    --spacing-xl: 6rem;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.76, 0, 0.24, 1);
--transition: 0.3s var(--ease-out);
```

Section rhythm is driven almost entirely by `--spacing-xl`. Raising it to `8rem`
makes the site read as more expensive; lowering it to `4rem` makes it denser.

**Scroll reveals.** Add `data-reveal` to any block and it rises into view as
you scroll (`data-reveal="late"` starts a little later). This is CSS only
(`animation-timeline: view()`), runs only where the browser supports it, and
is skipped entirely for visitors with `prefers-reduced-motion`. Content is
visible by default, so nothing can get stuck hidden.

**The hero.** Its arrival (line-by-line headline, gold rule, curtain lift) and
its three-depth scroll parallax are in the `<style>` block of
`src/pages/index.astro`, under the "Hero" comments. To calm it down, delete the
`@supports (animation-timeline: scroll())` block (keeps the arrival only), or
the whole `@media (prefers-reduced-motion: no-preference)` block (a still hero).

---

## 4. Brand name

The store is called **MAISON**. It appears in 7 files. Replace all at once:

```bash
grep -rl "MAISON" src | xargs sed -i '' 's/MAISON/YOUR BRAND/g'
```

Then update by hand, because these are not the literal string:

| What | Where |
|---|---|
| Logo mark (the two stacked diamonds SVG) | `src/components/Header.astro`, the `<svg>` inside `.logo` |
| Favicon | `public/favicon.svg` |
| Tagline / default meta description | `src/layouts/BaseLayout.astro` — the `description` prop default |
| Footer blurb, email, phone | `src/components/Footer.astro` |
| Social links (none ship; see §7) | `src/components/Footer.astro` |
| About page copy | `src/pages/about/index.astro` |
| Contact details | `src/pages/contact/index.astro` |

---

## 5. Products

One Markdown file per product in **`src/content/products/`**. The schema is
enforced by Zod in **`src/content.config.ts`** — every field below is required
except the last two:

```yaml
---
name: "Eternal Solitaire"
price: "$12,500"                 # display string, not a number
category: "Engagement Rings"     # must match src/types/index.ts
description: "One or two sentences, used for the meta description too."
materials: ["18K White Gold", "1.5ct Diamond", "Conflict-Free"]
dimensions: "Ring Size 6 (resizable)"
image: "eternal-solitaire.jpg"   # bare filename in src/assets/, named after the slug
featured: true                   # optional, default false — surfaces on the homepage
order: 1                         # optional, default 0 — sort position
---

Markdown body renders on the product detail page. Headings, tables and lists
are all styled.
```

**The filename is the URL slug.** `eternal-solitaire.md` → `/products/eternal-solitaire/`.

**Categories** are a closed union in **`src/types/index.ts`**. Adding a category
means adding it in two places in that one file — the `Category` type and the
`categories` array. The collections filter bar builds itself from that array, so
that is all it takes.

Only 4 products with `featured: true` reach the homepage (lowest `order` wins).

---

## 6. Images

All images live in **`src/assets/`**, *not* `public/`. That is deliberate:
Astro only optimizes what it can see at build time. Files in `public/` ship
as-is at full weight.

**Convention:** a product's photo is named after its slug
(`eternal-solitaire.md` → `src/assets/eternal-solitaire.jpg`). Supply photos at
least 1600 px wide; Astro produces every smaller size.

To add or replace a product photo:

1. Drop the `.jpg` into `src/assets/`. Replacing an existing file with the same
   name needs no other change.
2. For a new file, add one `import` and one line to the `imagesByFile` map in
   **`src/lib/product-images.ts`**. That map is shared by the home page, the
   collections page and the product pages.
3. Point the product's `image:` field at the bare filename.

```ts
import roseGoldCuff from '../assets/rose-gold-cuff.jpg';

const imagesByFile: Record<string, ImageMetadata> = {
  // ...existing entries
  'rose-gold-cuff.jpg': roseGoldCuff,
};
```

The imports are explicit rather than a glob **on purpose**. An
`import.meta.glob` over `src/assets/*.jpg` keeps every source JPEG in the
module graph and copies the unoptimized originals into `dist/`. Explicit
imports let Astro ship only the optimized AVIF and WebP.

If a product's `image:` does not match a key in the map, the build fails with:

```
Product image "whatever.jpg" was not found in src/assets/.
```

That is intentional: a missing image breaks the build instead of shipping a
broken `<img>` you find in production.

**Sizes generated** (AVIF with a WebP fallback, chosen by the browser through
`srcset`/`sizes`):

| Where | File | Widths |
|---|---|---|
| Homepage hero (square) | `src/pages/index.astro` | 480, 720, 960, 1280 |
| Product cards (4:3) | `src/components/ProductCard.astro` | 360, 540, 720 |
| Product detail (4:3) | `src/pages/products/[slug].astro` | 480, 720, 960 |
| About portrait (4:5) | `src/pages/about/index.astro` | 400, 600, 800 |

The hero image is preloaded and requested with high priority because it is the
largest thing on the first screen. If you replace it, keep it roughly square
with the subject near the centre.

The hero and the About photo are **direct imports**, not map lookups:

```ts
import heroImg from '../assets/hero-ring.jpg';            // src/pages/index.astro
import aboutImg from '../../assets/about-showcase.jpg';   // src/pages/about/index.astro
```

Photo credits and the Pexels License terms are in `IMAGE-CREDITS.md`.

---

## 7. Navigation

Links live in `Header.astro` (a `links` array; the current page gets
`aria-current` automatically) and `Footer.astro`. Both build hrefs from
`import.meta.env.BASE_URL`:

```astro
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
<a href={`${base}collections/`}>Collections</a>
```

**Keep that pattern.** A raw `href="/collections/"` breaks every subpath deploy
(GitHub Pages included) and will not show up until you deploy.

---

### Social links

The footer ships without social icons, because placeholder `href="#"` links
are dead ends for visitors and screen readers. To add yours, paste this column
into the `.footer-grid` in `src/components/Footer.astro`, after the Contact
column, and change the grid to four columns
(`grid-template-columns: 2fr 1fr 1fr 1fr;`):

```astro
<div class="footer-section">
  <h2 class="footer-heading">Follow</h2>
  <div class="social-links">
    <a href="https://instagram.com/yourstudio" aria-label="Instagram" target="_blank" rel="noopener">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
        <circle cx="18" cy="6" r="1" fill="currentColor"/>
      </svg>
    </a>
  </div>
</div>
```

and add to the same file's `<style>`:

```css
.social-links { display: flex; gap: var(--spacing-xs); }
.social-links a { display: grid; place-items: center; width: 44px; height: 44px; color: var(--warm-gray); }
.social-links a:hover { color: var(--gold); }
```

Only add a link once you have the real profile URL.

---

## 8. Adding a page

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Journal - MAISON" description="Optional; falls back to the site default.">
  <section class="page-header">
    <div class="container">
      <h1>Journal</h1>
    </div>
  </section>
</BaseLayout>

<style>
  /* scoped to this page — copy .container and .page-header
     from src/pages/about/index.astro to stay consistent */
</style>
```

Then add the link to the `links` array in `Header.astro` and to `Footer.astro`.

---

## 9. Contact form

Out of the box the form in `src/pages/contact/index.astro` is a **demo**: on
submit it says "Demo form: no message was sent" and sends nothing.

To make it send, copy `.env.example` to `.env` and set the endpoint, then
rebuild (the value is read at build time):

```bash
# Formspree: create a form, copy its endpoint
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx

# or Web3Forms: endpoint plus your access key
PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
PUBLIC_FORM_ACCESS_KEY=your-access-key
```

The page then POSTs the form fields to that URL with `Accept: application/json`
and shows a sent or failed message based on the response. Any endpoint that
accepts form data and answers with a 2xx status works, including your own API.
On GitHub Pages, add the same variables to the build step of your workflow.

The product page buttons link to `contact/?piece=<name>&intent=info|viewing`,
which pre-fills the message.

---

## 10. Adding checkout

Nothing is wired: this is a catalogue. Realistic paths:

- *Snipcart / Ecwid*: add their script in `BaseLayout.astro` and put their data
  attributes on the buy button in `products/[slug].astro`. Requires a numeric
  price, so add a `priceValue: z.number()` field to the schema.
- *Shopify Buy Button*: same shape, product IDs live in frontmatter.
- *Stripe Payment Links*: simplest. One link per product in frontmatter, no JS.
