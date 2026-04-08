import Link from 'next/link'
import { getCalendlyUrl } from '@/lib/site-config'

type Props = {
  headline: string
  subtext: string
  ctaLabel: string
  /** When true, CTA always goes to /contact (ignore Calendly). */
  contactOnly?: boolean
}

export default function CTAStrip({ headline, subtext, ctaLabel, contactOnly }: Props) {
  const cal = getCalendlyUrl()

  return (
    <section className="bg-rami-ink py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">{subtext}</p>
        <div className="mt-8">
          {cal && !contactOnly ? (
            <a
              href={cal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-rami-ink transition-colors hover:bg-white/90"
            >
              {ctaLabel}
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-rami-ink transition-colors hover:bg-white/90"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
