import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({locale}) => {
  if (!routing.locales.includes(locale as any)) notFound();
 
  const messages = {
    header: {
      ...(await import(`../locales/${locale}/header.json`)).default,
    },
    footer: {
      ...(await import(`../locales/${locale}/footer.json`)).default,
    },
    home: {
      ...(await import(`../locales/${locale}/home.json`)).default,
    },
    guides: {
      ...(await import(`../locales/${locale}/guides.json`)).default,
    },
    hotels: {
      ...(await import(`../locales/${locale}/hotels.json`)).default,
    },
    favorites: {
      ...(await import(`../locales/${locale}/favorites.json`)).default,
    },
    settings: {
      ...(await import(`../locales/${locale}/settings.json`)).default,
    },
    myAccount: {
      ...(await import(`../locales/${locale}/myAccount.json`)).default,
    },
    aviaSearch: {
      ...(await import(`../locales/${locale}/aviaSearch.json`)).default,
    },
    trySky: {
      ...(await import(`../locales/${locale}/trySky.json`)).default,
    },
  };

  return { messages };
});