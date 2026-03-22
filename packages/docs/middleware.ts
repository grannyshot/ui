import { NextRequest, NextResponse } from 'next/server'

const locales = ['ko', 'en']
const defaultLocale = 'ko'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) return NextResponse.next()

  // Detect preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || ''
  const preferredLocale = acceptLanguage.includes('ko') ? 'ko' :
    acceptLanguage.includes('en') ? 'en' : defaultLocale

  // Redirect to locale-prefixed path
  const url = request.nextUrl.clone()
  url.pathname = `/${preferredLocale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|_pagefind).*)',
  ],
}
