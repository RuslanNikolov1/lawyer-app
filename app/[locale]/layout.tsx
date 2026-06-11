import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { baseUrl, isValidLocale, locales } from '../../lib/locales'
import { translations } from '../../lib/translations'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#274597',
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    return {}
  }

  const { seo } = translations[locale]
  const ogLocale = locale === 'bg' ? 'bg_BG' : 'en_US'

  return {
    metadataBase: new URL(baseUrl),
    title: seo.title,
    description: seo.description,
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: `${baseUrl}/${locale}`,
      siteName: 'Kutiev Law Firm',
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        bg: '/bg',
        'x-default': '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='${locale}'`,
        }}
      />
      {children}
    </>
  )
}
