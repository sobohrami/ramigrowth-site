import type { Metadata } from 'next'
import { Manrope, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import LocaleHtmlSync from '@/components/LocaleHtmlSync'
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
    default: 'RamiGrowth | AI Automation Services, Lead Generation Systems, and Custom Apps',
    template: '%s | RamiGrowth',
  },
  description:
    'RamiGrowth builds AI automation services, lead generation systems, workflow automation, and custom web apps for service businesses and operator-led teams.',
  metadataBase: new URL(getSiteUrl()),
  keywords: [
    'AI automation services',
    'workflow automation',
    'lead generation systems',
    'custom web apps',
    'AI agency Romania',
    'business process automation',
    'automation studio',
  ],
  alternates: {
    languages: {
      en: '/',
      ro: '/ro',
    },
  },
  openGraph: {
    title: 'RamiGrowth | AI Automation Services, Lead Generation Systems, and Custom Apps',
    description:
      'RamiGrowth builds AI automation services, lead generation systems, workflow automation, and custom web apps for service businesses and operator-led teams.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RamiGrowth | AI Automation Services, Lead Generation Systems, and Custom Apps',
    description:
      'AI automation services, lead generation systems, workflow automation, and custom apps built for businesses that need real outcomes.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <LocaleHtmlSync />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
