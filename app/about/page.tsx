import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Builder and operator: custom automation systems, web applications, and AI-enhanced tools for real operational problems.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="section-title mt-6">Builder first. Operator-minded. Not an agency machine.</h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>I work on a small number of projects at a time and handle the work directly.</p>
            <p>
              No junior handoff chain, no account manager layer, and no padded process to justify a bigger invoice. When
              you talk to me, you are talking to the person shaping and building the system.
            </p>
            <p>
              The work itself usually lands in one of three buckets: revenue generation, operational efficiency, or a
              focused product that needs to exist because the current tool stack is not enough.
            </p>
          </div>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-8 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="label">Built</p>
            <p className="mt-4 font-display text-3xl text-rami-cream">ProDetailer.app</p>
            <p className="mt-4 text-sm leading-7 text-rami-fog">
              Lead generation and follow-up automation for auto detailing businesses.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="label">Built</p>
            <p className="mt-4 font-display text-3xl text-rami-cream">SalariuOk.ro</p>
            <p className="mt-4 text-sm leading-7 text-rami-fog">
              Salary benchmarking product for the Romanian market with a focused user experience.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="label">Approach</p>
            <p className="mt-4 font-display text-3xl text-rami-cream">Tight scope</p>
            <p className="mt-4 text-sm leading-7 text-rami-fog">
              Clear outcome, direct communication, and a strong bias toward shipping something useful fast.
            </p>
          </div>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Working style</p>
            <h2 className="section-title mt-6">If the outcome cannot be named upfront, I do not take the project.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>
              I scope before I commit. The fastest way to waste time is to start building something that does not have a
              clear business win attached to it.
            </p>
            <p>
              I also do not try to stack a huge client roster. The point is not to look big. The point is to ship things
              that genuinely work and deserve to keep compounding after launch.
            </p>
            <p>
              If that sounds like the kind of partnership you want,{' '}
              <Link href="/contact" className="text-rami-gold hover:text-rami-goldSoft">
                start a conversation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Need a builder who can stay close to the actual business problem?"
        subtext="That is the whole model. Small number of projects, sharp scope, direct execution."
        ctaLabel="Book a discovery call"
      />
    </main>
  )
}
