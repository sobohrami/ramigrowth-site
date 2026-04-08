import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import { CASE_STUDIES, listCaseStudySlugs } from '@/lib/case-studies'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return listCaseStudySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = CASE_STUDIES[params.slug]
  if (!cs) return {}
  return {
    title: cs.title,
    description: cs.outcome.slice(0, 160),
  }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = CASE_STUDIES[params.slug]
  if (!cs) notFound()

  return (
    <main>
      <article>
        <section className="border-b border-rami-border py-12 md:py-16">
          <div className="mx-auto max-w-content px-6">
            <Link href="/work" className="text-sm font-medium text-rami-link hover:underline">
              ← Back to Work
            </Link>
            <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-[40px]">{cs.title}</h1>
            <p className="mt-3 text-sm text-rami-muted">
              {cs.tags} · Status: {cs.status}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-content px-6">
            <div className="mx-auto max-w-prose space-y-10">
              <div>
                <h2 className="text-xl font-semibold">Context</h2>
                <p className="mt-4 text-rami-muted">{cs.context}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Problem</h2>
                <p className="mt-4 text-rami-muted">{cs.problem}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">What was built</h2>
                <p className="mt-4 text-rami-muted">{cs.solutionLead}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-rami-muted">
                  {cs.solutionBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="mt-6 text-rami-muted">{cs.solutionClosing}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Outcome</h2>
                <p className="mt-4 text-rami-muted">{cs.outcome}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Tools and stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.builtWith.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-rami-border bg-rami-surface px-3 py-1 text-sm text-rami-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTAStrip
        headline="Have a similar problem?"
        subtext="Describe what you need on the contact page — I respond within 24 hours."
        ctaLabel="Get in touch"
        contactOnly
      />
    </main>
  )
}
