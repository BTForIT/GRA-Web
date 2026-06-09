/**
 * Grand River Advisory (GRA) — single source of truth for site-wide config.
 *
 * DOMAIN POLICY: the production origin is read from NEXT_PUBLIC_SITE_URL at
 * build time. When that env var is set to a real origin, the site is treated as
 * domain-confirmed: pages drop the noindex meta and the post-build SEO step
 * emits an allow + sitemap robots.txt. Absent the env var, the build falls back
 * to a non-resolving RFC-2606 `.invalid` placeholder and stays out of search
 * indexes — so a misconfigured build can never silently point at a real
 * third-party domain.
 *
 * Every domain/URL reference in the app derives from SITE.url — change it here
 * (or via the env var) and the whole site follows. Do NOT hardcode the domain
 * anywhere else.
 */

const PLACEHOLDER_ORIGIN = 'https://domain-not-set.invalid';

const rawUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();

/**
 * Optional explicit confirmation flag. Confirmation is primarily driven by the
 * presence of a real NEXT_PUBLIC_SITE_URL; this flag lets an operator force the
 * confirmed state on/off independently. Default (unset) defers to the URL.
 */
const rawConfirmFlag = (process.env.NEXT_PUBLIC_DOMAIN_CONFIRMED || '')
  .trim()
  .toLowerCase();

/** Confirmed origin with any trailing slash stripped, or the placeholder. */
export const SITE_URL = (rawUrl || PLACEHOLDER_ORIGIN).replace(/\/+$/, '');

/**
 * True once a real domain has been supplied. Driven by the presence of a real
 * origin; can be explicitly disabled with NEXT_PUBLIC_DOMAIN_CONFIRMED=false.
 */
export const DOMAIN_CONFIRMED =
  rawConfirmFlag === 'false' ? false : rawUrl.length > 0;

function hostFrom(origin: string): string {
  try {
    return new URL(origin).host;
  } catch {
    return 'domain-not-set.invalid';
  }
}

export const SITE = {
  name: 'Grand River Advisory',
  shortName: 'GRA',
  tagline: 'Clear guidance for Canadian aviation.',
  subhead: 'Intelligence that helps airlines decide with confidence.',
  description:
    'Grand River Advisory is a Canadian aviation advisory firm providing market intelligence, commercial analysis, and strategic guidance to airlines launching and growing scheduled service in Canada.',
  url: SITE_URL,
  domain: hostFrom(SITE_URL),
  domainConfirmed: DOMAIN_CONFIRMED,
  blog: {
    enabled: true,
    label: 'Insights',
    path: '/news',
  },
  contact: {
    email: 'contact@graadvisory.com',
  },
  social: {
    linkedin: '',
  },
} as const;

export default SITE;
