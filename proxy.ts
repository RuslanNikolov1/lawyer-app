import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale } from './lib/locales'

function getPreferredLocale(request: NextRequest): 'en' | 'bg' {
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  if (acceptLanguage.toLowerCase().includes('bg')) {
    return 'bg'
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const locale = getPreferredLocale(request)
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
