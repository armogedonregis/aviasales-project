import { getTranslations } from 'next-intl/server';
import PopularIcon from "/public/assets/vector/popular_direction_icon.svg"
import PopularHelp from "/public/assets/vector/popular_direction_help_icon.svg"
import Image from 'next/image';

interface Direction {
  city: string;
  country: string;
  flag: string;
}

export default async function Hotels() {
  const t = await getTranslations('hotels');

  const directions: Direction[] = t.raw('popularDirections') as Direction[];
  const helpTopics: string[] = t.raw('helpTopics') as string[];

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-8 gap-10 container mx-auto px-5 lg:px-[150px]">
      <div className="w-full lg:pr-8 mb-8 lg:mb-0 bg-white_15 py-6 px-5 lg:py-11 lg:px-10 rounded-3xl">
        <h2 className="text-3xl font-semibold md:text-4xl mb-10 text-white lg:text-left text-center gap-2">
          {t('popularDestinations')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {directions.map((direction, index) => (
            <div key={index} className="bg-white rounded-2xl py-2 px-5 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-2">
                  <Image
                    src={`/assets/images/${direction.flag}.png`}
                    alt={direction.country}
                    width={24}
                    height={24}
                  />
                </span>
                <div className="text-blue_primary text-xl">
                  <div className="font-550">{direction.city}</div>
                  <div className="text-sm font-450">{direction.country}</div>
                </div>
              </div>
              <span className="text-blue_primary">▼</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white_15 py-6 px-5 lg:py-11 lg:px-10 rounded-3xl">
      <h2 className="text-3xl font-550 md:text-4xl text-white mb-10 lg:text-left text-center gap-2">
          {t('helpAndAdvice')}
        </h2>
        <div className="space-y-2">
          {helpTopics.map((topic, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-3 text-xl flex justify-between items-center">
              <span className="text-blue_primary">{topic}</span>
              <span className="text-gray-400">▼</span>
            </div>
          ))}
         <button className="w-full bg-blue_primary text-white rounded-lg p-2 mt-4 hover:opacity-70 transition-all">
            {t('viewAllSection')}
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'hotels' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}