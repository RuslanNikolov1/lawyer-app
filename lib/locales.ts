import type { Language } from './translations'

export const locales: Language[] = ['en', 'bg']
export const defaultLocale: Language = 'en'
export const baseUrl = 'https://www.kutiev.com'

export function isValidLocale(locale: string): locale is Language {
  return locales.includes(locale as Language)
}
