import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface City {
    key: string;
    image: string;
}

export default async function Guides() {
    const t = await getTranslations('guides');

    const cities: City[] = [
        { key: 'Paris', image: '/assets/images/paris.png' },
        { key: 'Rome', image: '/assets/images/rome.png' },
        { key: 'Barcelona', image: '/assets/images/barselona.png' },
        { key: 'Amsterdam', image: '/assets/images/amsterdam.png' },
        { key: 'Prague', image: '/assets/images/prague.png' },
        { key: 'Vienna', image: '/assets/images/vienna.png' },
        { key: 'Berlin', image: '/assets/images/berlin.png' },
        { key: 'London', image: '/assets/images/london.png' },
    ];

    return (
        <div className="max-w-5xl w-full px-4 mx-auto lg:px-10 mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {cities.map((city, index) => (
                    <div key={city.key} className="rounded-2xl overflow-hidden shadow-md relative">
                        {index === 0 && (
                            <div className="absolute top-0 left-0 z-10 bg-black/20 rounded-tl-2xl rounded-br-2xl">
                                <span className="inline-block text-white px-2 py-1 text-lg font-medium">
                                    {t('youViewed')}
                                </span>
                            </div>
                        )}
                        <div className="relative h-32 sm:h-40 md:h-64">
                            <Image
                                src={city.image}
                                alt={t(`cities.${city.key}.name`)}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="p-3 absolute bottom-0 sm:p-4 text-white">
                                <h3 className="font-550 text-base sm:text-4xl">{t(`cities.${city.key}.name`)}</h3>
                                <p className="text-xl font-medium">{t(`cities.${city.key}.country`)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}