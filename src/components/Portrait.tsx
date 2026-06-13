import Image from 'next/image';
import { PRINCIPAL } from '@/config/assets';

interface PortraitProps {
  className?: string;
}

/**
 * Principal portrait for the About page.
 *
 * Renders the confirmed headshot when `PRINCIPAL.useImage` is `true`, otherwise
 * a tasteful Midnight Navy monogram placeholder (the principal's initials in
 * the Sora display face, ringed in silver). Swapping in the real photo is a
 * one-line change in `src/config/assets.ts` — see PRINCIPAL — so no markup here
 * needs to change when the headshot arrives.
 */
export default function Portrait({ className = '' }: PortraitProps) {
  if (PRINCIPAL.useImage) {
    return (
      <Image
        src={PRINCIPAL.src}
        alt={PRINCIPAL.alt}
        width={PRINCIPAL.width}
        height={PRINCIPAL.height}
        className={`aspect-[4/5] w-full rounded-2xl object-cover shadow-md ring-1 ring-gra-navy/10 ${className}`}
        priority
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${PRINCIPAL.alt} — portrait to follow`}
      className={`relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-gra-navy via-gra-navy to-gra-navy-dark shadow-md ring-1 ring-gra-navy/10 ${className}`}
    >
      {/* Soft silver wash, echoing the brand's light-off-navy treatment. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gra-silver opacity-[0.14] blur-3xl"
      />
      <div className="relative flex flex-col items-center">
        <span className="font-serif text-6xl font-semibold tracking-tight text-gra-pearl sm:text-7xl">
          {PRINCIPAL.initials}
        </span>
        <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gra-silver">
          {PRINCIPAL.role}
        </span>
      </div>
    </div>
  );
}
