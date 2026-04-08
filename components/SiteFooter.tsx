import Link from 'next/link'
import { getContactEmail } from '@/lib/site-config'

export default function SiteFooter() {
  const email = getContactEmail()

  return (
    <footer className="section-divider bg-[#07090d]">
      <div className="shell grid gap-16 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow">RamiGrowth</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight text-rami-cream md:text-5xl">
            Systems for operators who want momentum, not another strategy deck.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-rami-fog">
            Outreach engines, internal tools, and automation systems built with a sharp scope and a direct commercial
            outcome.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="label">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-rami-fog">
              <li>
                <Link href="/services" className="hover:text-rami-cream">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-rami-cream">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rami-cream">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rami-cream">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-rami-fog">
              <p>Romania-based, remote-first</p>
              {email ? (
                <p>
                  <a href={`mailto:${email}`} className="text-rami-gold hover:text-rami-goldSoft">
                    {email}
                  </a>
                </p>
              ) : null}
              <p>Selective availability for scoped projects.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider">
        <div className="shell flex flex-col gap-3 py-6 text-xs uppercase tracking-[0.18em] text-rami-fog/60 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} RamiGrowth</p>
          <p>Built for speed, clarity, and commercial leverage.</p>
        </div>
      </div>
    </footer>
  )
}
