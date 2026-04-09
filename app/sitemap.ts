import type { MetadataRoute } from 'next'
import { listCaseStudySlugs } from '@/lib/case-studies'
import { getSiteUrl } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const staticPages = ['/', '/services', '/work', '/faq', '/about', '/contact']

  const localizedStatic = staticPages.flatMap((path) => [
    {
      url: `${siteUrl}${path}`,
      alternates: {
        languages: {
          en: `${siteUrl}${path}`,
          ro: `${siteUrl}${path === '/' ? '/ro' : `/ro${path}`}`,
        },
      },
    },
    {
      url: `${siteUrl}${path === '/' ? '/ro' : `/ro${path}`}`,
      alternates: {
        languages: {
          en: `${siteUrl}${path}`,
          ro: `${siteUrl}${path === '/' ? '/ro' : `/ro${path}`}`,
        },
      },
    },
  ])

  const caseStudies = listCaseStudySlugs().flatMap((slug) => [
    {
      url: `${siteUrl}/work/${slug}`,
      alternates: {
        languages: {
          en: `${siteUrl}/work/${slug}`,
          ro: `${siteUrl}/ro/work/${slug}`,
        },
      },
    },
    {
      url: `${siteUrl}/ro/work/${slug}`,
      alternates: {
        languages: {
          en: `${siteUrl}/work/${slug}`,
          ro: `${siteUrl}/ro/work/${slug}`,
        },
      },
    },
  ])

  return [...localizedStatic, ...caseStudies]
}
