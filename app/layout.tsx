import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'

const libreBaskervilleBold = localFont({
  src: '../public/fonts/LibreBaskerville-Bold.ttf',
  variable: '--font-libre-baskerville-bold',
  weight: '700',
  display: 'swap',
})

const libreBaskervilleItalic = localFont({
  src: '../public/fonts/LibreBaskerville-Italic.ttf',
  variable: '--font-libre-baskerville-italic',
  weight: '400',
  style: 'italic',
  display: 'swap',
})

const merriweatherBold = localFont({
  src: '../public/fonts/Merriweather_24pt-Bold.ttf',
  variable: '--font-merriweather-bold',
  weight: '700',
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
        className={`${libreBaskervilleBold.variable} ${libreBaskervilleItalic.variable} ${merriweatherBold.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
