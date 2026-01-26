import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { LanguageProvider } from '../lib/language-context'
import './globals.scss'

const libreBaskervilleBold = localFont({
  src: '../fonts/LibreBaskerville-Bold.ttf',
  variable: '--font-libre-baskerville-bold',
  weight: '700',
  display: 'swap',
})

const libreBaskervilleItalic = localFont({
  src: '../fonts/LibreBaskerville-Italic.ttf',
  variable: '--font-libre-baskerville-italic',
  weight: '400',
  style: 'italic',
  display: 'swap',
})

const merriweatherBold = localFont({
  src: '../fonts/Merriweather_24pt-Bold.ttf',
  variable: '--font-merriweather-bold',
  weight: '700',
  display: 'swap',
})

const ptSerifItalic = localFont({
  src: '../fonts/PTSerif-Italic.ttf',
  variable: '--font-pt-serif-italic',
  weight: '400',
  style: 'italic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kutiev Law Firm',
  description: 'Expert legal advisory focused in the criminal law and litigation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskervilleBold.variable} ${libreBaskervilleItalic.variable} ${merriweatherBold.variable} ${ptSerifItalic.variable}`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
