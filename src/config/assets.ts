/**
 * Grand River Advisory — centralized brand-asset config.
 *
 * SINGLE SOURCE OF TRUTH for the logo. The header/footer render the SVG logo
 * lockup at public/images/gra-logo*.svg via the Wordmark component. To replace
 * the mark with an official brand-kit asset later, drop the new files at the
 * same paths (keep the same viewBox aspect, or update width/height below) — no
 * component changes needed.
 *
 *   - public/images/gra-logo-white.svg  → light mark, for dark backgrounds
 *   - public/images/gra-logo.svg        → royal mark, for light backgrounds
 */

export const LOGO = {
  /**
   * When `true` the SVG logo lockup is served. Set `false` only to fall back to
   * the typographic placeholder.
   */
  useImage: true,

  /** Logo for light backgrounds. */
  src: '/images/gra-logo.svg',

  /** Logo for dark/royal backgrounds (header, footer, CTA band). */
  srcWhite: '/images/gra-logo-white.svg',

  /** Intrinsic dimensions for next/image (matches the SVG viewBox aspect). */
  width: 180,
  height: 44,

  /** Accessible name for the mark. */
  alt: 'Grand River Advisory',
} as const;

export default LOGO;
