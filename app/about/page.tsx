import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Builder and operator — custom automation systems, web applications, and AI-enhanced tools for real operational problems.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-rami-border py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <div className="mx-auto max-w-prose">
            <h1 className="text-3xl font-bold tracking-tight md:text-[40px]">Who&apos;s behind this</h1>
            <div className="mt-10 space-y-6 text-rami-muted">
              <p>I&apos;m a builder and operator, not an agency.</p>
              <p>
                I work on a small number of projects at a time and handle the work myself — no handoffs to junior devs, no
                account managers in the middle. When you talk to me, you&apos;re talking to the person building your
                system.
              </p>
              <p>
                What I actually do: build custom automation systems, web applications, and AI-enhanced tools for
                businesses that have real operational problems and need them solved, not theorized.
              </p>
            </div>
            <h2 className="mt-12 text-xl font-semibold text-rami-ink">Things I&apos;ve built</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-rami-muted">
              <li>
                <strong className="font-medium text-rami-ink">ProDetailer.app</strong> — Outreach and lead-gen automation
                for auto detailing businesses. Built the full platform, including the prospect-finding and follow-up
                system.
              </li>
              <li>
                <strong className="font-medium text-rami-ink">SalariuOk.ro</strong> — Salary benchmarking tool for the
                Romanian job market. Custom web app, live data, shipped fast.
              </li>
              <li>Internal tooling and workflow automation systems across various operations contexts.</li>
            </ul>
            <h2 className="mt-12 text-xl font-semibold text-rami-ink">How I work</h2>
            <div className="mt-4 space-y-6 text-rami-muted">
              <p>
                I scope projects before I take them. If I can&apos;t tell you what the outcome is before we start, I
                won&apos;t take the project. Tight scope, clear outcome, built fast — that&apos;s the approach.
              </p>
              <p>
                I don&apos;t do retainers until there&apos;s an established working relationship. I don&apos;t take on more
                projects than I can give proper attention to. I&apos;m not trying to build a large agency — I&apos;m
                trying to build things that actually work.
              </p>
              <p>
                If that sounds like the kind of person you want building your system,{' '}
                <Link href="/contact" className="font-medium text-rami-link hover:underline">
                  let&apos;s talk
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Have a problem that fits?"
        subtext="Let's spend 20 minutes figuring out if I can solve it. No pitch, no hard sell — just a direct conversation about what you need."
        ctaLabel="Book a discovery call"
      />
    </main>
  )
}
