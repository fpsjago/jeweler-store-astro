# Deployment

This template builds to fully static HTML. Any static host works. The one thing
that will bite you is the `base` subpath — read section 1 before anything else.

---

## 0. Build

```bash
npm install
npm run build     # runs `astro check` then `astro build`
npm run preview   # serve dist/ locally, exactly as deployed
```

Output: **`dist/`** — 19 HTML pages plus optimized WebP in `dist/_astro/`.
Roughly 1.6 MB total, no server runtime required.

`npm run build` fails on any TypeScript error because `astro check` runs first.
Keep it that way; do not weaken the script to bypass a type error.

---

## 1. The `base` subpath — read this first

`astro.config.mjs` ships configured for a **GitHub Pages project site**:

```js
export default defineConfig({
  site: 'https://fpsjago.github.io',
  base: '/jeweler-store-astro/',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
```

`base` prefixes every asset and internal link. It is correct for
`user.github.io/repo-name/` and **wrong everywhere else**.

**Deploying to your own domain, Vercel, Netlify, or Cloudflare Pages?**
Change both fields:

```js
export default defineConfig({
  site: 'https://your-jewelry-brand.com',   // your real domain, no trailing slash
  base: '/',                                // or delete the line entirely
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
```

**Symptom of getting this wrong:** the homepage renders unstyled and every link
404s, or every link gains a doubled `/jeweler-store-astro/jeweler-store-astro/`
prefix. It looks fine in `npm run dev` and only breaks once deployed — always
confirm with `npm run preview`, which honours `base`.

`site` is separate from `base`: it is the absolute origin used for canonical
URLs. Set it to your real domain even when `base` is `/`.

Every internal link in the template already reads `import.meta.env.BASE_URL`, so
changing the config is the *only* edit required. Do not hardcode `href="/"`
anywhere — see `CUSTOMIZATION.md` §7.

---

## 2. Vercel

Set `base: '/'` and your real `site` first.

**Dashboard:** import the repo. Vercel detects Astro and fills in:

| Setting | Value |
|---|---|
| Framework Preset | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Node version: set **22.x** under *Settings → General → Node.js Version*. Astro 7 needs 22.22 or newer; the current 22.x release satisfies it.

**CLI:**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

No `vercel.json` is needed. Astro's static output requires no adapter.

---

## 3. Netlify

Set `base: '/'` and your real `site` first. Then commit a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

Or configure the same two values in the dashboard under *Site settings → Build
& deploy*.

Netlify Forms works with this template's contact page with no backend: add
`netlify` and `netlify-honeypot="bot-field"` to the `<form>` in
`src/pages/contact/index.astro`, plus a hidden `bot-field` input.

---

## 4. GitHub Pages

This is what the repo is preconfigured for, and `.github/workflows/deploy.yml`
is already committed:

- Triggers on push to `main` (and manual dispatch)
- Node 22, `npm ci`, `npm run build`
- Uploads `dist/` via `actions/upload-pages-artifact@v3`
- Deploys with `actions/deploy-pages@v4`

**To use it:**

1. In *Settings → Pages*, set **Source: GitHub Actions** (not "Deploy from a
   branch"). The workflow fails without this.
2. Update `astro.config.mjs`:
   ```js
   site: 'https://YOUR-USERNAME.github.io',
   base: '/YOUR-REPO-NAME/',   // must match the repo name exactly, with both slashes
   ```
3. Push to `main`.

`base` must match the repository name character for character. A mismatch is the
single most common failure here, and it produces a fully broken site rather than
an error.

**User/organisation site** (`username.github.io` repo): use `base: '/'` and
`site: 'https://username.github.io'`.

**Custom domain on Pages:** set `base: '/'`, set `site` to your domain, and add
`public/CNAME` containing just the hostname.

> The workflow uses `npm ci`, which requires `package-lock.json` — it is
> committed. If you switch to pnpm or bun, update the workflow's install and
> lockfile steps to match, or `npm ci` will fail on a missing lockfile.

**`robots.txt` on a project site.** Files in `public/` land at the root of
`dist/`, which on a GitHub Pages project site is served at
`username.github.io/repo-name/robots.txt`. Crawlers only read
`username.github.io/robots.txt` — the account root, which this repo does not
control. So `public/robots.txt` is **inert on a Pages project site**. It works
normally on Vercel, Netlify, Cloudflare Pages and any custom domain, where the
site is served from the origin root. `llms.txt` has the same constraint.

---

## 5. Cloudflare Pages

Set `base: '/'` and your real `site`, then:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `22` |

---

## 6. Any other static host

`dist/` is plain HTML, CSS, JS and images. Upload it to S3 + CloudFront, nginx,
Apache, or shared hosting. Two requirements:

- Serve `index.html` for directory requests (`/collections/` → `/collections/index.html`).
  Astro generates directory-style URLs, so a host without this rewrites 404s.
- Serve `.webp` with `Content-Type: image/webp`. Most hosts do; some old Apache
  configs do not, and images silently fail to render.

---

## 7. Pre-deploy checklist

- [ ] `site` and `base` in `astro.config.mjs` match the target host
- [ ] `npm run build` exits 0 with **0 errors, 0 warnings, 0 hints**
- [ ] `npm run preview` — click every nav link and one product page
- [ ] Brand name replaced everywhere (`grep -rn "MAISON" src`)
- [ ] Footer email and phone replaced; social links added if you want them (`CUSTOMIZATION.md` §7)
- [ ] `public/robots.txt` reviewed — it references `Sitemap:` at your domain
- [ ] `PUBLIC_FORM_ENDPOINT` set so the contact form sends (it is a demo by default)
- [ ] Image licensing confirmed — see `IMAGE-CREDITS.md`

## 8. Lighthouse

Measure the production build through `astro preview`, which serves it under
the configured `base`, so every asset URL resolves the way it will on the host:

```bash
npm run build
npm run preview          # note the port it prints, 4321 unless taken
npx lighthouse http://localhost:4321/jeweler-store-astro/ --view
npx lighthouse http://localhost:4321/jeweler-store-astro/ --preset=desktop --view
```

`lighthouse` is Google's official CLI package. Do not serve `dist/` from a
plain static server at its root while `base` is `/jeweler-store-astro/`: every
asset then points one directory deeper than it is served, nothing loads, and
the score is meaningless. After deploying, point the same command at your live
URL instead.

The shipped build scores 100 in all four categories on desktop and mobile on
every route when measured this way.
