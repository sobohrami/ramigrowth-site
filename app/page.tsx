import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'I build systems that grow your business — automated outreach, custom apps, and workflow tools with real outcomes.',
}

const services = [
  {
    name: 'Lead Generation Systems',
    desc: 'Outreach automations that fill your calendar — without you manually finding prospects.',
    id: 'lead-generation',
  },
  {
    name: 'Workflow Automation',
    desc: 'Kill the repetitive tasks draining your team. Same work, fewer people-hours.',
    id: 'workflow-automation',
  },
  {
    name: 'Custom Web Apps',
    desc: 'Scoped, fast, functional. Built for the specific problem you actually have — not a generic platform you\'ll outgrow.',
    id: 'custom-web-apps',
  },
  {
    name: 'AI-Enhanced Tools',
    desc: 'Add intelligence to existing workflows without rebuilding everything from scratch.',
    id: 'ai-enhanced-tooling',
  },
]

export default function HomePage() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="border-b border-rami-border py-20 md:py-28">
        <div className="mx-auto max-w-content px-6">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-[52px] md:leading-[1.1]">
              I build systems that grow your business.
            </h1>
            <p className="mt-6 text-lg text-rami-muted md:text-xl">
              Automated outreach. Custom apps. Workflow tools.
              <br />
              Real outcomes — not tech for the sake of tech.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/work"
                className="inline-flex min-w-[160px] items-center justify-center rounded-md border border-rami-border bg-white px-6 py-3 text-sm font-semibold text-rami-ink transition-colors hover:border-rami-ink"
              >
                See my work
              </Link>
              {cal ? (
                <a
                  href={cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-md bg-rami-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
                >
                  Book a discovery call
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-md bg-rami-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
                >
                  Book a discovery call
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rami-border bg-rami-surface py-20 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-rami-muted">
            Why work with me
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            <div>
              <h3 className="text-lg font-semibold text-rami-ink">Speed</h3>
              <p className="mt-3 text-base text-rami-muted">
                From idea to working system in weeks, not months. No long discovery phases, no unnecessary meetings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rami-ink">Outcome-focused</h3>
              <p className="mt-3 text-base text-rami-muted">
                Every build targets a specific result — more leads, less manual work, or a working product. If I can&apos;t
                name the outcome upfront, I don&apos;t take the project.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rami-ink">No hand-holding needed</h3>
              <p className="mt-3 text-base text-rami-muted">
                I understand business problems, not just code. You don&apos;t need to know what the tech is called — just
                tell me what&apos;s costing you time or money.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rami-border py-20 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <h2 className="text-center text-2xl font-bold md:text-[28px]">What I build</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="flex flex-col rounded-lg border border-rami-border bg-white p-8 transition-colors hover:border-rami-muted"
              >
                <h3 className="text-lg font-semibold text-rami-ink">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-rami-muted">{s.desc}</p>
                <span className="mt-6 text-sm font-medium text-rami-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rami-border bg-rami-surface py-20 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <h2 className="text-2xl font-bold md:text-[28px]">Recent builds</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Link
              href="/work/prodetailer"
              className="block rounded-lg border border-rami-border bg-white p-8 transition-colors hover:border-rami-muted"
            >
              <h3 className="text-lg font-semibold text-rami-ink">ProDetailer.app</h3>
              <p className="mt-3 text-sm leading-relaxed text-rami-muted">
                Outreach and lead-gen automation for auto detailing businesses. Finds prospects, sends personalized
                follow-ups, routes leads — without manual work.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-rami-link">View case study →</span>
            </Link>
            <Link
              href="/work/salariuok"
              className="block rounded-lg border border-rami-border bg-white p-8 transition-colors hover:border-rami-muted"
            >
              <h3 className="text-lg font-semibold text-rami-ink">SalariuOk.ro</h3>
              <p className="mt-3 text-sm leading-relaxed text-rami-muted">
                Salary benchmarking tool for the Romanian job market. Custom-built web app, live data, clean interface.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-rami-link">View case study →</span>
            </Link>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Have a problem that fits?"
        subtext="Let's spend 20 minutes figuring out if I can solve it. No pitch, no hard sell — just a direct conversation about what you need."
        ctaLabel="Book a discovery call"
      />
    </main>
  )
}
