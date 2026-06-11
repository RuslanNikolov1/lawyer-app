import { cacheLife } from 'next/cache'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import { buildPageJsonLd } from '../../lib/json-ld'
import { isValidLocale } from '../../lib/locales'
import { translations } from '../../lib/translations'

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
  const jsonLd = buildPageJsonLd(locale)

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/profile-picture-640.webp"
        imageSrcSet="/profile-picture-640.webp 640w, /profile-picture-960.webp 960w"
        imageSizes="(max-width: 768px) 75vw, 28vw"
        fetchPriority="high"
        type="image/webp"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LanguageSwitcher locale={locale} />
      <header className="header">
        <div className="logoContainer">
          <Image
            src="/Logo.svg"
            alt={t.logoAlt}
            width={100}
            height={100}
            className="logo"
            unoptimized
          />
        </div>
        <div className="firmNameContainer">
          <h1 className="firmName">{t.firmName}</h1>
          <p
            className={
              locale === 'bg' ? 'firmTitle firmTitleBulgarian' : 'firmTitle'
            }
          >
            - {t.firmTitle} -
          </p>
        </div>
      </header>

      <main className="main">
        <div className="contentGrid">
          <div className="centerColumn">
            <div className="imageContainer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile-picture-640.webp"
                srcSet="/profile-picture-640.webp 640w, /profile-picture-960.webp 960w"
                sizes="(max-width: 768px) 75vw, 28vw"
                alt={t.profileImageAlt}
                width={640}
                height={960}
                className="profileImage"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <section className="section qualifications qualificationsFade">
            <ul className="list">
              {t.qualifications.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="separator"></div>
          </section>

          <section className="section practiceAreas practiceAreasFade">
            <ul className="list">
              {t.practiceAreas.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="separator"></div>
          </section>

          <section className="section descriptionSection descriptionFade">
            <p className="description">
              {t.description.line1}
              <br />
              {t.description.line2}
              <br />
              {t.description.line3}
              <br />
              {t.description.line4}
            </p>
            <div className="separator"></div>
          </section>

          <section className="section contactSection contactFade">
            <address className="contact">
              <a href="tel:+359883337696">+359883337696</a>
              <a href="mailto:hristo.kutiev@gmail.com">hristo.kutiev@gmail.com</a>
              <a href="mailto:hkutiev@abv.bg">hkutiev@abv.bg</a>
              <p>{t.contact.address}</p>
            </address>
            <div className="separator"></div>
          </section>
        </div>
      </main>
    </>
  )
}
