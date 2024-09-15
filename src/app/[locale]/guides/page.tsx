import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface City {
    key: string;
    image: string;
}

export default async function Guides() {
    const t = await getTranslations('guides');

    const cities: City[] = [
        { key: 'Moscow', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { key: 'Minsk', image: 'https://images.unsplash.com/photo-1562820306-03b38a2d6b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { key: 'SaintPetersburg', image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { key: 'Sochi', image: 'https://images.unsplash.com/photo-1605630683231-3a7f5c0d4f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { key: 'Budapest', image: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { key: 'Kaliningrad', image: 'https://images.unsplash.com/photo-1613964661787-56d3a4dd5324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { key: 'Irkutsk', image: 'https://images.unsplash.com/photo-1551845041-63e8e76836ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
        { key: 'Ufa', image: 'https://images.unsplash.com/photo-1600421539016-cc3f0866d2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
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