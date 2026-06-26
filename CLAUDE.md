# CLAUDE.md — PawCraftDen

Guidance for AI agents (and humans) maintaining this repository.

## Stack & Constraints

- Next.js **16.2.x** App Router, React **19**, TypeScript, Tailwind CSS.
- Deploys to a VPS via `npm run build` + `npm run start`, behind PM2 + Nginx — **not** Vercel-only features (no Vercel KV/Edge Config/ISR-via-dashboard assumptions).
- No backend, no database, no CMS, no auth, no admin panel, no `localStorage`/`sessionStorage`. All content lives in `/data` as TypeScript.
- Plain `<img>` only for Amazon CDN images (`m.media-amazon.com`) — never `next/image` for those. `next/image` is fine for Unsplash guide covers if you choose to add it, but the current guide pages also use plain `<img>` for consistency; keep it that way unless asked to optimize.

## Content Rules (enforce on every edit)

- **No prices, no star ratings.** `BreedFitScoreBar` (Comfort/Durability/Value, 0–100) is the only numeric scoring allowed — it's editorial, not a customer rating.
- **No personal testing claims** — never write "we tested/tried/used." Frame everything as independent research and cross-referenced guidance (ASPCA/AKC/AVMA).
- **No fake persons with bios/photos.** The three "From Our Editors" quotes on the homepage are the only named voices on the site — don't invent more, and don't add headshots.
- Every page with affiliate links needs a visible affiliate disclosure block.
- Every best-pick article needs 2+ outbound links to ASPCA/AKC/AVMA/.gov/.edu, naturally embedded with descriptive anchor text (not bare URLs).
- Minimum word counts are enforced and load-bearing for SEO: homepage 3500+, each best-pick article 2000–2500 (in `intro` + `buyingGuide` combined), each guide 2000+ (in `body`).
- Keep "(2026)" in article/guide titles and "© 2026 PawCraftDen" in the footer until the site does a real annual refresh — then bump every instance together, including `Updated 2026` meta lines.

## Adding Content

See `README.md` for the step-by-step for adding articles, guides, and products. The key invariant: `app/best/[slug]/page.tsx` and `app/training-guides/[slug]/page.tsx` are **generic templates** — never add per-slug conditionals to them. All per-article/per-guide content belongs in `data/articleContent/<slug>.tsx` / `data/guideContent/<slug>.tsx`.

`params` in dynamic route handlers (`generateMetadata`, page components) is a **Promise** in this Next version — always `await params` before reading `.slug`. Forgetting this silently 404s the page (it did, once, during initial build — don't reintroduce it).

## Design System — Do Not Drift

- Single light theme. `bg-bg` (`#FAFAF7`) everywhere. **Never add a dark/light toggle.**
- Palette, fonts (Syne for headings, DM Sans for body), and pill/leaf-cut button shapes are defined in `tailwind.config.ts` + component files (`CTAButton.tsx` has the three button variants — primary pill, secondary outline pill, amazon leaf-cut). Reuse these instead of inlining new button styles.
- Grids are spec'd exactly: category cards 3×3 desktop, guide cards 3×2 desktop, product grids 4-col desktop — collapsing per breakpoint as already implemented. Don't "improve" these into different column counts.
- Both article-page sidebars (`ArticleSidebar`, `RelatedSidebar`) are hidden on mobile by design — that's intentional, not a bug.

## Before Committing

Run `npm run build` and confirm zero TypeScript/build errors before treating any change as done. The project does not currently run ESLint as part of `next build` (Next 16 split lint out of the build step) — if you add `npm run lint` back into CI, note that `eslint-config-next`'s flat-config compat layer has a known circular-JSON crash with this dependency combination; investigate before assuming it's a real issue with new code.
