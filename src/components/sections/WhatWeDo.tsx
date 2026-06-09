import {
  BarChart3,
  LineChart,
  Network,
  ClipboardCheck,
  Users,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

interface AdvisoryService {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ADVISORY_SERVICES: ReadonlyArray<AdvisoryService> = [
  {
    icon: BarChart3,
    title: 'Market & Route Performance Analysis',
    description:
      'Market sizing, demand data, and origin-destination analysis to inform network and schedule planning.',
  },
  {
    icon: LineChart,
    title: 'Fare Benchmarking & Revenue Intelligence',
    description:
      'Competitor fare monitoring and load-factor benchmarks to support independent pricing and yield decisions.',
  },
  {
    icon: Network,
    title: 'Sales Channel & Distribution Reporting',
    description:
      'Booking-channel performance and channel-cost analysis to inform distribution strategy.',
  },
  {
    icon: ClipboardCheck,
    title: 'Brand Compliance Reviews',
    description:
      'Observational reviews of brand consistency across customer touchpoints, with written findings.',
  },
  {
    icon: Users,
    title: 'Community & Stakeholder Engagement',
    description:
      'Engagement with airport authorities, municipalities, economic-development and Indigenous community partners, and regional tourism/workforce initiatives.',
  },
  {
    icon: Lightbulb,
    title: 'Market Strategy Support',
    description:
      'Campaign concepts, messaging frameworks, and performance benchmarking to support marketing and growth planning.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-gra-navy py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-blue">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Advisory services for Canadian carriers
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gra-sky/85">
            We supply the analysis and the strategic context. Decision-making
            authority always rests with the airline.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ADVISORY_SERVICES.map((service) => (
            <li
              key={service.title}
              className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gra-blue/50 hover:bg-white/[0.07] hover:shadow-card-hover"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/[0.06] text-gra-silver ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-gra-silver group-hover:text-gra-navy">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gra-sky/80">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
