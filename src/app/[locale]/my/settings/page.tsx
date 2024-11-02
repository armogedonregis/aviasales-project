import { NoAuthProfile } from '@/modules/profile/components/noAuthProfile';
import { getTranslations } from 'next-intl/server';

export default async function Settings() {
  const t = await getTranslations('settings');

  return (
    <>
      <NoAuthProfile />
      <div className="bg-white/10 shadow rounded-lg p-6">
        <h2 className="text-xl text-white font-semibold mb-2">{t('regional.title')}</h2>
        <p className="text-sm text-white mb-6">{t('regional.description')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">{t('regional.country')}</label>
            <select className="w-full border border-gray-300 text-blue_primary rounded-[20px] px-3 py-2 bg-white">
              <option>{t('regional.selectCountry')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">{t('regional.citizenship')}</label>
            <select className="w-full border text-blue_primary border-gray-300 rounded-[20px] px-3 py-2 bg-white">
              <option>{t('regional.selectCitizenship')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">{t('regional.currency')}</label>
            <select className="w-full border text-blue_primary border-gray-300 rounded-[20px] px-3 py-2 bg-white">
              <option>{t('regional.selectCurrency')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">{t('regional.city')}</label>
            <select className="w-full border text-blue_primary border-gray-300 rounded-[20px] px-3 py-2 bg-white">
              <option>{t('regional.selectCity')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">{t('regional.paymentMethod')}</label>
            <select className="w-full border text-blue_primary border-gray-300 rounded-[20px] px-3 py-2 bg-white">
              <option>{t('regional.selectPaymentMethod')}</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'settings' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}