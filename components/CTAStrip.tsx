import Link from 'next/link'
import { getCalendlyUrl } from '@/lib/site-config'
import type { Locale } from '@/lib/locales'
import { localizePath } from '@/lib/locales'

type Props = {
  headline: string
  subtext: string
  ctaLabel: string
  contactOnly?: boolean
  locale?: Locale
}

export default function CTAStrip({ headline, subtext, ctaLabel, contactOnly, locale = 'en' }: Props) {
  const cal = getCalendlyUrl()
  const eyebrow = locale === 'ro' ? 'Următorul pas' : 'Next step'
  const helper =
    locale === 'ro'
      ? 'Problemă clară, recomandare rapidă și un următor pas direct.'
      : 'Clear problem, quick recommendation, and a direct next step.'

  return (
    <section className="section-divider relative overflow-hidden py-20 md:py-24">
      <div className="ambient-orb absolute left-[-120px] top-8 h-64 w-64 rounded-full bg-rami-gold/10 blur-3xl" />
      <div className="ambient-orb absolute bottom-[-80px] right-0 h-72 w-72 rounded-full bg-rami-steel/20 blur-3xl" />

      <div className="shell relative">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.25)] md:px-12 md:py-14">
          <p className="eyebrow">{eyebrow}</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h2 className="section-title max-w-3xl">{headline}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-rami-fog">{subtext}</p>
            </div>

            <div className="lg:justify-self-end">
              {cal && !contactOnly ? (
                <a href={cal} target="_blank" rel="noopener noreferrer" className="button-primary min-w-[220px]">
                  {ctaLabel}
                </a>
              ) : (
                <Link href={localizePath('/contact', locale)} className="button-primary min-w-[220px]">
                  {ctaLabel}
                </Link>
              )}
              <p className="mt-4 max-w-sm text-sm leading-7 text-rami-fog">{helper}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
