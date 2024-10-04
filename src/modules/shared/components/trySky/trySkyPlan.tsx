import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import SuggestedPlans from './SuggestedPlans';
import TypingAnimation from './TypingAnimation';
import AdditionalQuestions from './AdditionalQuestions';

interface Message {
    type: 'assistant' | 'user';
    content: string;
    isLifehacks?: boolean;
    isParisExcursions?: boolean;
    isRomeAttractions?: boolean;
    isAmsterdamWeekend?: boolean;
    isLandmarks?: boolean;
}

const TrySkyPlan: React.FC = () => {
    const t = useTranslations('trySky');
    const [messages, setMessages] = useState<Message[]>([
        { type: 'assistant', content: t('assistantGreeting') + ' ' + t('assistantQuestion') }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [suggestionsStep, setSuggestionsStep] = useState(0);
    const [selectedInitialSuggestion, setSelectedInitialSuggestion] = useState<string | null>(null);

    const handlePlanClick = (plan: string) => {
        setMessages([...messages, { type: 'user', content: plan }]);
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            if (plan === t('plan3DayUAE') || plan === t('weekendAmsterdam')) {
                setMessages(prev => [...prev, { type: 'assistant', content: plan === t('plan3DayUAE') ? t('uaeDescription') : t('amsterdamWeekendResponse'), isAmsterdamWeekend: plan === t('weekendAmsterdam') }]);
                setSuggestionsStep(1);
                setSelectedInitialSuggestion(plan);
            } else if ((plan === t('lifehacks') || plan === t('landmarks') || plan === t('hotels')) && suggestionsStep === 1) {
                if (plan === t('lifehacks')) {
                    setMessages(prev => [...prev, { type: 'assistant', content: t('lifehacksResponse'), isLifehacks: true }]);
                } else if (plan === t('landmarks')) {
                    setMessages(prev => [...prev, { type: 'assistant', content: t('landmarksResponse'), isLandmarks: true }]);
                } else if (plan === t('hotels')) {
                    setMessages(prev => [...prev, { type: 'assistant', content: t('hotelsResponse'), isHotels: true }]);
                }
                setSuggestionsStep(2);
            } else if (plan === t('showParisExcursions')) {
                setMessages(prev => [...prev, { type: 'assistant', content: t('parisExcursionsResponse'), isParisExcursions: true }]);
                setSuggestionsStep(1);
            } else if (plan === t('topRomeAttractions')) {
                setMessages(prev => [...prev, { type: 'assistant', content: t('romeAttractionsResponse'), isRomeAttractions: true }]);
                setSuggestionsStep(1);
            } else {
                // Обработка дополнительных вопросов
                const additionalQuestionResponses = {
                    [t('cheapestFlightsLondonRome')]: t('cheapestFlightsLondonRomeResponse'),
                    [t('goodHotelsParis')]: t('goodHotelsParisResponse'),
                    [t('discountOffersTokyoFlights')]: t('discountOffersTokyoFlightsResponse'),
                    [t('changeFlightNewYork')]: t('changeFlightNewYorkResponse'),
                    [t('cancelFlightBerlin')]: t('cancelFlightBerlinResponse'),
                    [t('addExtraBag')]: t('addExtraBagResponse'),
                    [t('checkInAmsterdamLisbon')]: t('checkInAmsterdamLisbonResponse'),
                    [t('transportationMadrid')]: t('transportationMadridResponse'),
                    [t('travelRestrictionsLondonNewYork')]: t('travelRestrictionsLondonNewYorkResponse'),
                    [t('setAlertsDeals')]: t('setAlertsDealsResponse'),
                };
                const response = additionalQuestionResponses[plan as keyof typeof additionalQuestionResponses];
                if (response) {
                    setMessages(prev => [...prev, { type: 'assistant', content: response }]);
                }
            }
        }, 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setMessages([...messages, { type: 'user', content: inputValue }]);
            setInputValue('');
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, { type: 'assistant', content: t('placeholderResponse') }]);
            }, 2000);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm w-full h-[calc(100vh-2rem)] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b bg-indigo-900 text-white">
                <span className="font-bold">SKAI</span>
            </div>
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`rounded-lg p-3 ${message.type === 'assistant' ? 'text-black' : 'bg-indigo-500 text-white'}`}>
                            {message.isLifehacks ? (
                                <div>
                                    <p className="font-bold mb-2">{t('lifehacksResponse').split('\n\n')[0]}</p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        {t('lifehacksResponse').split('\n\n').slice(1, -1).map((item, i) => (
                                            <li key={i}>{item.substring(3)}</li>
                                        ))}
                                    </ol>
                                    <p className="mt-2">{t('lifehacksResponse').split('\n\n').slice(-1)[0]}</p>
                                </div>
                            ) : message.isParisExcursions ? (
                                <div>
                                    <p className="font-bold mb-2">{t('parisExcursionsResponse').split('\n\n')[0]}</p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        {t('parisExcursionsResponse').split('\n\n').slice(1, -1).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ol>
                                </div>
                            ) : message.isRomeAttractions ? (
                                <div>
                                    <p className="font-bold mb-2">{t('romeAttractionsResponse').split('\n\n')[0]}</p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        {t('romeAttractionsResponse').split('\n\n').slice(1, -1).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ol>
                                    <p className="mt-2">{t('romeAttractionsResponse').split('\n\n').slice(-1)[0]}</p>
                                </div>
                            ) : message.isAmsterdamWeekend ? (
                                <div>
                                    <p className="font-bold mb-2">{t('amsterdamWeekendResponse').split('\n\n')[0]}</p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        {t('amsterdamWeekendResponse').split('\n\n').slice(1, -1).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ol>
                                    <p className="mt-2">{t('amsterdamWeekendResponse').split('\n\n').slice(-1)[0]}</p>
                                </div>
                            ) : message.isLandmarks ? (
                                <div>
                                    <p className="font-bold mb-2">{t('landmarksResponse').split('\n\n')[0]}</p>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        {t('landmarksResponse').split('\n\n').slice(1, -1).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ol>
                                    <p className="mt-2">{t('landmarksResponse').split('\n\n').slice(-1)[0]}</p>
                                </div>
                            ) : (
                                <p className="text-sm">{message.content}</p>
                            )}
                        </div>
                    </div>
                ))}
                {isTyping && <TypingAnimation />}
            </div>
            <div className="p-4">
                {suggestionsStep === 0 && <p className="text-sm text-right text-gray-600 mb-2">{t('dontKnowWhatToAsk')}</p>}
                <SuggestedPlans
                    onPlanClick={handlePlanClick}
                    step={suggestionsStep}
                    selectedInitialSuggestion={selectedInitialSuggestion}
                />
                {suggestionsStep === 1 && <AdditionalQuestions onQuestionClick={handlePlanClick} />}
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder={t('enterQuery')}
                        className="w-full border rounded-lg pl-4 pr-12 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TrySkyPlan;