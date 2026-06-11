import { cacheLife } from 'next/cache'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import { baseUrl, isValidLocale } from '../../lib/locales'
import { translations } from '../../lib/translations'
import styles from './page.module.scss'

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: PageProps) {
  'use cache'
  cacheLife('max')

  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const t = translations[locale]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness'],
    name: locale === 'bg' ? 'Кутиев Адвокатска Кантора' : 'Kutiev Law Firm',
    description: t.seo.description,
    url: `${baseUrl}/${locale}`,
    telephone: '+359883337696',
    email: 'hristo.kutiev@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: t.contact.address,
      addressLocality: 'Sofia',
      addressCountry: 'BG',
    },
    founder: {
      '@type': 'Person',
      name: 'Hristo Kutiev',
      jobTitle: locale === 'bg' ? 'Адвокат' : 'Attorney-at-law',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sofia',
    },
    knowsAbout: t.practiceAreas.items,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LanguageSwitcher />
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src="/Logo.svg"
              alt={t.logoAlt}
              width={100}
              height={100}
              className={styles.logo}
              priority
              unoptimized
            />
          </div>
          <div className={styles.firmNameContainer}>
            <h1 className={styles.firmName}>{t.firmName}</h1>
            <p
              className={
                locale === 'bg'
                  ? `${styles.firmTitle} ${styles.firmTitleBulgarian}`
                  : styles.firmTitle
              }
            >
              - {t.firmTitle} -
            </p>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.contentGrid}>
            <section
              className={`${styles.section} ${styles.qualifications} ${styles.qualificationsFade}`}
            >
              <ul className={styles.list}>
                {t.qualifications.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className={styles.separator}></div>
            </section>

            <section
              className={`${styles.section} ${styles.practiceAreas} ${styles.practiceAreasFade}`}
            >
              <ul className={styles.list}>
                {t.practiceAreas.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className={styles.separator}></div>
            </section>

            <section
              className={`${styles.section} ${styles.descriptionSection} ${styles.descriptionFade}`}
            >
              <p className={styles.description}>
                {t.description.line1}
                <br />
                {t.description.line2}
                <br />
                {t.description.line3}
                <br />
                {t.description.line4}
              </p>
              <div className={styles.separator}></div>
            </section>

            <div className={styles.centerColumn}>
              <div className={styles.imageContainer}>
                <Image
                  src="/Profile Picture.png"
                  alt={t.profileImageAlt}
                  width={600}
                  height={800}
                  className={styles.profileImage}
                  priority
                  sizes="(max-width: 768px) 75vw, 28vw"
                />
              </div>
            </div>

            <section
              className={`${styles.section} ${styles.contactSection} ${styles.contactFade}`}
            >
              <address className={styles.contact}>
                <a href="tel:+359883337696">+359883337696</a>
                <a href="mailto:hristo.kutiev@gmail.com">hristo.kutiev@gmail.com</a>
                <a href="mailto:hkutiev@abv.bg">hkutiev@abv.bg</a>
                <p>{t.contact.address}</p>
              </address>
              <div className={styles.separator}></div>
            </section>
          </div>
        </main>
    </>
  )
}
