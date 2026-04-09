import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact for AI Automation Services and Custom Build Projects',
  description:
    'Contact RamiGrowth about AI automation services, workflow automation, lead generation systems, or custom app builds. Discovery-first and response within 24 hours.',
  alternates: {
    canonical: '/contact',
    languages: {
      en: '/contact',
      ro: '/ro/contact',
    },
  },
}

const situations = [
  'You need qualified demand without doing more manual outbound work yourself.',
  'Your team keeps losing time in repetitive operational loops that should already be automated.',
  'You need a focused internal tool, client-facing app, or sharper AI system built quickly.',
]

const nextSteps = [
  ['01', 'Brief review', 'I read the problem, look for the real operational pressure, and decide if a build is justified.'],
  ['02', 'Fast recommendation', 'You get a direct answer on whether this wants automation, a custom app, or a lighter operational fix.'],
  ['03', 'Scoped next move', 'If there is a fit, we define the smallest useful version worth building first.'],
]

export default function ContactPage() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="section-title mt-6">Bring the bottleneck. I will tell you whether it is worth building.</h1>

            <div className="mt-8 space-y-5 text-base leading-8 text-rami-fog">
              <p>
                I take on a small number of projects at a time. Before I say yes to anything, I want to understand the
                real business problem, the expected outcome, and whether this is the right tool for it.
              </p>
              <p>The most useful situations are usually these:</p>
            </div>

            <div className="mt-8 space-y-3">
              {situations.map((item, index) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-rami-gold">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-rami-cream">{item}</p>
                </div>
              ))}
            </div>

            {cal ? (
              <p className="mt-8 text-sm leading-7 text-rami-fog">
                Prefer to talk first?{' '}
                <a href={cal} target="_blank" rel="noopener noreferrer" className="text-rami-gold hover:text-rami-goldSoft">
                  Book a 20-minute discovery call
                </a>
                .
              </p>
            ) : null}
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-9">
              <div className="mb-8 border-b border-white/10 pb-6">
                <p className="eyebrow text-rami-gold/90">Project brief</p>
                <p className="mt-4 text-sm leading-7 text-rami-fog">
                  Short, specific, and grounded in the real workflow. That makes the answer much better.
                </p>
              </div>
              <ContactForm locale="en" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {nextSteps.map(([step, title, body]) => (
                <div key={step} className="rounded-[1.4rem] border border-white/10 bg-[#0a1323]/72 p-5">
                  <p className="font-display text-3xl text-rami-gold/80">{step}</p>
                  <h2 className="mt-4 text-lg font-semibold text-rami-cream">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-rami-fog">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
