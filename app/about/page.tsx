import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Builder and operator: custom automation systems, web applications, and AI-enhanced tools for real operational problems.',
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
    body: 'Romania-first salary benchmarking product with a focused decision surface.',
  },
  {
    label: 'Bias',
    title: 'Tight scope',
    body: 'Clear problem, sharp execution, useful first version, then refinement.',
  },
]

const principles = [
  'Direct execution without an account-manager layer',
  'Small number of active projects at any one time',
  'Commercial outcomes prioritized over theater and jargon',
]

export default function AboutPage() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="section-title mt-6">Builder first. Operator-minded. Close to the work.</h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>I work directly on a small number of systems instead of trying to look like a giant agency machine.</p>
            <p>
              That means no junior handoff chain, no padded process invented to justify a bigger invoice, and no separation
              between the person scoping the system and the person building it.
            </p>
            <p>
              Most projects fall into one of three buckets: revenue generation, operational efficiency, or a focused
              product surface that should exist because the current tool stack is not enough.
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
            <p className="eyebrow">Operating model</p>
            <h2 className="section-title mt-6">The model is simple: see the pressure clearly, then build the system that removes it.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1323]/75 p-7">
              <p className="label">How I work</p>
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
                I scope before I commit. If the business win cannot be named upfront, it is usually too early to build.
              </p>
              <p>
                The goal is not to maximize project count. The goal is to ship systems that become genuinely useful inside
                a business and keep compounding after launch.
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
        subtext="That is the whole model: small number of projects, sharp scope, direct execution, and systems that are expected to work in the real world."
        ctaLabel="Book a discovery call"
        locale="en"
      />
    </main>
  )
}
