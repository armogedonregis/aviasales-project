import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import TutuJarvelPlan from './tutuLarvelPlan';

interface TutuJarvelIntroProps {
    isModal?: boolean;
    onClose: () => void;
}

const TutuJarvelIntro: React.FC<TutuJarvelIntroProps> = ({ isModal = false, onClose }) => {
    const t = useTranslations('tutuJarvel');
    const [showIntro, setShowIntro] = useState(true);
    const [showPlan, setShowPlan] = useState(false);

    const handleButtonClick = () => {
        setShowIntro(false);
        setShowPlan(true);
    };

    const handlePlanClose = () => {
        setShowPlan(false);
        setShowIntro(false);
    };

    if (!isModal) return null;

    return (
        <>
            {showIntro && (
                <div className={`bg-white ${isModal ? 'rounded-2xl shadow-xl max-w-2xl w-full mx-auto' : 'min-h-screen'}`}>
                    <div className="relative p-8">
                        {isModal && (
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-full p-2"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                        <div className="bg-purple-100 rounded-2xl p-6 mb-8">
                            <div className="flex justify-between items-start mb-6">
                                <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                                <div className="bg-black text-white rounded-full p-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="bg-purple-300 rounded-full p-5">
                                    <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </div>
                                <div className="bg-green-500 text-white rounded-full p-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-black">{t('title')} ✨</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            {t('description')}
                        </p>
                        <button onClick={handleButtonClick} className="w-full bg-black text-white font-bold py-4 px-6 rounded-xl text-lg hover:bg-gray-800 transition-colors duration-200">
                            {t('button')}
                        </button>
                    </div>
                </div>
            )}
            {showPlan && <TutuJarvelPlan isOpen={true} onClose={() => {handlePlanClose(); onClose()}} />}
        </>
    );
};

export default TutuJarvelIntro;