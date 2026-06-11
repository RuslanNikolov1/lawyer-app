import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kutiev Law Firm',
    short_name: 'Kutiev',
    description: 'Expert criminal law advisory in Sofia',
    start_url: '/en',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#274597',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
