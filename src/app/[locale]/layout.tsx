import '../../styles/globals.css';

import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ReactNode } from 'react';

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className="flex flex-col items-center m-auto"
        style={{ height: '100dvh', maxWidth: '500px' }}
      >
        {children}
      </body>
    </html>
  );
}
