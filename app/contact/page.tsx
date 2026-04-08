import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Discovery call first — tell me about your operational problem. I respond within 24 hours.',
}

export default function ContactPage() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="border-b border-rami-border py-16 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-[40px]">Let&apos;s talk</h1>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-prose text-rami-muted">
              <p>
                I take on a small number of projects at a time. Before saying yes to anything, I do a 20-minute discovery
                call to understand the problem and whether I&apos;m the right person to solve it.
              </p>
              <p className="mt-6 font-medium text-rami-ink">I&apos;m most useful if:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  You have a specific operational problem you need solved (lead generation, workflow inefficiency, a tool
                  that doesn&apos;t exist yet)
                </li>
                <li>You want something built and shipped — not endlessly planned</li>
                <li>You&apos;re a business owner or operator, not looking for a long-term agency relationship</li>
              </ul>
              <p className="mt-6">
                If that fits, fill in the form below and I&apos;ll respond within 24 hours.
              </p>
              {cal ? (
                <p className="mt-10 text-sm">
                  Or if you&apos;d rather talk first:{' '}
                  <a href={cal} target="_blank" rel="noopener noreferrer" className="font-semibold text-rami-link hover:underline">
                    Book a 20-minute discovery call
                  </a>
                </p>
              ) : null}
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
