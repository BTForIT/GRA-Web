import { CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Portrait from '@/components/Portrait';
import ContactCTA from '@/components/sections/ContactCTA';
import { PRINCIPAL } from '@/config/assets';
import { SITE } from '@/config/site';

/**
 * About page. Subject: Alex Lee, principal of Grand River Aviation Advisory.
 *
 * The portrait is rendered by the Portrait component, which serves a monogram
 * placeholder until a confirmed headshot is supplied (one-line swap in
 * src/config/assets.ts — see PRINCIPAL). The biography below is grounded only
 * in the firm's published positioning; it intentionally avoids unverified
 * personal-history claims and can be expanded once Alex's confirmed bio lands.
 */

const PRINCIPLES: ReadonlyArray<string> = [
  'Global aviation perspective, Canadian regional roots',
  'Regulator-aware, disciplined advisory practice',
  'Data-driven market and commercial intelligence',
  'Independent guidance — the airline always decides',
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description={`Meet ${PRINCIPAL.name}, ${PRINCIPAL.role.toLowerCase()} of ${SITE.name} — global aviation advisory grounded in deep Canadian regional experience.`}
        path="/about/"
      />

      {/* Intro band */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-silver-dark">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gra-ink sm:text-5xl">
            Advisory, led with judgment
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gra-ink/70">
            {SITE.name} brings global aviation investment, ownership, and
            advisory expertise to Canada and beyond — focused on long-term
            stewardship and strategic growth. The practice is led by its
            principal, {PRINCIPAL.name}.
          </p>
        </div>
      </section>

      {/* Principal */}
      <section className="bg-gra-pearl py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
            {/* Portrait */}
            <div className="mx-auto w-full max-w-xs lg:mx-0">
              <Portrait />
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-silver-dark">
                {PRINCIPAL.role}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gra-ink sm:text-4xl">
                {PRINCIPAL.name}
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gra-ink/75">
                <p>
                  {PRINCIPAL.name} is the principal of {SITE.name}. He leads the
                  firm&rsquo;s advisory practice, bringing global aviation
                  investment, ownership, and advisory experience to carriers
                  building and growing scheduled service in Canada and beyond.
                </p>
                <p>
                  Under his direction, the firm works as an advisor by design —
                  pairing international aviation perspective with deep Canadian
                  regional knowledge to deliver market intelligence, commercial
                  analysis, and strategic guidance, while decision-making
                  authority always rests with the airline.
                </p>
                <p>
                  That approach guides the firm&rsquo;s advisory support to
                  Connect Airlines&rsquo; Canadian regional service — helping
                  bring new scheduled connectivity to underserved communities,
                  with every operational decision remaining the carrier&rsquo;s
                  own.
                </p>
              </div>

              <blockquote className="mt-8 rounded-r-lg border-l-4 border-gra-silver bg-white py-4 pl-5 pr-4 text-lg font-medium italic text-gra-ink shadow-sm">
                We supply the analysis; the airline makes the decisions.
              </blockquote>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {PRINCIPLES.map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-gra-silver-dark"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] font-medium text-gra-ink">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
