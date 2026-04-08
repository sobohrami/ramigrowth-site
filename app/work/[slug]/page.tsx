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
        <section className="section-divider py-16 md:py-20">
          <div className="shell">
            <Link href="/work" className="eyebrow hover:text-rami-goldSoft">
              Back to work
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
              <div>
                <h1 className="section-title">{cs.title}</h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-rami-fog">{cs.outcome}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="label">Status</p>
                <p className="mt-3 text-lg text-rami-cream">{cs.status}</p>
                <p className="mt-6 label">Category</p>
                <p className="mt-3 text-sm leading-7 text-rami-fog">{cs.tags}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-10 md:py-16">
          <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="label">Built with</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {cs.builtWith.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-rami-fog">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">Context</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.context}</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">Problem</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.problem}</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">What was built</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.solutionLead}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-rami-cream">
                  {cs.solutionBullets.map((bullet) => (
                    <li key={bullet} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-base leading-8 text-rami-fog">{cs.solutionClosing}</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">Outcome</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.outcome}</p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTAStrip
        headline="Have a similar bottleneck?"
        subtext="Describe the operational problem and I will tell you whether it wants a workflow, an app, or a lighter fix."
        ctaLabel="Get in touch"
        contactOnly
      />
    </main>
  )
}
