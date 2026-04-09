'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getLocaleFromPathname, localizePath, swapLocaleInPath } from '@/lib/locales'
import { cn } from '@/lib/utils'

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const locale = getLocaleFromPathname(pathname)
  const copy =
    locale === 'ro'
      ? {
          strap: 'Studio de automatizare',
          links: [
            { href: '/services', label: 'Servicii' },
            { href: '/work', label: 'Proiecte' },
            { href: '/about', label: 'Despre' },
            { href: '/contact', label: 'Contact' },
          ],
          home: 'Acasă',
          otherLang: 'English',
          cta: 'Pornește un proiect',
        }
      : {
          strap: 'Automation studio',
          links: [
            { href: '/services', label: 'Services' },
            { href: '/work', label: 'Work' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ],
          home: 'Home',
          otherLang: 'Romanian',
          cta: 'Start a project',
        }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-rami-night/70 backdrop-blur-xl">
      <div className="shell flex items-center justify-between py-3 md:py-4">
        <Link href={localizePath('/', locale)} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rami-gold/50 bg-white/5 font-display text-xl text-rami-gold">
            R
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-rami-fog/70">{copy.strap}</p>
            <p className="font-display text-[1.7rem] leading-none text-rami-cream md:text-2xl">RamiGrowth</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {copy.links.map(({ href, label }) => (
            <Link
              key={href}
              href={localizePath(href, locale)}
              className={cn(
                'text-sm font-medium text-rami-fog/80 hover:text-rami-cream',
                pathname === localizePath(href, locale) && 'text-rami-cream',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={swapLocaleInPath(pathname, locale === 'en' ? 'ro' : 'en')}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-rami-fog hover:border-white/20 hover:text-rami-cream"
          >
            {locale === 'en' ? 'RO' : 'EN'}
          </Link>
          <Link href={localizePath('/contact', locale)} className="button-secondary px-5 py-2.5 text-xs">
            {copy.cta}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5 text-rami-cream" aria-hidden /> : <Menu className="h-5 w-5 text-rami-cream" aria-hidden />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-rami-night/95 md:hidden">
          <nav className="shell flex flex-col gap-5 py-6" aria-label="Mobile primary">
            <Link href={localizePath('/', locale)} onClick={() => setOpen(false)} className="text-lg font-medium text-rami-cream">
              {copy.home}
            </Link>
            {copy.links.map(({ href, label }) => (
              <Link
                key={href}
                href={localizePath(href, locale)}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-rami-fog"
              >
                {label}
              </Link>
            ))}
            <Link
              href={swapLocaleInPath(pathname, locale === 'en' ? 'ro' : 'en')}
              onClick={() => setOpen(false)}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-rami-fog"
            >
              {copy.otherLang}
            </Link>
            <Link href={localizePath('/contact', locale)} onClick={() => setOpen(false)} className="button-primary w-full">
              {copy.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
