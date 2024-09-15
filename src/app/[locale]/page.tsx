import { getTranslations } from 'next-intl/server';
import PopularIcon from "/public/assets/vector/popular_direction_icon.svg"
import PopularHelp from "/public/assets/vector/popular_direction_help_icon.svg"

interface Direction {
  city: string;
  country: string;
  flag: string;
}

export default async function Home() {
  const t = await getTranslations('home');

  const directions: Direction[] = t.raw('popularDirections') as Direction[];
  const helpTopics: string[] = t.raw('helpTopics') as string[];

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-8 mx-auto w-full max-w-6xl px-4">
      <div className="w-full lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-start gap-2">
          <PopularIcon />
          {t('popularDestinations')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {directions.map((direction, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{direction.flag}</span>
                <div>
                  <div className="font-semibold">{direction.city}</div>
                  <div className="text-sm text-gray-600">{direction.country}</div>
                </div>
              </div>
              <span className="text-blue-500">▼</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <PopularHelp />
          {t('helpAndAdvice')}
        </h2>
        <div className="space-y-2">
          {helpTopics.map((topic, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
              <span className="text-blue-500">{topic}</span>
              <span className="text-gray-400">▼</span>
            </div>
          ))}
          <button className="w-full border border-blue-500 text-blue-500 rounded-lg p-2 mt-4 hover:bg-blue-50 transition-colors">
            {t('viewAllSection')}
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}