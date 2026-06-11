import { Libre_Baskerville, Merriweather, PT_Serif } from 'next/font/google'

export const libreBaskervilleBold = Libre_Baskerville({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-libre-baskerville-bold',
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
})

export const libreBaskervilleItalic = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-libre-baskerville-italic',
  display: 'optional',
  adjustFontFallback: true,
  preload: false,
})

export const merriweatherBold = Merriweather({
  subsets: ['latin', 'cyrillic'],
  weight: '700',
  variable: '--font-merriweather-bold',
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
})

export const ptSerifItalic = PT_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  style: 'italic',
  variable: '--font-pt-serif-italic',
  display: 'optional',
  adjustFontFallback: true,
  preload: false,
})

export const fontVariables = [
  libreBaskervilleBold.variable,
  libreBaskervilleItalic.variable,
  merriweatherBold.variable,
].join(' ')

export const bgFontVariables = ptSerifItalic.variable
