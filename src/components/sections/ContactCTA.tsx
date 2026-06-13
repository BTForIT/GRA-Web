import { Mail } from 'lucide-react';
import { SITE } from '@/config/site';

export default function ContactCTA() {
  const mailto = `mailto:${SITE.contact.email}`;

  return (
    // Deliberate Midnight Navy anchor band: the light page resolves into a
    // confident dark Contact + Footer foot. Navy (mid) here steps gently into
    // the deeper navy-dark Footer below.
    <section id="contact" className="relative overflow-hidden bg-gra-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-gra-silver blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gra-pearl blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Talk to an advisor
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gra-sky/90">
          Considering new scheduled service in Canada or beyond, or sharpening
          the strategy behind an existing route? We are glad to help you think
          it through.
        </p>
        <div className="mt-10">
          <a
            href={mailto}
            className="group inline-flex items-center justify-center rounded-xl bg-gra-pearl px-8 py-4 text-base font-semibold text-gra-navy shadow-glow transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
            {SITE.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
