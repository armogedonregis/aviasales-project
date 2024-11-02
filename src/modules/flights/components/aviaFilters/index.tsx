'use client'

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const AviaFilters = () => {
    const t = useTranslations('aviaSearch');
    const [stopDuration, setStopDuration] = useState(12);
    const [noNightStops, setNoNightStops] = useState(false);

    return (
        <div className="rounded-lg bg-white/10 text-white shadow p-4">
            <button className="mb-4 rounded-lg bg-white text-blue_primary h-12 text-center text-[22px] font-medium w-[185px]">❤️ {t('saveSearch')}</button>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('stops')}</h3>
                {['directFlights', '1stop', '2stops'].map((stop, index) => (
                    <label key={stop} className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-[22px] font-medium">{t(stop)}</span>
                        <span className="ml-auto font-medium text-2xl">€{150 + index * 50}</span>
                    </label>
                ))}
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">{t('stopDuration')}</h3>
                <input
                    type="range"
                    className="w-full appearance-none bg-white h-2 rounded-lg focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-lg [&::-webkit-slider-thumb]:bg-blue_primary [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-lg [&::-moz-range-thumb]:bg-blue_primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-progress]:bg-blue_primary [&::-moz-range-progress]:h-2 [&::-moz-range-progress]:rounded-lg"
                    min="0"
                    max="24"
                    step="1"
                    value={stopDuration}
                    onChange={(e) => setStopDuration(Number(e.target.value))}
                />
                <div className="flex justify-between text-[22px] font-medium text-white">
                    <span>{t('upTo')} {stopDuration}h</span>
                </div>
            </div>

            <button className="text-blue_primary text-[22px] font-medium mb-4 w-full text-left">{t('ifComfortMatters')}</button>

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
                'departureTime',
                'arrivalTime',
                'baggageAndFare',
                'airlines',
                'alliances',
                'flightTime',
                'connectingAirports',
                'departureAirports',
                'arrivalAirports',
                'price',
                'agencies',
                'paymentMethods',
                'sorting'
            ].map((filter) => (
                <div key={filter} className="mb-2">
                    <button className="flex justify-between items-center w-full text-left text-[22px] font-medium">
                        <span>{t(filter)}</span>
                        <span>▼</span>
                    </button>
                </div>
            ))}
        </div>
    );
};