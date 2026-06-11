import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { baseUrl } from '../lib/locales'
import './globals.scss'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
}

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

const fontClassName = `${libreBaskervilleBold.variable} ${libreBaskervilleItalic.variable} ${merriweatherBold.variable} ${ptSerifItalic.variable}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontClassName}>{children}</body>
    </html>
  )
}
