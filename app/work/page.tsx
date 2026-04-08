import Link from 'next/link'
import type { Metadata } from 'next'
import { CASE_STUDIES } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies: ProDetailer.app and SalariuOk.ro, built for real business outcomes.',
}

export default function WorkPage() {
  const items = [CASE_STUDIES.prodetailer, CASE_STUDIES.salariuok]

  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Selected work</p>
            <h1 className="section-title mt-6">Products and systems built around a specific commercial job.</h1>
          </div>
          <p className="lede">
            These are not speculative concepts. Each build was shaped to solve a real operational or market problem, then
            shipped with a narrow focus.
          </p>
        </div>
      </section>

      <section className="section-divider py-8">
        <div className="shell grid gap-8">
          {items.map((cs, index) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:grid-cols-[120px_1fr] md:p-10"
            >
              <div className="flex flex-col justify-between">
                <p className="font-display text-6xl text-rami-gold">0{index + 1}</p>
                <p className="eyebrow">{cs.tags}</p>
              </div>

              <div>
                <h2 className="font-display text-4xl text-rami-cream md:text-5xl">{cs.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-rami-fog">{cs.outcome}</p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-rami-gold">Read case study</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
