'use client'

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const AviaFilters = () => {
    const t = useTranslations('aviaSearch');
    const [stopDuration, setStopDuration] = useState(12);
    const [noNightStops, setNoNightStops] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <button className="text-blue-600 mb-4 w-full text-left">❤️ {t('saveSearch')}</button>
            
            <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('stops')}</h3>
                {['directFlights', '1stop', '2stops'].map((stop, index) => (
                    <label key={stop} className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <span>{t(stop)}</span>
                        <span className="ml-auto text-gray-500">{6793 + index * 7000}₽</span>
                    </label>
                ))}
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('stopDuration')}</h3>
                <input 
                    type="range" 
                    className="w-full" 
                    min="0" 
                    max="24" 
                    step="1" 
                    value={stopDuration}
                    onChange={(e) => setStopDuration(Number(e.target.value))}
                />
                <div className="flex justify-between text-sm text-gray-500">
                    <span>{t('upTo')} {stopDuration}ч</span>
                </div>
            </div>

            <button className="text-blue-600 mb-4 w-full text-left">{t('ifComfortMatters')}</button>

            <label className="flex items-center mb-4">
                <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={noNightStops}
                    onChange={() => setNoNightStops(!noNightStops)}
                />
                <span>{t('noNightStops')}</span>
            </label>

            {[
                'departureToMoscow',
                'returnToCheboksary',
                'baggageAndFare',
                'airlines',
                'alliances',
                'flightTime',
                'connectingAirports',
                'moscowAirports',
                'cheboksaryAirports',
                'price',
                'agencies',
                'paymentMethods',
                'sorting'
            ].map((filter) => (
                <div key={filter} className="mb-2">
                    <button className="flex justify-between items-center w-full text-left">
                        <span>{t(filter)}</span>
                        <span>▼</span>
                    </button>
                </div>
            ))}
        </div>
    );
};