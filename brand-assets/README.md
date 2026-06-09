# Brand assets — Grand River (GRA)

Drop the Grand River brand kit here when it's available:

- `logo.svg` / `logo-white.svg` — primary marks
- `favicon.ico`, `favicon-512.png`
- brand guidelines (PDF)
- colour + type tokens

Then wire the real values into:
- `tailwind.config.js` → `theme.extend.colors.brand`
- `src/config/site.ts` → name / tagline / social / contact
- `public/site.webmanifest` → `theme_color`, icons

Until the kit lands, the site uses a **neutral placeholder palette** defined in
`tailwind.config.js` — deliberately **not** ForIT brand colours (a client-facing
site must never ship ForIT branding).

This directory holds *source* brand material. Web-ready assets the site serves
at runtime belong under `public/`.
