import { useTranslations } from 'next-intl';

function Home() {
  const t = useTranslations('Index');

  return <main className="text-4xl">{t('title')}</main>;
}

export default Home;
