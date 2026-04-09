'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getLocaleFromPathname } from '@/lib/locales'

export default function LocaleHtmlSync() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.lang = getLocaleFromPathname(pathname)
  }, [pathname])

  return null
}
