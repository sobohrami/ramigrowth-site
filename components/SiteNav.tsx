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
    <header className="sticky top-0 z-50 border-b border-rami-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-rami-ink transition-colors hover:text-rami-link"
          onClick={() => setOpen(false)}
        >
          RamiGrowth
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-[15px] font-medium text-rami-muted transition-colors hover:text-rami-ink',
                pathname === href && 'text-rami-ink',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-rami-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5 text-rami-ink" aria-hidden /> : <Menu className="h-5 w-5 text-rami-ink" aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[57px] z-40 flex flex-col bg-white px-6 py-8 md:hidden"
        >
          <nav className="flex flex-col gap-6 text-lg font-medium" aria-label="Mobile primary">
            <Link href="/" onClick={() => setOpen(false)} className="text-rami-ink">
              Home
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-rami-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
