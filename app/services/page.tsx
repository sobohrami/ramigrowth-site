import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'AI Automation Services, Lead Generation Systems, and Custom App Builds',
  description:
    'Explore RamiGrowth services for AI automation, lead generation, workflow automation, custom web app development, and AI-enhanced internal tooling.',
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
    strap: 'Generate qualified conversations without putting manual prospecting back on the founder.',
    description:
      'Prospect sourcing, enrichment, personalized outbound, follow-up logic, and lead routing built around your market, your offer, and your sales motion.',
    outcomes: [
      'Qualified conversations arriving consistently',
      'Lead follow-up handled automatically',
      'A tighter pipeline with fewer dropped opportunities',
    ],
    fit: 'Local services, B2B operators, recruiters, and founder-led teams that need demand without losing hours every day to manual outreach.',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow automation',
    strap: 'Turn repetitive coordination into a system instead of a staffing problem.',
    description:
      'Onboarding, scheduling, reporting, reminders, handoffs, CRM hygiene, invoicing, and back-office loops rebuilt into faster operating flows.',
    outcomes: [
      'Hours returned to the team every week',
      'Fewer manual mistakes and handoff failures',
      'More capacity without hiring for avoidable admin',
    ],
    fit: 'Service businesses, clinics, agencies, and operators buried in repeatable tasks that should already be automated.',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom web apps',
    strap: 'Build the exact product surface the current stack cannot give you.',
    description:
      'Internal tools, client portals, dashboards, calculators, or a sharp MVP designed around one clear workflow and one concrete commercial use.',
    outcomes: [
      'Working software in weeks, not quarters',
      'A product shaped around your real workflow',
      'A codebase that can keep compounding after launch',
    ],
    fit: 'Founders building the first useful version and operators who have already outgrown spreadsheets plus disconnected SaaS tools.',
  },
  {
    id: 'ai-enhanced-tooling',
    title: 'AI-enhanced tooling',
    strap: 'Put practical intelligence into the stack you already use.',
    description:
      'Document extraction, summarization, triage, routing, internal assistants, content operations, and decision-support layers where AI actually reduces drag.',
    outcomes: [
      'High-volume repetitive work handled automatically',
      'Useful outputs delivered inside existing systems',
      'No full rebuild required just to add intelligence',
    ],
    fit: 'Teams handling documents, messages, repetitive decisions, or data-heavy operational flows where AI can improve throughput immediately.',
  },
]

const delivery = [
  'Projects start from one named bottleneck, not a vague AI transformation brief.',
  'The first version is scoped to create leverage quickly.',
  'Automation, interface, and business logic are designed together.',
]

const signals = [
  ['Best for', 'Businesses with pressure in revenue, delivery, or internal execution.'],
  ['Not for', 'Teams looking for long discovery workshops without a clearly named business outcome.'],
  ['How projects run', 'Tight scope, direct collaboration, useful first release, then refinement.'],
]

export default function ServicesPage() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="section-title mt-6">AI automation services built around real business bottlenecks.</h1>
          </div>
          <div className="space-y-6">
            <p className="lede">
              This is not generic AI consulting. These are focused build tracks for lead generation, workflow
              automation, custom apps, and AI tooling that solve specific business problems.
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rami-gold">Build track</p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-rami-cream md:text-5xl">{service.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-rami-cream/90">{service.strap}</p>
                  <p className="mt-5 text-base leading-8 text-rami-fog">{service.description}</p>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1323]/70 p-5">
                    <p className="label">Primary outcomes</p>
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
            <p className="eyebrow">How projects start</p>
            <h2 className="section-title mt-6">The first sprint is about understanding the system, not decorating the brief.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Map the friction', 'We identify where money, time, or momentum is leaking.'],
              ['02', 'Scope the useful version', 'We define the smallest build that creates leverage quickly and can keep compounding after launch.'],
              ['03', 'Ship and refine', 'The system goes live fast, then we improve it based on real usage rather than assumptions.'],
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
        headline="Need help choosing the right AI automation service?"
        subtext="Bring the bottleneck, the revenue problem, or the workflow that keeps breaking. I will tell you which system wants to exist first."
        ctaLabel="Start the conversation"
        locale="en"
      />
    </main>
  )
}
