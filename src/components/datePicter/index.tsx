import React, { useState, useEffect } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, isSameMonth, isSameDay, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';

interface DatePickerProps {
  onSelectDate: (date: Date) => void;
  initialDate?: Date;
  isReturnDate?: boolean;
  onClose: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onSelectDate, initialDate, isReturnDate = false, onClose }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);
  const [dateType, setDateType] = useState<'exact' | 'flexible' | 'period'>('exact');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const renderCalendar = (monthOffset: number = 0) => {
    const monthStart = startOfMonth(addMonths(currentDate, monthOffset));
    const monthEnd = endOfMonth(monthStart);
    const startDate = addDays(monthStart, -((monthStart.getDay() + 6) % 7));
    const endDate = addDays(monthEnd, 6 - ((monthEnd.getDay() + 6) % 7));

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        const isToday = isSameDay(day, new Date());
        days.push(
          <div
            className={`py-1 px-2 text-center text-sm cursor-pointer ${!isSameMonth(day, monthStart)
                ? "text-gray-300"
                : isSelected
                  ? "bg-blue-500 text-white rounded-lg"
                  : isToday
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:bg-blue-100"
              }`}
            key={day.toString()}
            onClick={() => handleDateSelect(cloneDay)}
          >
            {format(day, dateFormat)}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="mt-2">{rows}</div>;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(addMonths(currentDate, -1));
  };

  const MobileView = () => (
    <div className="fixed inset-0 bg-bg-calendar z-50 overflow-auto text-black">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Дата вылета</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <div className="bg-white rounded-lg shadow-md mb-4">
          <div className="flex border-b">
            <div className={`w-1/2 text-center py-3 ${!isReturnDate ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>
              Когда
            </div>
            <div className={`w-1/2 text-center py-3 ${isReturnDate ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}>
              Обратно
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-4">
              {['Точные даты', 'Гибкие даты', 'Период поездки'].map((type, index) => (
                <button
                  key={type}
                  className={`text-sm px-2 py-1 rounded-lg ${
                    dateType === ['exact', 'flexible', 'period'][index]
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-gray-700 bg-gray-100'
                  }`}
                  onClick={() => setDateType(['exact', 'flexible', 'period'][index] as any)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
        {[0, 1].map((offset) => (
          <div key={offset} className="bg-white rounded-lg shadow-md mb-4 p-4">
            <div className="flex justify-between items-center mb-4">
              {offset === 0 && <button onClick={prevMonth} className="text-gray-500 hover:text-gray-700">&lt;</button>}
              <h3 className="text-base font-semibold text-gray-700">
                {format(addMonths(currentDate, offset), 'LLLL yyyy', { locale: ru })}
              </h3>
              {offset === 1 && <button onClick={nextMonth} className="text-gray-500 hover:text-gray-700">&gt;</button>}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>
            {renderCalendar(offset)}
          </div>
        ))}
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[600px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">{isReturnDate ? "Обратно" : "Когда"}</h2>
        {isReturnDate && (
          <button className="text-sm text-blue-500 hover:underline">Обратный билет не нужен</button>
        )}
      </div>
      <div className="flex">
        <div className="w-1/4 pr-4 border-r">
          {['Точные даты', 'Гибкие даты', 'Период поездки'].map((type, index) => (
            <button
              key={type}
              className={`w-full py-2 px-4 mb-2 text-left rounded text-sm ${dateType === ['exact', 'flexible', 'period'][index]
                  ? 'bg-blue-100 text-blue-500'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              onClick={() => setDateType(['exact', 'flexible', 'period'][index] as any)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="w-3/4 pl-4">
          <div className="flex justify-between items-center mb-2">
            <button onClick={prevMonth} className="text-gray-500 hover:text-gray-700">&lt;</button>
            <h3 className="text-base font-semibold text-gray-700">
              {format(currentDate, 'LLLL yyyy', { locale: ru })}
            </h3>
            <h3 className="text-base font-semibold text-gray-700">
              {format(addMonths(currentDate, 1), 'LLLL yyyy', { locale: ru })}
            </h3>
            <button onClick={nextMonth} className="text-gray-500 hover:text-gray-700">&gt;</button>
          </div>
          <div className="flex">
            {[0, 1].map((offset) => (
              <div key={offset} className={`w-1/2 ${offset === 0 ? 'pr-2' : 'pl-2'}`}>
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-1">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                {renderCalendar(offset)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? <MobileView /> : <DesktopView />;
};

export default DatePicker;