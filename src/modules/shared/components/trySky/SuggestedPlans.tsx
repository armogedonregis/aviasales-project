import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SuggestedPlansProps {
    onPlanClick: (plan: string) => void;
    step: number;
    selectedInitialSuggestion: string | null;
}

const SuggestedPlans: React.FC<SuggestedPlansProps> = ({ onPlanClick, step, selectedInitialSuggestion }) => {
    const t = useTranslations('trySky');
    const sliderRef = useRef<Slider>(null);

    const suggestions = {
        initialSuggestions: [
            t('plan3DayUAE'),
            t('showParisExcursions'),
            t('topRomeAttractions'),
            t('weekendAmsterdam')
        ],
        secondarySuggestions: {
            [t('plan3DayUAE')]: [t('lifehacks'), t('landmarks'), t('hotels')],
            [t('showParisExcursions')]: [],
            [t('topRomeAttractions')]: [],
            [t('weekendAmsterdam')]: [t('lifehacks'), t('landmarks'), t('hotels')]
        }
    };


    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const hotels = [
        { name: t('showOnMap'), image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png', price: '' },
        { name: t('citySeasonsAlHamraHotel'), image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', price: '€50' },
        { name: t('alDiarMina'), image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', price: '€65' },
        { name: t('theRitzCarltonAbuDhabi'), image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', price: '€225' },
    ];



    const currentSuggestions = step === 0
        ? suggestions.initialSuggestions
        : (selectedInitialSuggestion && suggestions.secondarySuggestions[selectedInitialSuggestion] 
           ? suggestions.secondarySuggestions[selectedInitialSuggestion] 
           : []);

    return (
        <div className="space-y-4 mb-4">
             {step === 1 && (selectedInitialSuggestion === t('plan3DayUAE') || selectedInitialSuggestion === t('weekendAmsterdam')) && (
                <div className="relative pt-10">
                    <div className="absolute top-0 right-0 z-10 space-x-2">
                        <button onClick={() => sliderRef.current?.slickPrev()} className="bg-white text-blue-500 rounded-full p-2 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={() => sliderRef.current?.slickNext()} className="bg-white text-blue-500 rounded-full p-2 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {hotels.map((hotel, index) => (
                            <div key={index} className="px-2 py-2 h-full">
                                <div className="bg-white rounded-lg shadow-md p-2 flex flex-col h-[130px] lg:h-[200px]">
                                    {index === 0 ? (
                                        <div className="w-full h-14 lg:h-[130px] flex items-center justify-center bg-blue-100 rounded-t-lg flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <img src={hotel.image} alt={hotel.name} className="w-full h-14 lg:h-[130px] object-cover rounded-t-lg flex-shrink-0" />
                                    )}
                                    <div className="mt-2 flex flex-col justify-between flex-grow">
                                        <p className="text-[10px] lg:text-[16px] font-semibold">{hotel.name}</p>
                                        {hotel.price && <p className="text-sm text-gray-600 mt-auto">{hotel.price}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
            <div className={`flex ${step === 0 ? 'flex-col items-end space-y-2' : 'flex-row space-x-2'}`}>
                {currentSuggestions.map((suggestion, index) => (
                    <button
                        key={index}
                        className={`bg-blue-500 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-600 transition-colors duration-200 ${step === 0 ? 'text-left' : ''}`}
                        onClick={() => onPlanClick(suggestion)}
                    >
                        {suggestion}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SuggestedPlans;