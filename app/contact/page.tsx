import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Discovery call first. Tell me about your operational problem and I respond within 24 hours.',
}

export default function ContactPage() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="section-title mt-6">Bring the bottleneck. I will tell you whether it is worth building.</h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-rami-fog">
              <p>
                I take on a small number of projects at a time. Before I say yes to anything, I want to understand the
                real business problem, the expected outcome, and whether this is the right tool for it.
              </p>
              <p>Most useful situations:</p>
              <ul className="space-y-3 pl-5 text-sm leading-7 text-rami-cream">
                <li>- You need qualified demand without more manual outbound effort</li>
                <li>- Your team is losing time to repetitive operational work</li>
                <li>- You need a focused internal tool or product built quickly</li>
              </ul>
              {cal ? (
                <p>
                  Prefer to talk first?{' '}
                  <a href={cal} target="_blank" rel="noopener noreferrer" className="text-rami-gold hover:text-rami-goldSoft">
                    Book a 20-minute discovery call
                  </a>
                  .
                </p>
              ) : null}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
