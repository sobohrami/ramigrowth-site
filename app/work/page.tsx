import Link from 'next/link'
import type { Metadata } from 'next'
import { getCaseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Case studies in lead generation, automation, and product builds',
  description:
    'Review RamiGrowth case studies across lead generation systems, workflow automation, and product builds including ProDetailer.app and SalariuOk.ro.',
  alternates: {
    canonical: '/work',
    languages: {
      en: '/work',
      ro: '/ro/work',
    },
  },
}

export default function WorkPage() {
  const items = getCaseStudies('en')
  const proofPoints = [
    'Lead generation systems for service businesses',
    'Automation and product builds designed to launch, not just pitch',
    'Romanian-market products plus client delivery systems',
  ]

  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Work</p>
            <h1 className="section-title mt-6">Recent projects in lead generation, workflow automation, and product builds.</h1>
          </div>
          <div className="space-y-6">
            <p className="lede">
              These projects show how RamiGrowth turns a specific business problem into a working system people can actually use.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-rami-fog">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider py-8 md:py-10">
        <div className="shell grid gap-8">
          {items.map((cs, index) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-rami-gold/30 hover:bg-white/[0.06] md:grid-cols-[110px_1.2fr_0.8fr] md:p-10"
            >
              <div className="flex flex-col justify-between">
                <p className="font-display text-6xl text-rami-gold/80">0{index + 1}</p>
                <p className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-rami-fog/70">
                  {cs.status}
                </p>
              </div>

              <div>
                <h2 className="font-display text-4xl text-rami-cream md:text-5xl">{cs.title}</h2>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-rami-gold">{cs.tags}</p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-rami-fog">{cs.outcome}</p>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-[1.5rem] border border-white/10 bg-[#0a1323]/75 p-5">
                <div>
                  <p className="label">Built with</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cs.builtWith.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-rami-fog">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rami-gold group-hover:text-rami-goldSoft">
                  Read case study
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
