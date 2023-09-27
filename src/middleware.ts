import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authorization');
  const uuid = request.cookies.get('uuid');

  const isPrivateUrl = [
    '/calculation',
    '/expenses',
    '/incomes',
    '/settings',
    '/'
  ].includes(request.nextUrl.pathname);

  const isAuthPath = ['/login', '/register'].includes(request.nextUrl.pathname);

  if (isPrivateUrl) {
    if (!token && !uuid) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (isAuthPath) {
    if (token && uuid) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icons).*)']
};
