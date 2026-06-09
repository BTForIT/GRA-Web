import Image from 'next/image';
import { LOGO } from '@/config/assets';
import { SITE } from '@/config/site';

interface WordmarkProps {
  /** Render the inverse (light) treatment for dark/navy backgrounds. */
  onDark?: boolean;
  className?: string;
}

/**
 * Brand mark for Grand River Advisory.
 *
 * Renders a typographic SVG-friendly wordmark placeholder today. When the real
 * logo lands, flip LOGO.useImage in src/config/assets.ts (a one-file change) and
 * this component serves the image instead — no other file needs to change.
 */
export default function Wordmark({ onDark = false, className = '' }: WordmarkProps) {
  if (LOGO.useImage) {
    return (
      <Image
        src={onDark ? LOGO.srcWhite : LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        className={className}
        priority
      />
    );
  }

  // Typographic placeholder wordmark: a small "GRA" badge + the full name.
  const nameColor = onDark ? 'text-white' : 'text-gra-navy';
  const badgeClasses = onDark
    ? 'bg-white/15 text-white ring-1 ring-white/30'
    : 'bg-gra-navy text-white';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid h-9 w-9 place-items-center rounded-lg text-sm font-bold tracking-tight ${badgeClasses}`}
      >
        GRA
      </span>
      <span className={`flex flex-col leading-none ${nameColor}`}>
        <span className="text-[15px] font-bold tracking-tight sm:text-base">
          Grand River
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
            onDark ? 'text-gra-sky/80' : 'text-gra-blue'
          }`}
        >
          Advisory
        </span>
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
