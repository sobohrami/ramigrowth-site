'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-rami-night/70 backdrop-blur-xl">
      <div className="shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rami-gold/50 bg-white/5 font-display text-xl text-rami-gold">
            R
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rami-fog/70">Automation studio</p>
            <p className="font-display text-2xl leading-none text-rami-cream">RamiGrowth</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium text-rami-fog/80 hover:text-rami-cream',
                pathname === href && 'text-rami-cream',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="button-secondary px-5 py-2.5 text-xs">
            Start a project
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
          <nav className="shell flex flex-col gap-6 py-8" aria-label="Mobile primary">
            <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium text-rami-cream">
              Home
            </Link>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="text-lg font-medium text-rami-fog">
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="button-primary w-full">
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
