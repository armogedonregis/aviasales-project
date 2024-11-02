import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/routing';

export default async function Favorites() {
  const t = await getTranslations('favorites');

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl lg:text-[40px] font-550 text-white mb-6">{t('title')}</h1>
      <div className="bg-white/10 rounded-lg shadow-md p-8 text-center">
        <div className="text-red-500 text-5xl mb-4">❤️</div>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('trackPrices')}</h2>
        <p className="text-white mb-6">{t('addTicketDescription')}</p>
        <Link href="/profile" className="bg-blue_primary text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
          {t('goToProfile')}
        </Link>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'favorites' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}