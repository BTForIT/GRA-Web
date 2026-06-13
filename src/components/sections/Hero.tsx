import { ArrowRight } from 'lucide-react';
import { SITE } from '@/config/site';

export default function Hero() {
  const mailto = `mailto:${SITE.contact.email}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gra-pearl to-gra-pearl">
      {/* Soft silver washes — light, airy diffusion over the Pearl base. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-gra-silver opacity-[0.18] blur-3xl" />
        <div className="absolute -bottom-40 right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-white opacity-60 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gra-silver opacity-[0.12] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center rounded-full border border-gra-navy/15 bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gra-silver-dark">
            {SITE.name}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gra-ink sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gra-ink/70 sm:text-xl">
            {SITE.subhead} We bring global aviation insight to market
            intelligence, commercial analysis, and strategic guidance —
            supporting airlines launching and growing scheduled service in
            Canada and beyond.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={mailto}
              className="group inline-flex items-center justify-center rounded-xl bg-gra-navy px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gra-navy-dark"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center rounded-xl border border-gra-navy/20 px-7 py-3.5 text-base font-semibold text-gra-navy transition-colors hover:border-gra-navy/40 hover:bg-gra-navy/5"
            >
              What we do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
