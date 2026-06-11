import type { MetadataRoute } from 'next'
import { baseUrl, locales } from '../lib/locales'

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }))
}
