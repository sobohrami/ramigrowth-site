import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'AI automation services for lead generation, operations, and custom software',
  description:
    'Explore RamiGrowth services for AI automation, lead generation, workflow automation, and custom software built for service businesses and operator-led teams.',
  keywords: [
    'AI automation services',
    'lead generation systems',
    'workflow automation services',
    'custom web app development',
    'AI tooling for business',
  ],
  alternates: {
    canonical: '/services',
    languages: {
      en: '/services',
      ro: '/ro/services',
    },
  },
}

const services = [
  {
    id: 'lead-generation',
    title: 'Lead generation systems',
    strap: 'Find, contact, and follow up with the right prospects automatically.',
    description:
      'Prospect sourcing, enrichment, personalized outbound, follow-up logic, and lead routing built around your market, your offer, and your sales process.',
    outcomes: [
      'More qualified conversations',
      'Follow-up handled automatically',
      'A cleaner pipeline with fewer missed opportunities',
    ],
    fit: 'Best for service businesses, B2B operators, recruiters, and founder-led teams that need demand without losing hours every week to manual outreach.',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow automation',
    strap: 'Reduce repetitive admin and keep the team moving.',
    description:
      'Onboarding, scheduling, reporting, reminders, handoffs, CRM hygiene, invoicing, and back-office loops rebuilt into faster, easier operating flows.',
    outcomes: [
      'Hours saved every week',
      'Fewer manual mistakes',
      'More delivery capacity without extra admin hires',
    ],
    fit: 'Best for service businesses, clinics, agencies, and operators buried in repeatable tasks that should already be automated.',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom web apps',
    strap: 'Build the tool your team wishes already existed.',
    description:
      'Internal tools, client portals, dashboards, calculators, or a focused MVP designed around one clear workflow and one real business use case.',
    outcomes: [
      'Useful software in weeks, not quarters',
      'A product shaped around the way your team actually works',
      'A codebase that can keep improving after launch',
    ],
    fit: 'Best for founders building the first useful version and teams that have outgrown spreadsheets plus disconnected SaaS tools.',
  },
  {
    id: 'ai-enhanced-tooling',
    title: 'AI-enhanced tooling',
    strap: 'Use AI where it saves time or improves decisions.',
    description:
      'Document extraction, summarization, triage, routing, internal assistants, content operations, and decision-support layers where AI can reduce real operational drag.',
    outcomes: [
      'High-volume repetitive work handled automatically',
      'Useful outputs delivered inside existing systems',
      'No full rebuild required just to add intelligence',
    ],
    fit: 'Best for teams handling documents, messages, repetitive decisions, or data-heavy workflows where AI can improve throughput quickly.',
  },
]

const delivery = [
  'Start with one clear business problem.',
  'Ship a useful first version fast.',
  'Improve the system after real usage, not guesswork.',
]

const signals = [
  ['Who this is for', 'Teams that need more leads, less manual work, or a better internal tool.'],
  ['What you can expect', 'Clear scope, direct collaboration, and a practical first release.'],
  ['What matters most', 'The system has to save time, create revenue, or make execution easier.'],
]

export default function ServicesPage() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="section-title mt-6">AI automation services for lead generation, operations, and custom software.</h1>
          </div>
          <div className="space-y-6">
            <p className="lede">
              Choose the service that matches the problem: bring in more qualified leads, remove repetitive admin, or
              build a tool your team will actually use.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {delivery.map((item) => (
                <div key={item} className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-rami-fog">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider py-8 md:py-12">
        <div className="shell grid gap-6">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[90px_1.1fr_0.9fr] lg:gap-10">
                <div className="font-display text-5xl text-rami-gold/80">0{index + 1}</div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rami-gold">Service</p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-rami-cream md:text-5xl">{service.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-rami-cream/90">{service.strap}</p>
                  <p className="mt-5 text-base leading-8 text-rami-fog">{service.description}</p>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1323]/70 p-5">
                    <p className="label">Main outcomes</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-rami-cream">
                      {service.outcomes.map((item) => (
                        <li key={item} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="label">Best fit</p>
                    <p className="mt-4 text-sm leading-7 text-rami-fog">{service.fit}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">How projects move</p>
            <h2 className="section-title mt-6">From clear problem to useful launch.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Find the friction', 'We identify where time, money, or follow-through is leaking.'],
              ['02', 'Scope the first version', 'We define the smallest build that makes a meaningful difference fast.'],
              ['03', 'Launch and improve', 'The system goes live quickly, then gets refined based on real use.'],
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="font-display text-3xl text-rami-gold/80">{step}</p>
                <h3 className="mt-4 text-xl font-semibold text-rami-cream">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-rami-fog">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-5 md:grid-cols-3">
          {signals.map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-[#0a1323]/72 p-5">
              <p className="label">{title}</p>
              <p className="mt-4 text-sm leading-7 text-rami-fog">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip
        headline="Not sure which service fits your problem?"
        subtext="Tell me what is slowing the business down and I will point you to the right next move."
        ctaLabel="Start the conversation"
        locale="en"
      />
    </main>
  )
}
