import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface City {
    key: string;
    image: string;
}

export default async function Guides() {
    const t = await getTranslations('guides');

    const cities: City[] = [
        { key: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80' },
        { key: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80' },
        { key: 'Barcelona', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80' },
        { key: 'Amsterdam', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=80' },
        { key: 'Prague', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1000&q=80' },
        { key: 'Vienna', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1000&q=80' },
        { key: 'Berlin', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1000&q=80' },
        { key: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80' },
    ];

    return (
        <div className="max-w-5xl px-4 mx-auto lg:px-10 mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {cities.map((city, index) => (
                    <div key={city.key} className="bg-white rounded-lg overflow-hidden shadow-md relative">
                        {index === 0 && (
                            <div className="absolute top-0 left-0 z-10">
                                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                    {t('youViewed')}
                                </span>
                            </div>
                        )}
                        <div className="relative h-32 sm:h-40 md:h-48">
                            <Image
                                src={city.image}
                                alt={t(`cities.${city.key}.name`)}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-3 sm:p-4">
                            <h3 className="font-bold text-base sm:text-lg">{t(`cities.${city.key}.name`)}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm">{t(`cities.${city.key}.country`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}