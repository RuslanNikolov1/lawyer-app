import type { Metadata } from 'next'
import { compiledStyles } from '../lib/compiled-styles'
import { fontVariables } from '../lib/fonts'
import { baseUrl } from '../lib/locales'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
}

const speculationRules = JSON.stringify({
  prerender: [
    {
      where: { href_matches: ['/en', '/bg'] },
      eagerness: 'moderate',
    },
  ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: compiledStyles }} />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: speculationRules }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
