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
      <div className="max-w-5xl mx-auto px-10 pt-8 pb-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-white">{t('cityGuide.title')}</h1>
            <p className="text-xl text-white">{t('cityGuide.subtitle')}</p>
          </div>
          <Image
            src="/assets/images/city-guide-illustration.png"
            alt="City Guide Illustration"
            width={200}
            height={200}
          />
        </div>
        <div className="relative mt-8 py-2 bg-white rounded-xl">
          <input
            type="text"
            placeholder={t('cityGuide.searchPlaceholder')}
            className="w-full px-10 py-5 h-9 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
        <div className="flex justify-between gap-3 mt-4">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`${category.color} px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-center flex-grow`}
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