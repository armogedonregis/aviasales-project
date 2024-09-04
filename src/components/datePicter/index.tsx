import React, { useState } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, isSameMonth, isSameDay, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';

interface DatePickerProps {
  onSelectDate: (date: Date) => void;
  initialDate?: Date;
  isReturnDate?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({ onSelectDate, initialDate, isReturnDate = false }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);
  const [dateType, setDateType] = useState<'exact' | 'flexible' | 'period'>('exact');

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
            className={`py-1 px-2 text-center text-sm cursor-pointer ${
              !isSameMonth(day, monthStart)
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
        <div className="flex justify-between" key={day.toString()}>
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

  return (
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
              className={`w-full py-2 px-4 mb-2 text-left rounded text-sm ${
                dateType === ['exact', 'flexible', 'period'][index] 
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
};

export default DatePicker;