import { CheckCircle2 } from 'lucide-react';

const APPROACH_FEATURES: ReadonlyArray<string> = [
  'Global expertise, Canadian regional roots',
  'Regulator-aware advisory practice',
  'Data-driven commercial intelligence',
  'Independent, non-binding guidance',
];

export default function Approach() {
  return (
    <section id="approach" className="bg-gra-pearl py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: narrative */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-silver-dark">
              Our approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gra-ink sm:text-4xl">
              Advisory by design
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gra-ink/75">
              Grand River Aviation Advisory brings global aviation investment,
              ownership, and advisory expertise to Canada and beyond, with a
              focus on long-term stewardship and strategic growth. We support
              airlines launching and growing scheduled service — providing
              market intelligence, commercial analysis, and strategic guidance
              that help carriers make well-informed decisions, while the airline
              retains full and independent control of its own operations. Our
              work pairs international aviation perspective with deep Canadian
              regional experience and disciplined, regulator-aware practice.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gra-ink/75">
              We provide advisory support to Connect Airlines&rsquo; Canadian
              regional service, helping bring new scheduled connectivity to
              underserved Canadian communities — delivering market analysis,
              commercial intelligence, and strategic guidance while all
              decision-making authority rests with the carrier.
            </p>

            <blockquote className="mt-7 rounded-r-lg border-l-4 border-gra-silver bg-white py-4 pl-5 pr-4 text-lg font-medium italic text-gra-ink shadow-sm">
              Our role is advisory by design: we supply the analysis, the
              airline makes the decisions.
            </blockquote>
          </div>

          {/* Right: feature list */}
          <div className="lg:pt-14">
            <div className="rounded-2xl border border-gra-silver/30 bg-white p-8 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gra-silver-dark">
                What sets us apart
              </h3>
              <ul className="mt-5 space-y-4">
                {APPROACH_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 flex-shrink-0 text-gra-silver-dark"
                      aria-hidden="true"
                    />
                    <span className="text-base font-medium text-gra-ink">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
