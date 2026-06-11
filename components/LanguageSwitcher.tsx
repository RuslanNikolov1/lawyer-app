import Link from 'next/link'
import type { Language } from '../lib/translations'

type LanguageSwitcherProps = {
  locale: Language
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <nav className="langSwitcher" aria-label="Language">
      <Link
        href="/en"
        className={`langButton ${locale === 'en' ? 'langActive' : ''}`}
        aria-label="Switch to English"
        aria-current={locale === 'en' ? 'page' : undefined}
        prefetch
      >
        EN
      </Link>
      <Link
        href="/bg"
        className={`langButton ${locale === 'bg' ? 'langActive' : ''}`}
        aria-label="Switch to Bulgarian"
        aria-current={locale === 'bg' ? 'page' : undefined}
        prefetch
      >
        БГ
      </Link>
    </nav>
  )
}
