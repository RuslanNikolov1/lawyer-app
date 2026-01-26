'use client'

import { useLanguage } from '../lib/language-context'
import styles from './LanguageSwitcher.module.scss'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        type="button"
      >
        EN
      </button>
      <button
        className={`${styles.button} ${language === 'bg' ? styles.active : ''}`}
        onClick={() => setLanguage('bg')}
        aria-label="Switch to Bulgarian"
        type="button"
      >
        БГ
      </button>
    </div>
  )
}
