import { useTranslations } from 'next-intl';

import Icon from '@/app/components/Icon';

function Home() {
  const t = useTranslations('');

  return (
    <main className="flex flex-col items-center w-full h-full text-4xl bg-green text-white text-xl leading-6">
      <div className="flex flex-col items-center mt-48">
        <h1>{t('제목')}</h1>
        <Icon className="mt-2.5" name="Logo" size={80} />
      </div>
    </main>
  );
}

export default Home;
