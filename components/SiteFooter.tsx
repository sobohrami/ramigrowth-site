'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getContactEmail } from '@/lib/site-config'
import { getLocaleFromPathname, localizePath } from '@/lib/locales'

export default function SiteFooter() {
  const email = getContactEmail()
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const copy =
    locale === 'ro'
      ? {
          eyebrow: 'RamiGrowth',
          headline: 'Automatizări AI pentru business-uri care vor mai multe lead-uri, mai puțină muncă manuală și mai mult control.',
          body:
            'Sisteme de lead generation, aplicații web custom și automatizări de procese construite cu scope clar și rezultat comercial măsurabil.',
          explore: 'Explorează',
          services: 'Servicii',
          work: 'Proiecte',
          faq: 'Întrebări',
          about: 'Despre',
          contact: 'Contact',
          contactTitle: 'Contact',
          location: 'Bazat în România, remote-first',
          availability: 'Disponibilitate selectivă pentru proiecte bine definite.',
          rights: `Copyright ${new Date().getFullYear()} RamiGrowth`,
          closing: 'Construit pentru claritate, viteză și leverage comercial.',
        }
      : {
          eyebrow: 'RamiGrowth',
          headline: 'AI automation systems for businesses that want more leads, less manual work, and better follow-through.',
          body:
            'Lead generation systems, custom web apps, and workflow automation built with a sharp scope and a direct commercial outcome.',
          explore: 'Explore',
          services: 'Services',
          work: 'Work',
          faq: 'FAQ',
          about: 'About',
          contact: 'Contact',
          contactTitle: 'Contact',
          location: 'Romania-based, remote-first',
          availability: 'Selective availability for scoped projects.',
          rights: `Copyright ${new Date().getFullYear()} RamiGrowth`,
          closing: 'Built for clarity, speed, and commercial leverage.',
        }

  return (
    <footer className="section-divider bg-[#07090d]">
      <div className="shell grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:py-16">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight text-rami-cream md:text-5xl">{copy.headline}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-rami-fog">{copy.body}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
          <div>
            <p className="label">{copy.explore}</p>
            <ul className="mt-5 space-y-3 text-sm text-rami-fog">
              <li>
                <Link href={localizePath('/services', locale)} className="hover:text-rami-cream">
                  {copy.services}
                </Link>
              </li>
              <li>
                <Link href={localizePath('/work', locale)} className="hover:text-rami-cream">
                  {copy.work}
                </Link>
              </li>
              <li>
                <Link href={localizePath('/faq', locale)} className="hover:text-rami-cream">
                  {copy.faq}
                </Link>
              </li>
              <li>
                <Link href={localizePath('/about', locale)} className="hover:text-rami-cream">
                  {copy.about}
                </Link>
              </li>
              <li>
                <Link href={localizePath('/contact', locale)} className="hover:text-rami-cream">
                  {copy.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label">{copy.contactTitle}</p>
            <div className="mt-5 space-y-3 text-sm text-rami-fog">
              <p>{copy.location}</p>
              {email ? (
                <p>
                  <a href={`mailto:${email}`} className="text-rami-gold hover:text-rami-goldSoft">
                    {email}
                  </a>
                </p>
              ) : null}
              <p>{copy.availability}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider">
        <div className="shell flex flex-col gap-3 py-6 text-xs uppercase tracking-[0.18em] text-rami-fog/60 md:flex-row md:items-center md:justify-between">
          <p>{copy.rights}</p>
          <p>{copy.closing}</p>
        </div>
      </div>
    </footer>
  )
}
