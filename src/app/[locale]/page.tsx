import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

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
    <>
      <div className="container mx-auto px-2.5 lg:px-[150px] mt-16 hidden lg:block">
        <div className="flex gap-4 pb-4 w-full">
          <div className="relative w-2/12 h-[412px] rounded-2xl overflow-hidden ">
            <Image
              src="/assets/images/home_page_1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-6/12 h-[412px] rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/assets/images/home_page_2.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 text-white font-650 text-4xl">
              LONDON TRIP
            </div>
          </div>
          <div className="relative w-4/12 h-[412px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/home_page_3.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-8 gap-10 container mx-auto px-2.5 lg:px-[150px]">
        <div className="w-full lg:pr-8 mb-8 lg:mb-0 bg-white_15 py-6 px-5 lg:py-11 lg:px-10 rounded-3xl">
          <h2 className="text-3xl font-550 md:text-4xl mb-10 text-white lg:text-left text-center gap-2">
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
          <div className="space-y-3">
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
    </>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}