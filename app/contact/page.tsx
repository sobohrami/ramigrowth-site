import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact for AI automation services and custom software projects',
  description:
    'Contact RamiGrowth about AI automation, lead generation systems, workflow automation, or custom software. Discovery-first and response within 24 hours.',
  alternates: {
    canonical: '/contact',
    languages: {
      en: '/contact',
      ro: '/ro/contact',
    },
  },
}

const situations = [
  'You need more qualified demand without handling more manual outbound yourself.',
  'Your team keeps losing time inside repetitive workflows that should already be automated.',
  'You need a focused internal tool, client-facing app, or AI workflow built clearly and quickly.',
]

const nextSteps = [
  ['01', 'Review the problem', 'I read the brief, look for the real point of friction, and decide whether a build makes sense.'],
  ['02', 'Recommend the right path', 'You get a direct answer on whether this needs automation, custom software, or a lighter fix.'],
  ['03', 'Define the first version', 'If there is a fit, we scope the smallest useful version worth building first.'],
]

export default function ContactPage() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="section-title mt-6">Tell me what is slowing the business down.</h1>

            <div className="mt-8 space-y-5 text-base leading-8 text-rami-fog">
              <p>
                If the problem is clear, I can usually tell quickly whether it needs automation, custom software, or a simpler operational fix.
              </p>
              <p>The most useful starting points usually look like this:</p>
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
                  Keep it short and specific. The clearer the workflow or business problem, the better the recommendation.
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
