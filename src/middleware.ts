import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isBrokenLiteralRedirect(pathname: string) {
  if (pathname === '/:path*') {
    return true
  }

  try {
    return decodeURIComponent(pathname) === '/:path*'
  } catch {
    return false
  }
}

export function middleware(request: NextRequest) {
  if (!isBrokenLiteralRedirect(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/'
  url.search = ''

  return NextResponse.redirect(url, 308)
}
