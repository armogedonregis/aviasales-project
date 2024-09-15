import React from 'react';
import { useTranslations } from 'next-intl';

interface TravelPlanItem {
    time: string;
    activity: string;
    place: string;
    cost?: string;
    details?: string;
    peopleCount?: number;
}

interface TravelDay {
    title: string;
    activities: TravelPlanItem[];
}

interface TutuJarvelPlanProps {
    isOpen: boolean;
    onClose: () => void;
}

const TutuJarvelPlan: React.FC<TutuJarvelPlanProps> = ({ isOpen, onClose }) => {
    const t = useTranslations('tutuJarvel');

    const travelPlan: TravelDay[] = [
        {
            title: t('day1Title'),
            activities: [
                { time: '09:00', activity: t('breakfast'), place: t('laleRestaurant'), cost: '~200₺' },
                { time: '10:30', activity: t('visit'), place: t('hagiaSophia'), cost: '~400₺', peopleCount: 2 },
                { time: '13:00', activity: t('lunch'), place: t('matbahRestaurant'), cost: '~350₺' },
                { time: '15:00', activity: t('tour'), place: t('topkapiPalace'), cost: '~300₺', peopleCount: 2 },
                { time: '18:00', activity: t('dinner'), place: t('hamdiRestaurant'), cost: '~500₺' },
            ]
        },
        {
            title: t('day2Title'),
            activities: [
                { time: '09:00', activity: t('breakfast'), place: t('privatoCafe'), cost: '~150₺' },
                { time: '10:30', activity: t('visit'), place: t('istanbulModernArtMuseum'), cost: '~200₺', details: t('modernArtDetails'), peopleCount: 2 },
                { time: '13:00', activity: t('lunch'), place: t('pandeliRestaurant'), cost: '~400₺' },
                { time: '16:00', activity: t('walk'), place: t('galataTower'), cost: '~175₺', details: t('galataTowerDetails'), peopleCount: 1 },
                { time: '18:00', activity: t('dinner'), place: t('miklaRestaurant'), cost: '~800₺' },
            ]
        },
        {
            title: t('day3Title'),
            activities: [
                { time: '09:00', activity: t('breakfast'), place: t('vanKahvaltiEvi'), cost: '~300₺' },
                { time: '10:00', activity: t('trip'), place: t('princeIslands'), cost: '~200₺', details: t('princeIslandsDetails'), peopleCount: 2 },
                { time: '13:00', activity: t('lunch'), place: t('miltoRestaurant'), cost: '~400₺' },
                { time: '14:00', activity: t('walk'), place: t('gulhanepark'), details: t('gulhaneparkDetails'), peopleCount: 1 },
                { time: '16:00', activity: t('visit'), place: t('maidenTower'), cost: '~100₺', details: t('maidenTowerDetails'), peopleCount: 1 },
                { time: '18:00', activity: t('dinner'), place: t('choiceRestaurant'), cost: '~500₺' },
            ]
        }
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-4">
            <div className="bg-white rounded-t-2xl shadow-xl w-full max-w-md mx-auto max-h-[95vh] overflow-y-auto">
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={onClose} className="text-2xl font-bold text-gray-500 hover:text-gray-700">×</button>
                        <h1 className="text-xl font-bold text-gray-800">{t('jarvel')}</h1>
                        <div className="w-6"></div>
                    </div>
                    {travelPlan.map((day, dayIndex) => (
                        <div key={dayIndex} className="mb-6">
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">{day.title}</h2>
                            {day.activities.map((item, itemIndex) => (
                                <div key={itemIndex} className="mb-2">
                                    <p className="text-sm">
                                        <span className="font-medium text-gray-700">{item.time}</span> - {item.activity} <span className="text-blue-600 font-medium">{item.place}</span>
                                        {item.cost && <span className="ml-1 text-gray-600">({item.cost})</span>}
                                        {item.peopleCount && <span className="ml-1 bg-gray-200 px-1 rounded text-xs text-gray-600">{item.peopleCount}</span>}
                                    </p>
                                    {item.details && <p className="text-xs text-gray-500 ml-6">{item.details}</p>}
                                </div>
                            ))}
                        </div>
                    ))}
                    <button className="bg-blue-100 text-blue-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center w-full mt-4 hover:bg-blue-200 transition-colors duration-200">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {t('showOnMap')}
                    </button>
                    <input
                        type="text"
                        placeholder={t('enterQuery')}
                        className="w-full border rounded-lg px-4 py-3 mt-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                        {t('betaVersion')}
                        <a href="#" className="text-blue-600 ml-1 hover:underline">{t('termsOfUse')}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TutuJarvelPlan;