import React, { useState } from 'react';

interface Passenger {
  type: string;
  count: number;
  ageDescription: string;
}

const PassengerSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passengers, setPassengers] = useState<Passenger[]>([
    { type: 'Взрослые', count: 1, ageDescription: '12 лет и старше' },
    { type: 'Дети', count: 0, ageDescription: 'от 2 до 11 лет' },
    { type: 'Младенцы', count: 0, ageDescription: 'Младше 2 лет, без места' },
  ]);
  const [serviceClass, setServiceClass] = useState('Комфорт');

  const totalPassengers = passengers.reduce((sum, p) => sum + p.count, 0);

  const updatePassengerCount = (index: number, increment: number) => {
    const newPassengers = [...passengers];
    newPassengers[index].count = Math.max(0, newPassengers[index].count + increment);
    setPassengers(newPassengers);
  };

  return (
    <div className="relative text-black">
      <button
        className="w-full px-4 py-2 text-left bg-white border rounded-lg focus:outline-none flex flex-col"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{`${totalPassengers} пассажир${totalPassengers !== 1 ? 'а' : ''}`}</span>
        <span className="text-gray-500 text-sm">{serviceClass}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-72 mt-2 bg-white border rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="font-bold mb-4">Количество пассажиров</h3>
            {passengers.map((passenger, index) => (
              <div key={passenger.type} className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-semibold">{passenger.type}</div>
                  <div className="text-xs text-gray-500">{passenger.ageDescription}</div>
                </div>
                <div className="flex items-center">
                  <button
                    className="w-8 h-8 rounded-full bg-gray-200 text-blue-600 font-bold"
                    onClick={() => updatePassengerCount(index, -1)}
                  >
                    -
                  </button>
                  <span className="mx-4 font-semibold">{passenger.count}</span>
                  <button
                    className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold"
                    onClick={() => updatePassengerCount(index, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <h3 className="font-bold mt-6 mb-4">Класс обслуживания</h3>
            {['Эконом', 'Комфорт', 'Бизнес', 'Первый класс'].map((cls) => (
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
                <label htmlFor={cls} className="text-sm">{cls}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;