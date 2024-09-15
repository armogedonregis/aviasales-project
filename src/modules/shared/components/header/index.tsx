'use client';

import { usePathname } from 'next/navigation';
import { HomeHeader } from './homeHeader';
import { BaseHeader } from './baseHeader';
import { HotelHeader } from './hotelHeader';
import { useEffect, useState } from 'react';
import { CityGuideHeader } from './cityGuideHeader';
import { SearchHeader } from './searchHeader';



interface HeaderProps {
    isTransitioning?: boolean;
}

const headerConfig: { [key: string]: React.ComponentType<HeaderProps> } = {
    'home': HomeHeader,
    'hotels': HotelHeader,
    'guides': CityGuideHeader,
    'search': SearchHeader
};

export const DynamicHeader: React.FC = () => {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(Boolean);

    // Определяем, является ли первая часть пути языковым кодом
    const isFirstPartLocale = ['fr', 'nl', 'en'].includes(pathParts[0]);

    // Получаем ключ для headerConfig, пропуская языковой код, если он присутствует
    const headerKey = isFirstPartLocale ? pathParts[1] || 'home' : pathParts[0] || 'home';

    const [prevHeaderKey, setPrevHeaderKey] = useState(headerKey);

    useEffect(() => {
        setPrevHeaderKey(headerKey);
    }, [headerKey]);

    const HeaderComponent = headerConfig[headerKey] || BaseHeader;
    const isTransitioning = prevHeaderKey === 'home' && headerKey !== 'home';

    return <HeaderComponent isTransitioning={isTransitioning} />;
};