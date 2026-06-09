# GRA-Web — Grand River launch site

A coming-soon landing page plus a markdown blog ("News") package, built as a
**static site** (Next.js static export) for **Azure Static Web Apps**.

Modeled on the ForIT client-launch precedents:
- `gna-Website` — the `posts/` markdown blog system, brand-assets layout, SWA config.
- `cay-Website` — centralized, env-driven domain config (every reference via `SITE.url`).

## Stack
- Next.js 14 (Pages Router), `output: 'export'` static export
- Tailwind CSS
- Markdown posts via `gray-matter` + `remark`
- Azure Static Web Apps, deployed by GitHub Actions

## ⚠️ Domain — NOT yet confirmed
Grand River's production domain is a **Namecheap domain that is not yet known**.
**Nothing in this repo hardcodes a domain.** The origin is read from
`NEXT_PUBLIC_SITE_URL` at build time. Absent it, the build:
- falls back to a non-resolving RFC-2606 `.invalid` placeholder,
- marks every page `noindex`,
- writes a crawl-blocking `robots.txt`.

Set `NEXT_PUBLIC_SITE_URL` (a GitHub repo **variable**) and re-deploy once the
domain is confirmed. That is the single blocking input for go-live.

## Develop
```bash
cp .env.example .env.local      # set NEXT_PUBLIC_SITE_URL when known
npm install
npm run dev                     # http://localhost:3007
```

## Build (static export)
```bash
npm run build                   # outputs ./out, then generates robots/sitemap
```

## Content
Add posts as markdown files under `posts/` with frontmatter
(`title`, `date`, `excerpt`, `tags`, `published`). See the starter post.

## Brand
Brand kit pending — see `brand-assets/README.md`. The Tailwind palette is a
neutral placeholder (deliberately **not** ForIT brand colours).

## Secrets
No secrets live in this repo. `.env*` is gitignored (except `.env.example`).
Deploy-time config goes in GitHub repo **variables/secrets** and the Azure SWA
app settings — never in committed files.

## Deploy
GitHub Actions (`.github/workflows/azure-static-web-apps.yml`) builds to `./out`
and uploads via `Azure/static-web-apps-deploy`. Required repo settings:
- secret `AZURE_STATIC_WEB_APPS_API_TOKEN`
- variable `NEXT_PUBLIC_SITE_URL` (once domain confirmed)
- custom domain wired manually in the Azure Portal (per ForIT precedent — DNS
  is per-client and not automated in-repo).
