import React from 'react';
import Image from 'next/image';
import PopularIcon from "/public/assets/vector/popular_direction_icon.svg"
import PopularHelp from "/public/assets/vector/popular_direction_help_icon.svg"


interface Direction {
  city: string;
  country: string;
  flag: string;
}

export const PopularDirection: React.FC = () => {
    const directions: Direction[] = [
        { city: 'Tachkent', country: 'Ouzbékistan', flag: '🇺🇿' },
        { city: 'Istanbul', country: 'Turquie', flag: '🇹🇷' },
        { city: 'Erevan', country: 'Arménie', flag: '🇦🇲' },
        { city: 'Antalya', country: 'Turquie', flag: '🇹🇷' },
        { city: 'Bakou', country: 'Azerbaïdjan', flag: '🇦🇿' },
        { city: 'Douchanbé', country: 'Tadjikistan', flag: '🇹🇯' },
        { city: 'Dubaï', country: 'EAU', flag: '🇦🇪' },
        { city: 'Phuket', country: 'Thaïlande', flag: '🇹🇭' },
        { city: 'Och', country: 'Kirghizistan', flag: '🇰🇬' },
        { city: 'Bichkek', country: 'Kirghizistan', flag: '🇰🇬' },
        { city: 'Bangkok', country: 'Thaïlande', flag: '🇹🇭' },
        { city: 'Samarcande', country: 'Ouzbékistan', flag: '🇺🇿' },
      ];

      const helpTopics = [
        'Billet non reçu',
        'Remboursement ou échange de billet',
        'À propos des bagages',
        'Modification des données du passeport',
        'Voyager avec des enfants',
      ];

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-8 mx-auto max-w-6xl px-4">
      <div className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-start gap-2">
          <PopularIcon />
          Destinations populaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {directions.map((direction, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{direction.flag}</span>
                <div>
                  <div className="font-semibold">{direction.city}</div>
                  <div className="text-sm text-gray-600">{direction.country}</div>
                </div>
              </div>
              <span className="text-blue-500">▼</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <PopularHelp />
          Aide et conseils
        </h2>
        <div className="space-y-2">
          {helpTopics.map((topic, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
              <span className="text-blue-500">{topic}</span>
              <span className="text-gray-400">▼</span>
            </div>
          ))}
          <button className="w-full border border-blue-500 text-blue-500 rounded-lg p-2 mt-4 hover:bg-blue-50 transition-colors">
            VOIR TOUTE LA SECTION →
          </button>
        </div>
      </div>
    </div>
  );
};