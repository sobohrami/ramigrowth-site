import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Lead generation, workflow automation, custom web apps, and AI-enhanced internal tooling for outcome-led builds.',
}

const services = [
  {
    id: 'lead-generation',
    title: 'Lead generation and outreach systems',
    description:
      'A custom-built system that finds target prospects, sends personalized outreach, follows up automatically, and routes interest directly into your pipeline.',
    outcome: [
      'A fuller calendar without manual prospecting',
      'Follow-up logic running in the background',
      'Leads tracked and routed instead of disappearing into inboxes',
    ],
    fit: 'Local service businesses, B2B operators, recruiters, and teams spending real time every week chasing new business.',
    proof: 'Built the lead generation and follow-up engine behind ProDetailer.app.',
    cta: "Let's talk about your lead problem",
  },
  {
    id: 'workflow-automation',
    title: 'Business workflow automation',
    description:
      'Client onboarding, reporting, scheduling, invoicing, data entry, and back-office loops mapped and rebuilt into faster workflows.',
    outcome: [
      'Hours returned each week',
      'Fewer manual errors and less copy-paste work',
      'Operational capacity without hiring just to handle admin',
    ],
    fit: 'Service businesses, clinics, agencies, and small ops teams repeating the same work over and over.',
    proof: 'Built automation and internal workflow tooling across multiple client and internal projects.',
    cta: "Tell me what's eating your team's time",
  },
  {
    id: 'custom-web-apps',
    title: 'Custom web apps and MVPs',
    description:
      'Focused products for a specific business problem: portals, calculators, dashboards, internal tools, or a sharp MVP with a commercial purpose.',
    outcome: [
      'A working product in weeks, not quarters',
      'Built around the exact workflow instead of forcing a generic tool',
      'Code you can keep extending after launch',
    ],
    fit: 'Founders who need a real first product and operators who have outgrown spreadsheets or stitched-together tools.',
    proof: 'Built ProDetailer.app and SalariuOk.ro as focused products for clear market needs.',
    cta: 'Describe what you need built',
  },
  {
    id: 'ai-enhanced-tooling',
    title: 'AI-enhanced internal tooling',
    description:
      'Practical AI layered into existing operations: summarization, information extraction, routing, content workflows, and internal assistant surfaces.',
    outcome: [
      'High-volume repetitive tasks handled automatically',
      'Useful outputs delivered inside the existing stack',
      'No full rebuild required just to add intelligence',
    ],
    fit: 'Teams processing documents, messages, or repetitive information flows in legal, finance, HR, operations, and content.',
    proof: 'Used across internal systems and automation-led builds where speed and triage matter.',
    cta: "Tell me what you're trying to automate",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="section-title mt-6">The work is scoped around one business problem at a time.</h1>
          </div>
          <p className="lede">
            If the outcome is not clear, I do not dress it up with process. These are the four categories where I am
            most useful and where the payoff is usually easiest to measure.
          </p>
        </div>
      </section>

      <section className="section-divider py-8">
        <div className="shell">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24 py-10 md:py-12">
                <div className="grid gap-8 lg:grid-cols-[100px_1.1fr_0.9fr] lg:gap-12">
                  <div className="font-display text-5xl text-rami-gold">0{index + 1}</div>

                  <div>
                    <h2 className="font-display text-4xl leading-tight text-rami-cream md:text-5xl">{service.title}</h2>
                    <p className="mt-5 text-base leading-8 text-rami-fog">{service.description}</p>
                    <p className="mt-6 label">Who this is for</p>
                    <p className="mt-3 text-sm leading-7 text-rami-fog">{service.fit}</p>
                    <p className="mt-6 label">Proof</p>
                    <p className="mt-3 text-sm leading-7 text-rami-fog">{service.proof}</p>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                    <p className="label">Primary outcomes</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-rami-cream">
                      {service.outcome.map((item) => (
                        <li key={item} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="button-secondary mt-8 w-full">
                      {service.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Need help choosing the right build?"
        subtext="Bring the problem, not the spec. I will tell you whether it wants outreach automation, a workflow rebuild, or a product."
        ctaLabel="Start the conversation"
      />
    </main>
  )
}
