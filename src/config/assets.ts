/**
 * Grand River Aviation Advisory — centralized brand-asset config.
 *
 * SINGLE SOURCE OF TRUTH for the logo. The header/footer render the mark via
 * the Wordmark component. The official mark is the silver Institutional
 * Monogram (the GRA letterform with an ascending flight path through the A and
 * "ADVISORY" beneath) on a transparent ground — it reads correctly on the
 * Midnight Navy surfaces, so the same file serves both the light- and
 * dark-background slots.
 */

export const LOGO = {
  /**
   * When `true` the PNG logo lockup is served. Set `false` only to fall back to
   * the typographic placeholder.
   */
  useImage: true,

  /** Official monogram (silver on transparent). */
  src: '/images/GRALogo.png',

  /** Same silver mark for dark backgrounds (header, footer, CTA band). */
  srcWhite: '/images/GRALogo.png',

  /** Intrinsic dimensions for next/image (trimmed asset is 740×500). */
  width: 740,
  height: 500,

  /** Accessible name for the mark. */
  alt: 'Grand River Aviation Advisory',
} as const;

export default LOGO;
