import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface AdditionalQuestionsProps {
    onQuestionClick: (question: string) => void;
}

const AdditionalQuestions: React.FC<AdditionalQuestionsProps> = ({ onQuestionClick }) => {
    const t = useTranslations('trySky');
    const [isExpanded, setIsExpanded] = useState(false);

    const questions = [
        t('cheapestFlightsLondonRome'),
        t('goodHotelsParis'),
        t('discountOffersTokyoFlights'),
        t('changeFlightNewYork'),
        t('cancelFlightBerlin'),
        t('addExtraBag'),
        t('checkInAmsterdamLisbon'),
        t('transportationMadrid'),
        t('travelRestrictionsLondonNewYork'),
        t('setAlertsDeals')
    ];

    const visibleQuestions = isExpanded ? questions : questions.slice(0, 3);

    const handleQuestionClick = (question: string) => {
        onQuestionClick(question);
        setIsExpanded(false);
    };

    return (
        <div className="my-4">
            <h3 className="text-sm font-semibold mb-2 text-white">{t('additionalQuestions')}</h3>
            <div className="space-y-2">
                {visibleQuestions.map((question, index) => (
                    <button
                        key={index}
                        className="text-left text-[16px] font-500 text-blue_primary hover:underline block"
                        onClick={() => handleQuestionClick(question)}
                    >
                        {question}
                    </button>
                ))}
            </div>
            {questions.length > 3 && (
                <button
                    className="text-sm text-blue_primary hover:underline mt-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? t('showLess') : t('showMore')}
                </button>
            )}
        </div>
    );
};

export default AdditionalQuestions;