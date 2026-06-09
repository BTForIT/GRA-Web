/**
 * Grand River (GRA) — single source of truth for site-wide config.
 *
 * DOMAIN POLICY (critical): Grand River's production domain (a Namecheap
 * domain) is NOT yet confirmed. Nothing in this repo hardcodes a guessed
 * domain. The origin is read from NEXT_PUBLIC_SITE_URL at build time; absent
 * that, it falls back to a non-resolving RFC-2606 `.invalid` placeholder so a
 * misconfigured build can never silently point at a real third-party domain.
 *
 * Every domain/URL reference in the app derives from SITE.url — change it here
 * (or via the env var) and the whole site follows.
 */

const PLACEHOLDER_ORIGIN = 'https://domain-not-set.invalid';

const rawUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();

/** Confirmed origin with any trailing slash stripped, or the placeholder. */
export const SITE_URL = (rawUrl || PLACEHOLDER_ORIGIN).replace(/\/+$/, '');

/** True once a real domain has been supplied via env. */
export const DOMAIN_CONFIRMED = rawUrl.length > 0;

function hostFrom(origin: string): string {
  try {
    return new URL(origin).host;
  } catch {
    return 'domain-not-set.invalid';
  }
}

export const SITE = {
  name: 'Grand River',
  shortName: 'Grand River',
  tagline: 'Something great is on the way.',
  description:
    'Grand River is launching soon — a new home on the web is on its way.',
  url: SITE_URL,
  domain: hostFrom(SITE_URL),
  domainConfirmed: DOMAIN_CONFIRMED,
  blog: {
    enabled: true,
    label: 'News',
    path: '/news',
  },
  contact: {
    // Placeholder — set when Grand River mailboxes are provisioned.
    email: '',
  },
  social: {
    linkedin: '',
  },
} as const;

export default SITE;
