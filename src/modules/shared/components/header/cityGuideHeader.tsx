import { BaseHeader } from "./baseHeader";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const CityGuideHeader: React.FC = () => {
  const t = useTranslations('header');

  const categories = [
    { name: t('cityGuide.categories.russia'), icon: "🇷🇺", color: "bg-pink-100 text-pink-600" },
    { name: t('cityGuide.categories.noVisa'), icon: "🌍", color: "bg-green-100 text-green-600" },
    { name: t('cityGuide.categories.beach'), icon: "🏖️", color: "bg-orange-100 text-orange-600" },
    { name: t('cityGuide.categories.kids'), icon: "🧸", color: "bg-blue-100 text-blue-600" }
  ];

  return (
    <BaseHeader>
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-8 pb-6 sm:pb-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-0">
          <div className="">
            <h1 className="text-3xl lg:text-5xl font-bold text-white">{t('cityGuide.title')}</h1>
            <p className="text-white">{t('cityGuide.subtitle')}</p>
          </div>
          <div className="hidden sm:block">
            <Image
              src="/assets/images/city-guide-illustration.png"
              alt="City Guide Illustration"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="relative py-2 bg-white rounded-xl mb-4">
          <input
            type="text"
            placeholder={t('cityGuide.searchPlaceholder')}
            className="w-full px-10 py-3 h-9 sm:h-auto bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide pb-2 sm:pb-0 sm:flex-wrap sm:justify-between gap-3 -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`${category.color} px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-center flex-shrink-0 sm:flex-grow`}
            >
              <span className="mr-2 text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </BaseHeader>
  );
};