import Link from 'next/link'
import type { Metadata } from 'next'
import { CASE_STUDIES } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies: ProDetailer.app and SalariuOk.ro — systems built for real business outcomes.',
}

export default function WorkPage() {
  const items = [CASE_STUDIES.prodetailer, CASE_STUDIES.salariuok]

  return (
    <main>
      <section className="border-b border-rami-border py-16 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-[40px]">Work</h1>
          <p className="mt-6 max-w-prose text-lg text-rami-muted">
            Selected builds — outcome-led systems and custom applications.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {items.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="block rounded-lg border border-rami-border bg-rami-surface p-8 transition-colors hover:border-rami-muted"
              >
                <h2 className="text-xl font-semibold text-rami-ink">{cs.title}</h2>
                <p className="mt-2 text-xs text-rami-muted">{cs.tags}</p>
                <p className="mt-4 text-sm leading-relaxed text-rami-muted">{cs.outcome}</p>
                <span className="mt-6 inline-block text-sm font-medium text-rami-link">Read case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
