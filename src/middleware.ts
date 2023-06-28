import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'ko',

  // A list of all locales that are supported
  locales: ['ko', 'en', 'ja', 'zh'],
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
