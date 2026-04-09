import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import { getFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'FAQ about AI automation, custom apps, and project timelines',
  description:
    'Common questions about RamiGrowth AI automation services, custom app builds, workflow automation, timelines, pricing, and fit.',
  alternates: {
    canonical: '/faq',
    languages: {
      en: '/faq',
      ro: '/ro/faq',
    },
  },
}

export default function FaqPage() {
  const items = getFaqs('en')
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">FAQ</p>
            <h1 className="section-title mt-6">Common questions about automation projects, custom apps, and working together.</h1>
          </div>
          <div className="space-y-6">
            <p className="lede">
              If you are deciding whether automation is worth it, how long a project takes, or whether your business is a good fit, start here.
            </p>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-rami-fog">
              These answers cover fit, timelines, tooling, pricing, and what happens after the first conversation.
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider py-8 md:py-12">
        <div className="shell grid gap-5">
          {items.map((item, index) => (
            <section key={item.question} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-rami-gold">0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-semibold text-rami-cream">{item.question}</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-rami-fog">{item.answer}</p>
            </section>
          ))}
        </div>
      </section>

      <CTAStrip
        headline="Still not sure what kind of system you need?"
        subtext="Tell me what is slowing the business down and I will help you find the right starting point."
        ctaLabel="Book a discovery call"
        locale="en"
      />
    </main>
  )
}
