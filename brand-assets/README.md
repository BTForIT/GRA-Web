# Brand assets — Grand River Advisory (GRA)

Source brand material lives here. Web-ready assets the site serves at runtime
belong under `public/`.

## Logo swap (one-file change)

The site currently renders a typographic **wordmark placeholder** because the
real logo is not yet synced locally. To swap in the real mark:

1. Drop the web-ready SVGs into `public/images/`:
   - `gra-logo.svg` — primary mark (for light backgrounds)
   - `gra-logo-white.svg` — inverse mark (for dark/navy backgrounds)
2. In `src/config/assets.ts`, set `LOGO.useImage = true` (and update
   `width`/`height` to match the asset).

That is the only change required — `src/components/Wordmark.tsx` (used by the
header and footer) reads everything from `src/config/assets.ts`.

## Colour palette

The blue brand palette is defined once in `tailwind.config.js`
(`theme.extend.colors.gra`) and mirrored as CSS variables in
`src/styles/globals.css`:

| Token         | Hex       | Use                     |
| ------------- | --------- | ----------------------- |
| `gra-navy`    | `#0B3D6B` | primary / dark          |
| `gra-primary` | `#1565A6` | primary action          |
| `gra-blue`    | `#2E8BC0` | accent                  |
| `gra-sky`     | `#EAF2F8` | light tint              |
| `gra-cloud`   | `#F7FAFC` | page background         |
| `gra-ink`     | `#16202B` | body text               |
| `gra-slate`   | `#4A5C7A` | muted text              |

## Other wiring points

- `src/config/site.ts` — name / tagline / contact / blog config (source of truth)
- `public/site.webmanifest` — `theme_color`, icons
- `public/favicon.ico`, `public/favicon-512.png` — add when the kit lands
