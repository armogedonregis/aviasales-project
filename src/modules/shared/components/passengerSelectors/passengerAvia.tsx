import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface PassengerCount {
  adults: number;
  children: number;
  infants: number;
}

type ServiceClass = 'economy' | 'comfort' | 'business' | 'firstClass';

export const PassengerAvia: React.FC = () => {
  const t = useTranslations('header.passengerSelector');
  
  const [isOpen, setIsOpen] = useState(false);
  const [passengerCount, setPassengerCount] = useState<PassengerCount>({
    adults: 1,
    children: 0,
    infants: 0
  });
  const [serviceClass, setServiceClass] = useState<ServiceClass>('comfort');

  const totalPassengers = Object.values(passengerCount).reduce((sum, count) => sum + count, 0);

  const updatePassengerCount = (type: keyof PassengerCount, increment: number) => {
    setPassengerCount(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + increment)
    }));
  };

  const passengerTypes = [
    { type: 'adults' as const, label: t('adults'), description: t('adultsAge') },
    { type: 'children' as const, label: t('children'), description: t('childrenAge') },
    { type: 'infants' as const, label: t('infants'), description: t('infantsAge') },
  ];

  const serviceClasses: ServiceClass[] = ['economy', 'comfort', 'business', 'firstClass'];

  return (
    <div className="relative text-black">
      <button
        className="w-full px-4 py-2 text-left focus-within:shadow-focus-orange bg-white rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl focus:outline-none flex flex-col"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{t('passengers', { count: totalPassengers })}</span>
        <span className="text-gray-500 text-sm">{t(serviceClass)}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-72 mt-2 bg-white border rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="font-bold mb-4">{t('numberOfPassengers')}</h3>
            {passengerTypes.map(({ type, label, description }) => (
              <div key={type} className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs text-gray-500">{description}</div>
                </div>
                <div className="flex items-center">
                  <button
                    className="w-8 h-8 rounded-full bg-gray-200 text-blue-600 font-bold"
                    onClick={() => updatePassengerCount(type, -1)}
                  >
                    -
                  </button>
                  <span className="mx-4 font-semibold">{passengerCount[type]}</span>
                  <button
                    className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold"
                    onClick={() => updatePassengerCount(type, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <h3 className="font-bold mt-6 mb-4">{t('serviceClass')}</h3>
            {serviceClasses.map((cls) => (
              <div key={cls} className="flex items-center mb-3">
                <input
                  type="radio"
                  id={cls}
                  name="serviceClass"
                  value={cls}
                  checked={serviceClass === cls}
                  onChange={() => setServiceClass(cls)}
                  className="mr-3 w-4 h-4 text-blue-600"
                />
                <label htmlFor={cls} className="text-sm">{t(cls)}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};