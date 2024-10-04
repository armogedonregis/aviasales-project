import React from 'react';
import { useTranslations } from 'next-intl';

interface AdditionalQuestionsProps {
    onQuestionClick: (question: string) => void;
}

const AdditionalQuestions: React.FC<AdditionalQuestionsProps> = ({ onQuestionClick }) => {
    const t = useTranslations('trySky');

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

    return (
        <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">{t('additionalQuestions')}</h3>
            <div className="space-y-2">
                {questions.map((question, index) => (
                    <button
                        key={index}
                        className="text-left text-sm text-blue-600 hover:underline block"
                        onClick={() => onQuestionClick(question)}
                    >
                        {question}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AdditionalQuestions;