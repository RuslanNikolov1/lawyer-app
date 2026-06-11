'use client'

import { useParams, useRouter } from 'next/navigation'
import type { Language } from '../lib/translations'
import styles from './LanguageSwitcher.module.scss'

export function LanguageSwitcher() {
  const params = useParams()
  const router = useRouter()
  const locale = params.locale as Language

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => router.push('/en')}
        aria-label="Switch to English"
        type="button"
      >
        EN
      </button>
      <button
        className={`${styles.button} ${locale === 'bg' ? styles.active : ''}`}
        onClick={() => router.push('/bg')}
        aria-label="Switch to Bulgarian"
        type="button"
      >
        БГ
      </button>
    </div>
  )
}
