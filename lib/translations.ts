export type Language = 'bg' | 'en'

export const translations = {
  bg: {
    logoAlt: 'Лого на Кутиев Адвокатска Кантора - Лейди Джастис',
    firmName: 'Кутиев',
    firmTitle: 'Адвокатска Кантора',
    qualifications: {
      title: 'Квалификации',
      items: [
        '10+ години правна практика',
        'Магистър по право',
        'Доктор по наказателно право',
        'Адвокат',
      ],
    },
    description: {
      line1: 'Правна консултация,фокусирана върху',
      line2: 'наказателното процесуалното право.',
      line3: 'Предоставяне на практически решения',
      line4: 'за нуждите на всеки клиент.',
    },
    practiceAreas: {
      title: 'Области на практика',
      items: [
        'Наказателно право',
        'Наказателно процесуално право',
        'Административно наказателно право',
        'Изпълнително наказателно право',
      ],
    },
    contact: {
      address: 'ул. "Княз Борис I" № 137, София',
    },
  },
  en: {
    logoAlt: 'Kutiev Law Firm Logo - Lady Justice',
    firmName: 'Kutiev',
    firmTitle: 'law firm',
    qualifications: {
      title: 'Qualifications',
      items: [
        '10+ Years of Legal practice',
        'Master of Laws',
        'PhD in Criminal litigation',
        'Attorney-at-law',
      ],
    },
    description: {
      line1: 'Expert legal advisory',
      line2: 'focused in the criminal law and litigation.',
      line3: 'Delivering practical solutions',
      line4: 'for each client\'s needs.',
    },
    practiceAreas: {
      title: 'Practice Areas',
      items: [
        'Criminal law',
        'Criminal litigation',
        'Administrative penal law',
        'Penal enforcement law',
      ],
    },
    contact: {
      address: '137 "Knyaz Boris I" Str., Sofia',
    },
  },
} as const

export const defaultLanguage: Language = 'en'
