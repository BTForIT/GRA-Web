import { ArrowRight } from 'lucide-react';
import { SITE } from '@/config/site';

export default function Hero() {
  const mailto = `mailto:${SITE.contact.email}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gra-navy-dark via-gra-navy to-gra-navy-dark">
      {/* Soft silver glows — light catching off the navy, kept subtle. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-gra-silver opacity-[0.12] blur-3xl" />
        <div className="absolute -bottom-40 right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-gra-pearl opacity-[0.08] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gra-silver-dark opacity-[0.10] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gra-sky">
            {SITE.name}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gra-sky/90 sm:text-xl">
            {SITE.subhead} We provide market intelligence, commercial analysis,
            and strategic guidance for airlines launching and growing scheduled
            service in Canada.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={mailto}
              className="group inline-flex items-center justify-center rounded-xl bg-gra-pearl px-7 py-3.5 text-base font-semibold text-gra-navy shadow-glow ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              What we do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
