import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/Logo.svg"
            alt="Kutiev Law Firm Logo - Lady Justice"
            width={100}
            height={100}
            className={styles.logo}
            priority
          />
        </div>
        <div className={styles.firmNameContainer}>
          <h1 className={styles.firmName}>Kutiev</h1>
          <p className={styles.firmTitle}>Law Firm</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.contentGrid}>
          {/* Qualifications Section */}
          <section className={`${styles.section} ${styles.qualifications}`}>
            <ul className={styles.list}>
              <li>10+ Years of Legal practice</li>
              <li>Master of Laws</li>
              <li>PhD in Criminal litigation</li>
              <li>Attorney-at-law</li>
            </ul>
            <div className={styles.separator}></div>
          </section>

          {/* Center Image */}
          <div className={styles.centerColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/Profile picture.png"
                alt="Professional portrait of lawyer"
                width={600}
                height={800}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>

          {/* Description Section */}
          <section className={`${styles.section} ${styles.descriptionSection}`}>
            <p className={styles.description}>
              Expert legal advisory
              <br />
              focused in the criminal law and litigation.
              <br />
              Delivering practical solutions
              <br />
              for each client&apos;s needs.
            </p>
            <div className={styles.separator}></div>
          </section>

          {/* Practice Areas Section */}
          <section className={`${styles.section} ${styles.practiceAreas}`}>
            <ul className={styles.list}>
              <li>Criminal law</li>
              <li>Criminal litigation</li>
              <li>Administrative penal law</li>
              <li>Penal enforcement law</li>
            </ul>
            <div className={styles.separator}></div>
          </section>

          {/* Contact Section */}
          <section className={`${styles.section} ${styles.contactSection}`}>
            <address className={styles.contact}>
              <a href="tel:+359883337696">+359883337696</a>
              <a href="mailto:hristo.kutiev@gmail.com">hristo.kutiev@gmail.com</a>
              <a href="mailto:hkutiev@abv.bg">hkutiev@abv.bg</a>
              <p>137 &quot;Knyaz Boris I&quot; Str., Sofia</p>
            </address>
            <div className={styles.separator}></div>
          </section>
        </div>
      </main>
    </>
  )
}
