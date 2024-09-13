import { NoAuthProfile } from '@/modules/profile/components/noAuthProfile';
import { getTranslations } from 'next-intl/server';

export default async function Notifications() {
  const t = await getTranslations('settings');

  return (
    <>
      <NoAuthProfile />
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