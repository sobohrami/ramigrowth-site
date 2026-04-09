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
    default: 'RamiGrowth | AI Automation Services, Workflow Systems, and Custom Apps',
    template: '%s | RamiGrowth',
  },
  description:
    'RamiGrowth builds AI automation services, workflow systems, lead generation engines, and custom web apps for businesses that need real operational outcomes.',
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
    title: 'RamiGrowth | AI Automation Services, Workflow Systems, and Custom Apps',
    description:
      'RamiGrowth builds AI automation services, workflow systems, lead generation engines, and custom web apps for businesses that need real operational outcomes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RamiGrowth | AI Automation Services, Workflow Systems, and Custom Apps',
    description:
      'AI automation services, workflow systems, lead generation engines, and custom apps built for businesses that need real outcomes.',
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
