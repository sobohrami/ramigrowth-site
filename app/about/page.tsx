import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'About RamiGrowth, a Romania-based AI automation studio',
  description:
    'Learn how RamiGrowth works: a Romania-based AI automation studio focused on lead generation systems, workflow automation, and custom software for practical business needs.',
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
    body: 'A salary benchmarking product designed for the Romanian market.',
  },
  {
    label: 'Model',
    title: 'Direct collaboration',
    body: 'Clear scope, one accountable builder, useful first version, then refinement.',
  },
]

const principles = [
  'You work directly with the person designing and building the system.',
  'Only a small number of projects run at the same time.',
  'The work is judged by business results, not AI jargon.',
]

export default function AboutPage() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="section-title mt-6">RamiGrowth is a Romania-based AI automation studio for practical business systems.</h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>
              The goal is simple: help businesses generate more demand, remove repetitive work, and build tools that make execution easier.
            </p>
            <p>
              You work directly with the person shaping the system. That keeps decisions tighter, delivery faster, and the project much closer to the real workflow.
            </p>
            <p>
              Most projects begin with one of three needs: bring in more leads, automate a process that wastes time, or build a focused internal or client-facing tool.
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
            <p className="eyebrow">How the work runs</p>
            <h2 className="section-title mt-6">Clear problem, tight scope, useful first release.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1323]/75 p-7">
              <p className="label">Working principles</p>
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
                If the business outcome is not clear enough to name, it is usually too early to build. The first job is to understand what the system needs to improve.
              </p>
              <p>
                The aim is not to run as many projects as possible. The aim is to ship systems that keep saving time or creating revenue after launch.
              </p>
              <p>
                If that sounds like the kind of collaboration you want,{' '}
                <Link href="/contact" className="text-rami-gold hover:text-rami-goldSoft">
                  start the conversation
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Want a builder who stays close to the actual business problem?"
        subtext="That is the model: direct collaboration, clear scope, and systems built to be useful in the real world."
        ctaLabel="Book a discovery call"
        locale="en"
      />
    </main>
  )
}
