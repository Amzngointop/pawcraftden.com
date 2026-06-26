# PawCraftDen

Dog care & training essentials affiliate site. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev      # local dev server, http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```
data/               # all editorial + product data (the "CMS")
  site.ts           # site config, nav, affiliate tag, email
  products.ts        # 54 products
  articles.ts        # 9 best-pick article configs (metadata only)
  guides.ts           # 6 training guide configs (metadata only)
  articleContent/     # long-form body content per best-pick article (intro, buying guide, FAQ, comparison rows)
  guideContent/        # long-form body content per training guide

app/                 # routes (App Router)
components/          # shared UI components
```

## Editing Products

Edit `data/products.ts`. Each product has an `id`, `articleSlug` (which best-pick article it belongs to), `rank` (1–6, display order), pricing-free editorial fields (`badge`, `summary`, `pros`, `cons`, `bestFor`, `howToUse`), and three 0–100 scores (`comfortScore`, `buildScore`, `valueScore`) used by `BreedFitScoreBar`. Amazon URLs are listed in `urlBySlugRank` and automatically get the affiliate tag appended via `withAffiliateTag()`.

To change the affiliate tag, edit `affiliateTag` in `data/site.ts`.

## Adding/Editing a Best-Pick Article

1. Add a config entry to `data/articles.ts` (slug, title, category, etc).
2. Add 6 products to `data/products.ts` with `articleSlug` set to the new slug.
3. Create `data/articleContent/<slug>.tsx` exporting `content: ArticleBody` (see `data/articleContent/types.ts`). Include: `intro`, `buyingGuide` (2000+ words combined, with at least 2 outbound authoritative links and 2 callout boxes), `faqItems`, `comparisonRows` (one per product), and `relatedSlugs`.
4. Register the new file in `data/articleContent/index.ts`.

The page itself (`app/best/[slug]/page.tsx`) is fully generic — no per-article code is required beyond the content file.

## Adding/Editing a Training Guide

Same pattern: add to `data/guides.ts`, create `data/guideContent/<slug>.tsx` exporting `content: GuideBody`, and register it in `data/guideContent/index.ts`. `app/training-guides/[slug]/page.tsx` renders it generically.

## Design System

Colors, type, and component styles are defined in `tailwind.config.ts` (palette) and `app/globals.css` (animations). Do not introduce a dark mode toggle — the site uses a single light theme (`bg-bg` `#FAFAF7`) throughout. See `CLAUDE.md` for the full content/design ruleset.

## Deployment (VPS + PM2 + Nginx)

```bash
npm install
npm run build
pm2 start npm --name pawcraftden -- start
pm2 save
```

Nginx reverse proxy example:

```nginx
server {
    listen 80;
    server_name pawcraftden.com www.pawcraftden.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Point DNS at the VPS, issue a TLS cert (e.g. via certbot), and reload Nginx.
