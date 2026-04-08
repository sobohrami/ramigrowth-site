import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Lead generation, workflow automation, custom web apps, and AI-enhanced internal tooling — outcome-led builds.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-rami-border py-16 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="mx-auto max-w-prose">
            <h1 className="text-3xl font-bold tracking-tight md:text-[40px]">What I build</h1>
            <p className="mt-6 text-lg text-rami-muted">
              Four types of systems, each targeting a specific kind of problem. If you&apos;re not sure which fits,
              describe your problem in the contact form — I&apos;ll tell you.
            </p>
          </div>
        </div>
      </section>

      <section id="lead-generation" className="scroll-mt-24 border-b border-rami-border py-16 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="mx-auto max-w-prose">
            <h2 className="text-2xl font-bold">Lead Generation &amp; Outreach Systems</h2>
            <p className="mt-6 text-rami-muted">
              A custom-built system that finds your target prospects, sends personalized outreach (email, SMS, or DM
              depending on your industry), follows up automatically, and routes interested leads directly to you.
            </p>
            <p className="mt-4 font-medium text-rami-ink">Outcome</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-rami-muted">
              <li>A full appointment calendar without manual prospecting</li>
              <li>Follow-up sequences that run while you&apos;re doing the actual work</li>
              <li>Leads tracked and routed — no leads slipping through spreadsheets</li>
            </ul>
            <p className="mt-6 font-medium text-rami-ink">Who it&apos;s for</p>
            <p className="mt-2 text-rami-muted">
              Local service businesses, recruiters, B2B sales teams, or anyone spending real time each week finding and
              chasing customers.
            </p>
            <p className="mt-6 font-medium text-rami-ink">Proof</p>
            <p className="mt-2 text-rami-muted">
              Built the outreach and lead-gen module for ProDetailer.app — auto detailing businesses use it to generate
              and follow up with new prospects automatically.
            </p>
            <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-rami-link hover:underline">
              Let&apos;s talk about your lead problem →
            </Link>
          </div>
        </div>
      </section>

      <section id="workflow-automation" className="scroll-mt-24 border-b border-rami-border bg-rami-surface py-16 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="mx-auto max-w-prose">
            <h2 className="text-2xl font-bold">Business Workflow Automation</h2>
            <p className="mt-6 text-rami-muted">
              Find the repetitive manual processes running your operations — client onboarding, invoicing, scheduling,
              reporting, data entry — and replace them with automated workflows using the right tools for your stack.
            </p>
            <p className="mt-4 font-medium text-rami-ink">Outcome</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-rami-muted">
              <li>Hours back per week on tasks that shouldn&apos;t require a person</li>
              <li>Fewer errors from manual copy-paste and re-keying</li>
              <li>Faster operations without hiring more people to handle volume</li>
            </ul>
            <p className="mt-6 font-medium text-rami-ink">Who it&apos;s for</p>
            <p className="mt-2 text-rami-muted">
              Any business doing the same manual task more than 10 times per week. Especially common in trades, services,
              clinics, agencies, and small ops teams.
            </p>
            <p className="mt-6 font-medium text-rami-ink">Proof</p>
            <p className="mt-2 text-rami-muted">
              Built internal automation tooling and workflow systems across multiple client projects and internal builds.
            </p>
            <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-rami-link hover:underline">
              Tell me what&apos;s eating your team&apos;s time →
            </Link>
          </div>
        </div>
      </section>

      <section id="custom-web-apps" className="scroll-mt-24 border-b border-rami-border py-16 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="mx-auto max-w-prose">
            <h2 className="text-2xl font-bold">Custom Web Apps &amp; MVPs</h2>
            <p className="mt-6 text-rami-muted">
              Build a focused, functional web application to solve one specific business problem — a client portal,
              pricing calculator, booking system, internal dashboard, or SaaS MVP. Scoped tightly, built fast, shipped
              without unnecessary complexity.
            </p>
            <p className="mt-4 font-medium text-rami-ink">Outcome</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-rami-muted">
              <li>A working product in weeks, not months</li>
              <li>Built for the exact problem — not a platform configured around it</li>
              <li>Clean code you can hand off or build on later</li>
            </ul>
            <p className="mt-6 font-medium text-rami-ink">Who it&apos;s for</p>
            <p className="mt-2 text-rami-muted">
              Founders who need a working MVP without a six-figure agency quote. Businesses who&apos;ve outgrown
              spreadsheets and need a real tool. Operators who have a specific workflow that no off-the-shelf product
              covers.
            </p>
            <p className="mt-6 font-medium text-rami-ink">Proof</p>
            <p className="mt-2 text-rami-muted">
              Built ProDetailer.app (lead-gen and business ops for auto detailing) and SalariuOk.ro (salary benchmarking
              tool for the Romanian market).
            </p>
            <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-rami-link hover:underline">
              Describe what you need built →
            </Link>
          </div>
        </div>
      </section>

      <section id="ai-enhanced-tooling" className="scroll-mt-24 border-b border-rami-border bg-rami-surface py-16 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="mx-auto max-w-prose">
            <h2 className="text-2xl font-bold">AI-Enhanced Internal Tooling</h2>
            <p className="mt-6 text-rami-muted">
              Add AI to existing business workflows without rebuilding everything. Automated document processing, smart
              summaries, internal chatbots for FAQs, AI-assisted content pipelines — layered on top of what you already
              have.
            </p>
            <p className="mt-4 font-medium text-rami-ink">Outcome</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-rami-muted">
              <li>High-volume, low-complexity tasks handled automatically</li>
              <li>Information extracted, summarized, or routed without a person in the loop</li>
              <li>Works alongside your existing tools — no migration required</li>
            </ul>
            <p className="mt-6 font-medium text-rami-ink">Who it&apos;s for</p>
            <p className="mt-2 text-rami-muted">
              Businesses processing large amounts of repetitive information — legal, finance, real estate, HR,
              recruitment. Also useful for content teams running regular publishing workflows.
            </p>
            <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-rami-link hover:underline">
              Tell me what you&apos;re trying to automate →
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
