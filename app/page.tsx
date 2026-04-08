import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import HeroOperatorScene from '@/components/HeroOperatorScene'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'I build systems that grow your business: automated outreach, custom apps, and workflow tools with real outcomes.',
}

const services = [
  {
    index: '01',
    name: 'Lead generation systems',
    desc: 'Prospect sourcing, personalized outbound, follow-up logic, and lead routing built around your specific market.',
    outcome: 'More qualified conversations without manual prospecting.',
    id: 'lead-generation',
  },
  {
    index: '02',
    name: 'Workflow automation',
    desc: 'Operational bottlenecks mapped, automated, and shipped into the tools your team already uses.',
    outcome: 'Less admin drag and faster execution with the same headcount.',
    id: 'workflow-automation',
  },
  {
    index: '03',
    name: 'Custom web apps',
    desc: 'Focused internal tools, client-facing apps, and MVPs built around one business problem instead of a generic platform.',
    outcome: 'A working product in weeks, not a six-month plan.',
    id: 'custom-web-apps',
  },
  {
    index: '04',
    name: 'AI-enhanced tooling',
    desc: 'Practical AI features layered into real workflows: summarization, document handling, routing, and decision support.',
    outcome: 'Better throughput without rebuilding your whole operation.',
    id: 'ai-enhanced-tooling',
  },
]

const principles = [
  {
    title: 'Built close to the business problem',
    body: 'No long handoff chain, no agency theater, and no giant requirement documents before anything real exists.',
  },
  {
    title: 'Scoped for outcomes, not vanity',
    body: 'Each build is tied to a commercial or operational result: more leads, less manual work, or a product that can ship.',
  },
  {
    title: 'Fast enough to create leverage',
    body: 'The goal is momentum. We narrow the brief, build the useful version first, and iterate after the system is live.',
  },
]

const caseStudies = [
  {
    slug: 'prodetailer',
    label: 'Lead-gen platform',
    title: 'ProDetailer.app',
    body: 'A lead generation and follow-up engine for auto detailing businesses, built to turn outreach into booked work.',
  },
  {
    slug: 'salariuok',
    label: 'Market intelligence app',
    title: 'SalariuOk.ro',
    body: 'A focused salary benchmarking product for the Romanian market, built with live data and a clean operator-first surface.',
  },
]

export default function HomePage() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="ambient-orb absolute left-[-8%] top-24 h-64 w-64 rounded-full bg-rami-gold/10 blur-3xl" />
        <div className="ambient-orb absolute right-[-10%] top-16 h-80 w-80 rounded-full bg-rami-steel/20 blur-3xl" />

        <div className="shell relative grid min-h-[calc(100svh-82px)] items-center gap-16 py-16 md:py-24 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Automation systems for operators</p>
            <h1 className="display-title mt-6 max-w-4xl">
              Build the engine,
              <br />
              not another bottleneck.
            </h1>
            <p className="lede mt-7">
              I design and ship revenue systems, internal tools, and AI-enhanced workflows for businesses that need a
              concrete operational upgrade now, not six weeks of discovery.
            </p>
            <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.22em] text-rami-gold/90">
              Animated systems. Autonomous workflows. A visible AI layer that feels alive.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {cal ? (
                <a href={cal} target="_blank" rel="noopener noreferrer" className="button-primary min-w-[210px]">
                  Book a discovery call
                </a>
              ) : (
                <Link href="/contact" className="button-primary min-w-[210px]">
                  Book a discovery call
                </Link>
              )}
              <Link href="/work" className="button-secondary min-w-[170px]">
                See recent work
              </Link>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="eyebrow text-rami-fog/60">Focus</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">Lead generation, workflow automation, custom apps.</p>
              </div>
              <div>
                <p className="eyebrow text-rami-fog/60">Delivery</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">Tight scope, direct communication, working software.</p>
              </div>
              <div>
                <p className="eyebrow text-rami-fog/60">Ideal client</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">Operators who care about speed and commercial upside.</p>
              </div>
            </div>
          </div>

          <HeroOperatorScene />
        </div>
      </section>

      <section className="section-divider py-24">
        <div className="shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why clients choose this model</p>
            <h2 className="section-title mt-6 max-w-xl">Less ceremony. More leverage.</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold text-rami-cream">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-rami-fog">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">What I build</p>
            <h2 className="section-title mt-6">Four high-leverage ways to remove drag and create momentum.</h2>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="grid gap-4 py-8 md:grid-cols-[100px_1fr_0.8fr] md:gap-8 hover:bg-white/[0.025]"
              >
                <p className="font-display text-4xl text-rami-gold">{service.index}</p>
                <div>
                  <h3 className="text-2xl font-semibold text-rami-cream">{service.name}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-8 text-rami-fog">{service.desc}</p>
                </div>
                <div className="self-center">
                  <p className="label">Primary outcome</p>
                  <p className="mt-3 text-sm leading-7 text-rami-cream">{service.outcome}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title mt-6">Proof in live products, not hypothetical mockups.</h2>
            </div>
            <Link href="/work" className="button-secondary max-w-max">
              Browse all work
            </Link>
          </div>

          <div className="mt-14 grid gap-8">
            {caseStudies.map((item, index) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:grid-cols-[0.25fr_0.75fr] md:p-10"
              >
                <div className="flex flex-col justify-between">
                  <p className="font-display text-6xl leading-none text-rami-gold/80">0{index + 1}</p>
                  <p className="eyebrow">{item.label}</p>
                </div>
                <div>
                  <h3 className="font-display text-4xl text-rami-cream md:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-rami-fog">{item.body}</p>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-rami-gold">Open case study</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Have an operational bottleneck worth fixing?"
        subtext="Bring the actual problem. I will tell you if it should be automated, built as a tool, or left alone."
        ctaLabel="Book a discovery call"
      />
    </main>
  )
}
