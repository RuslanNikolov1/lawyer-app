'use client'

import Image from 'next/image'
import { useLanguage } from '../lib/language-context'
import { translations } from '../lib/translations'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import styles from './page.module.scss'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <LanguageSwitcher />
      <header className={`${styles.header} ${styles.headerFade}`}>
        <div className={styles.logoContainer}>
          <Image
            src="/Logo.svg"
            alt={t.logoAlt}
            width={100}
            height={100}
            className={styles.logo}
            priority
          />
        </div>
        <div className={styles.firmNameContainer}>
          <h1 className={styles.firmName}>{t.firmName}</h1>
          <p
            className={
              language === 'bg'
                ? `${styles.firmTitle} ${styles.firmTitleBulgarian}`
                : styles.firmTitle
            }
          >
            {t.firmTitle}
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.contentGrid}>
          {/* Qualifications Section */}
          <section className={`${styles.section} ${styles.qualifications} ${styles.qualificationsFade}`}>
            <ul className={styles.list}>
              {t.qualifications.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className={styles.separator}></div>
          </section>

          {/* Center Image */}
          <div className={styles.centerColumn}>
            <div className={`${styles.imageContainer} ${styles.profileImageFade}`}>
              <Image
                src="/Profile Picture.png"
                alt="Professional portrait of lawyer"
                width={600}
                height={800}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>

          {/* Description Section */}
          <section className={`${styles.section} ${styles.descriptionSection} ${styles.descriptionFade}`}>
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

          {/* Practice Areas Section */}
          <section className={`${styles.section} ${styles.practiceAreas} ${styles.practiceAreasFade}`}>
            <ul className={styles.list}>
              {t.practiceAreas.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className={styles.separator}></div>
          </section>

          {/* Contact Section */}
          <section className={`${styles.section} ${styles.contactSection} ${styles.contactFade}`}>
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
