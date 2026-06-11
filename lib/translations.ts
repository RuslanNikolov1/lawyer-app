export type Language = 'bg' | 'en'

export const translations = {
  bg: {
    seo: {
      title: 'Кутиев Адвокатска Кантора | Наказателно Право',
      description:
        'Правна консултация по наказателно право в София. Христо Кутиев — адвокат, доктор по наказателно процесуално право, 10+ г. опит.',
    },
    logoAlt: 'Лого на Кутиев Адвокатска Кантора - Лейди Джастис',
    profileImageAlt: 'Професионален портрет на адвокат Христо Кутиев',
    firmName: 'Кутиев',
    firmTitle: 'Адвокатска Кантора',
    qualifications: {
      title: 'Квалификации',
      items: [
        'Адвокат',
        '10+ години правна практика',
        'Магистър по право',
        'Доктор по наказателно право',
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
    seo: {
      title: 'Kutiev Law Firm | Criminal Law & Litigation',
      description:
        'Expert criminal law advisory in Sofia. Hristo Kutiev — Attorney-at-law, PhD in Criminal Procedure Law, 10+ years of practice.',
    },
    logoAlt: 'Kutiev Law Firm Logo - Lady Justice',
    profileImageAlt: 'Professional portrait of attorney Hristo Kutiev',
    firmName: 'Kutiev',
    firmTitle: 'law firm',
    qualifications: {
      title: 'Qualifications',
      items: [
        'Attorney-at-law',
        '10+ Years of Legal practice',
        'Master of Laws',
        'PhD in Criminal Procedure Law',
      ],
    },
    description: {
      line1: 'Expert legal advisory',
      line2: 'focused on Criminal law and litigation.',
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
