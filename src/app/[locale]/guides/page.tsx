import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface City {
    key: string;
    image: string;
}

export default async function Guides() {
    const t = await getTranslations('guides');

    const cities: City[] = [
        { key: 'Moscow', image: 'https://source.unsplash.com/featured/?moscow' },
        { key: 'Minsk', image: 'https://source.unsplash.com/featured/?minsk' },
        { key: 'SaintPetersburg', image: 'https://source.unsplash.com/featured/?saint-petersburg' },
        { key: 'Sochi', image: 'https://source.unsplash.com/featured/?sochi' },
        { key: 'Budapest', image: 'https://source.unsplash.com/featured/?budapest' },
        { key: 'Kaliningrad', image: 'https://source.unsplash.com/featured/?kaliningrad' },
        { key: 'Irkutsk', image: 'https://source.unsplash.com/featured/?irkutsk' },
        { key: 'Ufa', image: 'https://source.unsplash.com/featured/?ufa' },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-2xl font-bold mb-6">{t('pageTitle')}</h1>
                <div className="mb-6">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {t('youViewed')}
                    </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cities.map((city) => (
                        <div key={city.key} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={city.image}
                                alt={t(`cities.${city.key}.name`)}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{t(`cities.${city.key}.name`)}</h3>
                                <p className="text-gray-600 text-sm">{t(`cities.${city.key}.country`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}