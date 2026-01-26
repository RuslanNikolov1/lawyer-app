'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, defaultLanguage } from './translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get language from cookie or default to English
    const savedLanguage = document.cookie
      .split('; ')
      .find((row) => row.startsWith('language='))
      ?.split('=')[1] as Language | undefined

    if (savedLanguage === 'bg' || savedLanguage === 'en') {
      setLanguageState(savedLanguage)
      document.documentElement.lang = savedLanguage
    } else {
      document.documentElement.lang = defaultLanguage
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    // Save to cookie
    document.cookie = `language=${lang}; path=/; max-age=31536000` // 1 year
    // Update HTML lang attribute
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
