import { CheckCircle2 } from 'lucide-react';

const APPROACH_FEATURES: ReadonlyArray<string> = [
  'Canadian regional-aviation expertise',
  'Regulator-aware advisory practice',
  'Data-driven commercial intelligence',
  'Independent, non-binding guidance',
];

export default function Approach() {
  return (
    <section id="approach" className="bg-gra-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: narrative */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-blue">
              Our approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gra-navy sm:text-4xl">
              Advisory by design
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gra-ink">
              Grand River Advisory is a Canadian aviation advisory firm that
              supports airlines launching and growing scheduled service in
              Canada. We provide market intelligence, commercial analysis, and
              strategic guidance that help carriers make well-informed decisions
              — while the airline retains full and independent control of its own
              operations. Our work pairs deep Canadian regional-aviation
              experience with disciplined, regulator-aware advisory practice.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gra-ink">
              We provide advisory support to Connect Airlines&rsquo; Canadian
              regional service, helping bring new scheduled connectivity to
              underserved Canadian communities — delivering market analysis,
              commercial intelligence, and strategic guidance while all
              decision-making authority rests with the carrier.
            </p>

            <blockquote className="mt-7 border-l-4 border-gra-blue bg-white py-4 pl-5 pr-4 text-lg font-medium italic text-gra-navy shadow-card">
              Our role is advisory by design: we supply the analysis, the
              airline makes the decisions.
            </blockquote>
          </div>

          {/* Right: feature list */}
          <div className="lg:pt-14">
            <div className="rounded-xl border border-gra-sky bg-white p-8 shadow-card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gra-slate">
                What sets us apart
              </h3>
              <ul className="mt-5 space-y-4">
                {APPROACH_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 flex-shrink-0 text-gra-blue"
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
