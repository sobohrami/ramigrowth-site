import type { Metadata } from 'next'
import { Manrope, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { getSiteUrl } from '@/lib/site-config'

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'RamiGrowth | Systems that grow your business',
    template: '%s | RamiGrowth',
  },
  description:
    'Automated outreach, custom web apps, and workflow automation built for business owners who need real outcomes.',
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    title: 'RamiGrowth | Systems that grow your business',
    description:
      'Automated outreach, custom web apps, and workflow automation built for business owners who need real outcomes.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
