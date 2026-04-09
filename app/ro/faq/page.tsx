import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import { getFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Întrebări frecvente despre automatizări AI, aplicații custom și workflow-uri',
  description:
    'Întrebări frecvente despre serviciile RamiGrowth de automatizare AI, aplicații custom, automatizare workflow-uri, durată, preț și potrivire.',
  alternates: {
    canonical: '/ro/faq',
    languages: {
      en: '/faq',
      ro: '/ro/faq',
    },
  },
}

export default function FaqPageRo() {
  const items = getFaqs('ro')
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
            <p className="eyebrow">Întrebări frecvente</p>
            <h1 className="section-title mt-6">Răspunsuri despre automatizări AI, aplicații custom și modul în care rulează proiectele.</h1>
          </div>
          <div className="space-y-6">
            <p className="lede">
              Pagina aceasta răspunde la întrebările pe care cele mai multe business-uri le au înainte să înceapă un
              proiect de automatizare sau un build custom. Dacă știi deja care este bottleneck-ul, putem trece direct la conversație.
            </p>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-rami-fog">
              Răspunsurile clare și structurate ajută și motoarele de căutare sau sistemele AI să înțeleagă ce construiește
              RamiGrowth, pentru cine și cum încep colaborările.
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
        headline="Încă decizi ce tip de sistem ai nevoie?"
        subtext="Descrie bottleneck-ul, workflow-ul repetitiv sau blocajul de creștere. Îți spun ce direcție are sens prima."
        ctaLabel="Programează un discovery call"
        locale="ro"
      />
    </main>
  )
}
