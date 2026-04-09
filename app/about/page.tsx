import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'About RamiGrowth and the AI Automation Studio Model',
  description:
    'Learn how RamiGrowth works: a builder-led AI automation studio focused on lead generation systems, workflow automation, and custom software for real business problems.',
  alternates: {
    canonical: '/about',
    languages: {
      en: '/about',
      ro: '/ro/about',
    },
  },
}

const proof = [
  {
    label: 'Built',
    title: 'ProDetailer.app',
    body: 'Lead generation and follow-up automation for auto detailing businesses.',
  },
  {
    label: 'Built',
    title: 'SalariuOk.ro',
    body: 'A Romania-first salary benchmarking product designed around a clear decision workflow.',
  },
  {
    label: 'Approach',
    title: 'Tight scope',
    body: 'Clear problem, useful first version, direct execution, then refinement.',
  },
]

const principles = [
  'Builder-led execution without an account-manager layer',
  'Small number of active projects at any one time',
  'Commercial outcomes prioritized over jargon and process theater',
]

export default function AboutPage() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="section-title mt-6">A small AI automation studio built for direct execution.</h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>
              RamiGrowth works like a builder-led studio, not a bloated agency model. The person diagnosing the
              bottleneck is the same person shaping the system.
            </p>
            <p>
              That means fewer handoffs, tighter decisions, and faster delivery. It also means projects stay grounded in
              the real workflow instead of drifting into generic AI positioning.
            </p>
            <p>
              Most work falls into three lanes: demand generation, operations automation, or a focused product surface
              that should exist because the current stack is no longer enough.
            </p>
          </div>
        </div>
      </section>

      <section className="section-divider py-10 md:py-14">
        <div className="shell grid gap-6 md:grid-cols-3">
          {proof.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.18)]">
              <p className="label">{item.label}</p>
              <p className="mt-4 font-display text-3xl text-rami-cream">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-rami-fog">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">How projects run</p>
            <h2 className="section-title mt-6">See the pressure clearly, then build the smallest system that removes it.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1323]/75 p-7">
              <p className="label">Operating principles</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-rami-cream">
                {principles.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-base leading-8 text-rami-fog">
              <p>
                I scope before I commit. If the business win cannot be named clearly up front, it is usually too early to build.
              </p>
              <p>
                The goal is not to maximize project count. The goal is to ship systems that become useful inside a real
                business and keep compounding after launch.
              </p>
              <p>
                If that sounds like the partnership you want,{' '}
                <Link href="/contact" className="text-rami-gold hover:text-rami-goldSoft">
                  start a conversation
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Need a builder who can stay close to the actual business problem?"
        subtext="That is the model: small number of projects, sharp scope, direct execution, and systems that are expected to work in the real world."
        ctaLabel="Book a discovery call"
        locale="en"
      />
    </main>
  )
}
