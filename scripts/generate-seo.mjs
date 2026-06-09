// Post-build SEO generation.
//
// Emits robots.txt + sitemap.xml into ./out using the confirmed site origin
// (NEXT_PUBLIC_SITE_URL). If the origin is unset, write a crawl-blocking
// robots.txt and skip the sitemap — a placeholder build must never advertise a
// non-resolving domain to crawlers. This keeps every committed file free of a
// guessed domain string while still producing correct SEO once the real domain
// is supplied at deploy time.
import { writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'out';

if (!existsSync(OUT)) {
  console.log('[seo] no ./out directory — skipping (did `next build` run?)');
  process.exit(0);
}

const origin = (process.env.NEXT_PUBLIC_SITE_URL || '').trim().replace(/\/+$/, '');

if (!origin) {
  writeFileSync(join(OUT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  console.log(
    '[seo] NEXT_PUBLIC_SITE_URL unset — wrote crawl-blocking robots.txt, skipped sitemap',
  );
  process.exit(0);
}

const routes = ['/', '/news/'];

const postsDir = 'posts';
if (existsSync(postsDir)) {
  for (const f of readdirSync(postsDir)) {
    if (f.endsWith('.md')) routes.push(`/news/${f.replace(/\.md$/, '')}/`);
  }
}

const urls = routes.map((r) => `  <url><loc>${origin}${r}</loc></url>`).join('\n');
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  `${urls}\n` +
  '</urlset>\n';

writeFileSync(join(OUT, 'sitemap.xml'), sitemap);
writeFileSync(
  join(OUT, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
console.log(`[seo] wrote sitemap.xml + robots.txt for ${origin}`);
