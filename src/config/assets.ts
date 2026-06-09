/**
 * Grand River Advisory — centralized brand-asset config.
 *
 * SINGLE SOURCE OF TRUTH for the logo. The header/footer render a text/SVG
 * wordmark placeholder today because the real brand kit is not yet synced
 * locally (OneDrive lag). To swap in the real logo later, this is a ONE-FILE
 * change:
 *
 *   1. Drop the file at  public/images/gra-logo.svg  (and an inverse/white
 *      variant at  public/images/gra-logo-white.svg  for dark backgrounds).
 *   2. Set  LOGO.useImage = true  below.
 *
 * Everything that renders the brand (Wordmark component) reads from here, so no
 * other file needs to change.
 */

export const LOGO = {
  /**
   * Flip to `true` once the real logo SVGs exist under public/images/. While
   * `false`, the site renders the typographic Wordmark placeholder.
   */
  useImage: false,

  /** Logo for light backgrounds (header on white, footer copy line). */
  src: '/images/gra-logo.svg',

  /** Logo for dark/navy backgrounds (dark footer, navy CTA band). */
  srcWhite: '/images/gra-logo-white.svg',

  /** Intrinsic dimensions for next/image (update to match the real asset). */
  width: 180,
  height: 40,

  /** Accessible name for the mark. */
  alt: 'Grand River Advisory',
} as const;

export default LOGO;
