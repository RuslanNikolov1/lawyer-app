import { baseUrl } from './locales'
import type { Language } from './translations'
import { translations } from './translations'

const organizationId = `${baseUrl}/#organization`
const legalServiceId = `${baseUrl}/#legalservice`
const attorneyId = `${baseUrl}/#attorney`

export const siteLastModified = '2026-06-11'

export function buildPageJsonLd(locale: Language) {
  const t = translations[locale]
  const pageUrl = `${baseUrl}/${locale}`
  const firmName = locale === 'bg' ? 'Кутиев Адвокатска Кантора' : 'Kutiev Law Firm'
  const profileImageUrl = `${baseUrl}/profile-picture-960.webp`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: firmName,
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/Logo.svg`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+359883337696',
          email: 'hristo.kutiev@gmail.com',
          contactType: 'customer service',
          areaServed: 'BG',
          availableLanguage: ['English', 'Bulgarian'],
        },
      },
      {
        '@type': ['LegalService', 'LocalBusiness'],
        '@id': legalServiceId,
        name: firmName,
        description: t.seo.description,
        url: pageUrl,
        image: profileImageUrl,
        telephone: '+359883337696',
        email: 'hristo.kutiev@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: t.contact.address,
          addressLocality: 'Sofia',
          addressCountry: 'BG',
        },
        areaServed: {
          '@type': 'City',
          name: 'Sofia',
        },
        knowsAbout: [...t.practiceAreas.items],
        founder: { '@id': attorneyId },
        parentOrganization: { '@id': organizationId },
      },
      {
        '@type': ['Person', 'Attorney'],
        '@id': attorneyId,
        name: 'Hristo Kutiev',
        jobTitle: locale === 'bg' ? 'Адвокат' : 'Attorney-at-law',
        image: profileImageUrl,
        worksFor: { '@id': organizationId },
        hasCredential: t.qualifications.items.map((name) => ({
          '@type': 'EducationalOccupationalCredential',
          name,
        })),
        knowsAbout: [...t.practiceAreas.items],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.seo.title,
        description: t.seo.description,
        inLanguage: locale === 'bg' ? 'bg-BG' : 'en',
        dateModified: siteLastModified,
        about: { '@id': legalServiceId },
        isPartOf: { '@id': organizationId },
      },
    ],
  }
}
