import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import { getCaseStudy, listCaseStudySlugs } from '@/lib/case-studies'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return listCaseStudySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = getCaseStudy(params.slug, 'ro')
  if (!cs) return {}

  return {
    title: cs.title,
    description: cs.outcome.slice(0, 160),
  }
}

export default function CaseStudyPageRo({ params }: Props) {
  const cs = getCaseStudy(params.slug, 'ro')
  if (!cs) notFound()

  return (
    <main>
      <article>
        <section className="section-divider py-16 md:py-20">
          <div className="shell">
            <Link href="/ro/work" className="eyebrow hover:text-rami-goldSoft">
              Înapoi la proiecte
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
              <div>
                <h1 className="section-title">{cs.title}</h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-rami-fog">{cs.outcome}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
                <p className="label">Status</p>
                <p className="mt-3 text-lg text-rami-cream">{cs.status}</p>
                <p className="mt-6 label">Categorie</p>
                <p className="mt-3 text-sm leading-7 text-rami-fog">{cs.tags}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-10 md:py-16">
          <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <p className="label">Construit cu</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {cs.builtWith.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-rami-fog">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1323]/75 p-7">
                <p className="label">Citire sistem</p>
                <div className="mt-5 space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rami-gold">Context de business</p>
                    <p className="mt-3 text-sm leading-7 text-rami-fog">{cs.context}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rami-gold">Țintă de rezultat</p>
                    <p className="mt-3 text-sm leading-7 text-rami-fog">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">Problema</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.problem}</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">Ce a fost construit</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.solutionLead}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-rami-cream">
                  {cs.solutionBullets.map((bullet) => (
                    <li key={bullet} className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-base leading-8 text-rami-fog">{cs.solutionClosing}</p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTAStrip
        headline="Ai un bottleneck similar?"
        subtext="Descrie problema operațională și îți spun dacă are nevoie de workflow, aplicație sau o rezolvare mai simplă."
        ctaLabel="Intră în contact"
        contactOnly
        locale="ro"
      />
    </main>
  )
}
