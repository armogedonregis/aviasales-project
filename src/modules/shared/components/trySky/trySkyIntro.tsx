'use client'

import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTrySky } from './trySkyContext';
import TrySkyModal from './trySkyModal';
import TrySkyPlan from './trySkyPlan';

const TrySkyIntro: React.FC = () => {
    const t = useTranslations('trySky');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isTrySkyOpen, closeTrySky } = useTrySky();
    const containerRef = useRef<HTMLDivElement>(null);

    const handleYesClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        if (isTrySkyOpen && containerRef.current) {
            containerRef.current.focus();
            containerRef.current.parentElement?.classList.add('bg-gradient-try-sky');
        
            
            setTimeout(() => {
                const yOffset = containerRef.current?.getBoundingClientRect().top ?? 0;
                const y = yOffset + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }, 100);
        }
        return () => {
            containerRef.current?.parentElement?.classList.remove('bg-gradient-try-sky');
        };
    }, [isTrySkyOpen]);


    return (
        <AnimatePresence>
            {isTrySkyOpen && (
                <motion.div
                    ref={containerRef}
                    tabIndex={-1}
                    className="w-full shadow-md focus:outline-none"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container mx-auto px-4 pt-6 pb-14">
                        <TrySkyPlan />
                    </div>
                    {/* <div className="container mx-auto px-4 py-6">
                        <div className="bg-indigo-700 text-white rounded-lg p-4">
                            <p className="font-bold mb-2">SKAI:</p>
                            {t('introMessage').split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < t('introMessage').split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <p className="font-semibold mb-2 text-blue-600">YOU:</p>
                            <p>{t('sampleQuery')}</p>
                        </div>
                        <div className="bg-gray-200 rounded-lg p-4">
                            <p className="font-semibold mb-2">SKAI:</p>
                            <p className="mb-2">{t('responseMessage')}</p>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex space-x-2">
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <p className="text-sm font-semibold">79€</p>
                                        <p className="text-xs text-gray-500">10:30 - 15:45</p>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm">
                                        <p className="text-sm font-semibold">79€</p>
                                        <p className="text-xs text-gray-500">10:30 - 15:45</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-4">{t('showHotelsQuestion')}</p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleYesClick}
                                    className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                                >
                                    {t('yesButton')}
                                </button>
                                <button
                                    onClick={closeTrySky}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    {t('onlyBuyTicketButton')}
                                </button>
                            </div>
                        </div>
                    </div>
                    <TrySkyModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TrySkyIntro;