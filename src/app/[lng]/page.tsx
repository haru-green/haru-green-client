import { useTranslation } from 'next-i18next';

function Home() {
  const { t } = useTranslation();

  return <main className="text-4xl">{t('title')}</main>;
}

export default Home;
