export type Locale = 'en' | 'ro'

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'ro'
}

export function getLocaleFromPathname(pathname: string) {
  return pathname === '/ro' || pathname.startsWith('/ro/') ? 'ro' : 'en'
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === '/ro') return '/'
  if (pathname.startsWith('/ro/')) return pathname.slice(3)
  return pathname
}

export function localizePath(path: string, locale: Locale) {
  if (locale === 'en') return path
  if (path === '/') return '/ro'
  return `/ro${path}`
}

export function swapLocaleInPath(pathname: string, locale: Locale) {
  return localizePath(stripLocalePrefix(pathname), locale)
}
