import Link from 'next/link'
import { getContactEmail } from '@/lib/site-config'

export default function SiteFooter() {
  const email = getContactEmail()

  return (
    <footer className="border-t border-rami-border bg-white py-16">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-rami-ink">Quick links</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-rami-muted">
            <li>
              <Link href="/services" className="transition-colors hover:text-rami-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/work" className="transition-colors hover:text-rami-link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-rami-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-rami-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-rami-ink">RamiGrowth</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-rami-muted">
            Custom automation systems, web applications, and AI-enhanced tools — built for operators who
            need outcomes, not slides.
          </p>
          {email ? (
            <p className="mt-4 text-sm">
              <a href={`mailto:${email}`} className="text-rami-link transition-colors hover:underline">
                {email}
              </a>
            </p>
          ) : null}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1100px] border-t border-rami-border px-6 pt-8">
        <p className="text-xs text-rami-muted">© {new Date().getFullYear()} RamiGrowth. All rights reserved.</p>
      </div>
    </footer>
  )
}
