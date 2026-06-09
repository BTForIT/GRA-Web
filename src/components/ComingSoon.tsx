import Link from 'next/link';
import { SITE } from '@/config/site';

export default function ComingSoon() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-accent mb-5">
        Launching soon
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
        {SITE.name}
      </h1>
      <p className="text-lg sm:text-xl text-brand-light mb-8">{SITE.tagline}</p>
      <p className="text-base text-brand-light max-w-xl mx-auto">
        {SITE.description}
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        {SITE.blog.enabled && (
          <Link
            href={`${SITE.blog.path}/`}
            className="inline-block rounded-md border border-brand-muted px-6 py-3 text-sm font-medium hover:bg-brand-muted transition"
          >
            Read the {SITE.blog.label}
          </Link>
        )}
        {SITE.contact.email && (
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-block rounded-md bg-brand px-6 py-3 text-white text-sm font-medium hover:bg-brand-light transition"
          >
            Get in touch
          </a>
        )}
      </div>
    </section>
  );
}
