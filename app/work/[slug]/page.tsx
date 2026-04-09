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
  const cs = getCaseStudy(params.slug, 'en')
  if (!cs) return {}

  return {
    title: `${cs.title} Case Study`,
    description: cs.outcome.slice(0, 160),
    alternates: {
      canonical: `/work/${params.slug}`,
      languages: {
        en: `/work/${params.slug}`,
        ro: `/ro/work/${params.slug}`,
      },
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudy(params.slug, 'en')
  if (!cs) notFound()

  const proofStrip = [
    ['Status', cs.status],
    ['Category', cs.tags],
    ['System focus', cs.builtWith[0] ?? 'Custom system'],
  ]

  return (
    <main>
      <article>
        <section className="section-divider py-16 md:py-20">
          <div className="shell">
            <Link href="/work" className="eyebrow hover:text-rami-goldSoft">
              Back to case studies
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <h1 className="section-title">{cs.title}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-rami-cream/90">{cs.outcome}</p>
              </div>

              <div className="rounded-[1.9rem] border border-white/10 bg-[#0a1323]/75 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
                <p className="label">System snapshot</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {proofStrip.map(([label, value]) => (
                    <div key={label} className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rami-gold">{label}</p>
                      <p className="mt-3 text-sm leading-7 text-rami-fog">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-10 md:py-16">
          <div className="shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6">
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

              <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1323]/75 p-7">
                <p className="label">Operating readout</p>
                <div className="mt-5 space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rami-gold">Business context</p>
                    <p className="mt-3 text-sm leading-7 text-rami-fog">{cs.context}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rami-gold">Outcome target</p>
                    <p className="mt-3 text-sm leading-7 text-rami-fog">{cs.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7">
                <p className="label">System anatomy</p>
                <div className="mt-5 space-y-3">
                  {[
                    'A real pressure point is identified clearly',
                    'The workflow or product layer is scoped tightly',
                    'The build is shipped for real-world use, not just presentation',
                  ].map((item) => (
                    <div key={item} className="rounded-[1.1rem] border border-white/10 px-4 py-3 text-sm leading-7 text-rami-fog">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">Problem</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.problem}</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">What was built</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">{cs.solutionLead}</p>
                <div className="mt-5 grid gap-3">
                  {cs.solutionBullets.map((bullet, index) => (
                    <div key={bullet} className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rami-gold">0{index + 1}</p>
                      <p className="mt-3 text-sm leading-7 text-rami-cream">{bullet}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-rami-fog">{cs.solutionClosing}</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="eyebrow">Why it matters</p>
                <p className="mt-4 text-base leading-8 text-rami-fog">
                  The point was not to create a prettier interface or a more fashionable stack. The point was to remove
                  a real business drag and replace it with a system that keeps creating leverage after launch.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTAStrip
        headline="Have a similar bottleneck?"
        subtext="Describe the operational problem and I will tell you whether it wants a workflow, a custom app, or a lighter fix."
        ctaLabel="Get in touch"
        contactOnly
        locale="en"
      />
    </main>
  )
}
