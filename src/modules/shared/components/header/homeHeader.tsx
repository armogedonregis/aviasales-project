import { useState } from "react";
import { useRouter } from "next/navigation";
import { CommonHeader } from "./commonHeader";
import DatePicker from "../datePicter";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import { useTranslations } from 'next-intl';

interface HomeHeaderProps {
  isTransitioning?: boolean;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ isTransitioning }) => {
  const router = useRouter();
  const t = useTranslations('header');
  const [fromCity, setFromCity] = useState("Москва");
  const [toCity, setToCity] = useState("");
  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [showDepartDatePicker, setShowDepartDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const handleSearch = () => {
    router.push('/search');
  };

  const handleDepartDateSelect = (date: Date) => {
    setDepartDate(date);
    setShowDepartDatePicker(false);
  };

  const handleReturnDateSelect = (date: Date) => {
    setReturnDate(date);
    setShowReturnDatePicker(false);
  };

  return (
    <CommonHeader
      isTransitioning={isTransitioning}
      title={t('search.title')}
    >
      <div className="flex flex-col mt-8 md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder={t('search.from')}
            className="w-full px-4 h-[60px] text-black focus:outline-none rounded-lg"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          />
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder={t('search.to')}
            className="w-full px-4 h-[60px] text-black focus:outline-none rounded-lg"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          />
        </div>
        <div className="flex-1 relative">
          <div className="relative">
            <input
              type="text"
              placeholder={t('search.departure')}
              className="w-full px-4 h-[60px] text-black focus:outline-none rounded-lg"
              value={departDate ? format(departDate, 'dd MMM yyyy', { locale: ru }) : ''}
              onClick={() => setShowDepartDatePicker(!showDepartDatePicker)}
              readOnly
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500">🗓</span>
          </div>
          {showDepartDatePicker && (
            <div className="absolute z-20 mt-2">
              <DatePicker
                onSelectDate={handleDepartDateSelect}
                initialDate={departDate || new Date()}
                onClose={() => setShowDepartDatePicker(false)}
              />
            </div>
          )}
        </div>
        <div className="flex-1 relative">
          <div className="relative">
            <input
              type="text"
              placeholder={t('search.return')}
              className="w-full px-4 h-[60px] text-black focus:outline-none rounded-lg"
              value={returnDate ? format(returnDate, 'dd MMM yyyy', { locale: ru }) : ''}
              onClick={() => setShowReturnDatePicker(!showReturnDatePicker)}
              readOnly
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500">🗓</span>
          </div>
          {showReturnDatePicker && (
            <div className="absolute z-20 mt-2">
              <DatePicker
                onSelectDate={handleReturnDateSelect}
                initialDate={returnDate || new Date()}
                onClose={() => setShowReturnDatePicker(false)}
                isReturnDate
              />
            </div>
          )}
        </div>
        <div className="flex-1">
          {/* <PassengerSelector /> */}
        </div>
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-8 h-[60px] bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors rounded-lg"
        >
          {t('search.findTickets')}
        </button>
      </div>
      <div className="mt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <button className="text-white underline mb-2 md:mb-0">{t('search.complexRoute')}</button>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>{t('search.openInNewTab')}</span>
        </label>
      </div>
    </CommonHeader>
  );
};