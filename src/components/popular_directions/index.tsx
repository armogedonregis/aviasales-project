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
    { city: 'Ташкент', country: 'Узбекистан', flag: '🇺🇿' },
    { city: 'Стамбул', country: 'Турция', flag: '🇹🇷' },
    { city: 'Ереван', country: 'Армения', flag: '🇦🇲' },
    { city: 'Анталья', country: 'Турция', flag: '🇹🇷' },
    { city: 'Баку', country: 'Азербайджан', flag: '🇦🇿' },
    { city: 'Душанбе', country: 'Таджикистан', flag: '🇹🇯' },
    { city: 'Дубай', country: 'ОАЭ', flag: '🇦🇪' },
    { city: 'Пхукет', country: 'Таиланд', flag: '🇹🇭' },
    { city: 'Ош', country: 'Кыргызстан', flag: '🇰🇬' },
    { city: 'Бишкек', country: 'Кыргызстан', flag: '🇰🇬' },
    { city: 'Бангкок', country: 'Таиланд', flag: '🇹🇭' },
    { city: 'Самарканд', country: 'Узбекистан', flag: '🇺🇿' },
  ];

  const helpTopics = [
    'Не пришёл билет',
    'Возврат или обмен билета',
    'Про багаж',
    'Изменение паспортных данных',
    'Перелёты с детьми',
  ];

  return (
    <div className="flex justify-between mt-8 mx-auto max-w-6xl">
      <div className="w-2/3 pr-8">
        <h2 className="text-2xl font-bold mb-4 flex items-start gap-2">
          <PopularIcon />
          Популярные направления
        </h2>
        <div className="grid grid-cols-2 gap-4">
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
      <div className="w-1/3">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-5">
          <PopularHelp />
          Помощь и советы
        </h2>
        <div className="space-y-2">
          {helpTopics.map((topic, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
              <span className="text-blue-500">{topic}</span>
              <span className="text-gray-400">▼</span>
            </div>
          ))}
          <button className="w-full border border-blue-500 text-blue-500 rounded-lg p-2 mt-4 hover:bg-blue-50 transition-colors">
            СМОТРЕТЬ ВЕСЬ РАЗДЕЛ →
          </button>
        </div>
      </div>
    </div>
  );
};