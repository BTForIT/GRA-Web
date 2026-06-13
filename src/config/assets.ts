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

  /** Intrinsic dimensions for next/image (tight-cropped asset is 610×240). */
  width: 610,
  height: 240,

  /** Accessible name for the mark. */
  alt: 'Grand River Aviation Advisory',
} as const;

/**
 * Principal portrait — single source of truth for the About page headshot.
 *
 * PHOTO IS GATED: no verified headshot of Alex Lee is on hand yet, so the
 * Portrait component renders a tasteful monogram placeholder while `useImage`
 * is `false`. When the confirmed photo lands, drop the file at `src` and flip
 * `useImage` to `true` — that one-line change is the entire swap; no component
 * edits required.
 */
export const PRINCIPAL = {
  name: 'Alex Lee',
  role: 'Principal',

  /** Flip to `true` once the confirmed headshot is dropped at `src`. */
  useImage: false,

  /** Expected location of the confirmed headshot (portrait orientation). */
  src: '/images/alex-lee.jpg',

  /** Intrinsic dimensions for next/image (4:5 portrait crop recommended). */
  width: 640,
  height: 800,

  /** Monogram shown by the placeholder until the photo lands. */
  initials: 'AL',

  /** Accessible name for the portrait. */
  alt: 'Alex Lee, Principal of Grand River Aviation Advisory',
} as const;

export default LOGO;
