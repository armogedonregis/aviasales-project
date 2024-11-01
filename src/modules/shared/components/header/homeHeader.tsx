import { useState } from "react";
import { CommonHeader } from "./commonHeader";
import DatePicker from "../datePicter";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { useTranslations } from 'next-intl';
import { PassengerAvia } from "../passengerSelectors/passengerAvia";
import { useRouter } from "@/lib/i18n/routing";

interface HomeHeaderProps {
  isTransitioning?: boolean;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ isTransitioning }) => {
  const router = useRouter();
  const t = useTranslations('header');
  const [fromCity, setFromCity] = useState("");
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
      showNavigation
      title={t('search.title')}
    >
      <div className="flex lg:flex-row flex-col w-full items-center gap-0.5 mt-6">
        <div className="grid grid-cols-1 lg:flex lg:items-center gap-0.5 max-w-6xl">
          <div className="flex items-center lg:flex-1 focus-within:shadow-focus-orange rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl bg-menu_white_17">
            <input
              type="text"
              placeholder={t('search.from')}
              className="w-full min-h-[60px] py-2.5 pr-12 pl-3.5 placeholder:text-white bg-transparent text-white focus:outline-none"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            />
            <div className="text-xs text-white px-4">ANR</div>
          </div>
          <div className="flex items-center focus-within:shadow-focus-orange lg:flex-1 bg-menu_white_17">
            <input
              type="text"
              placeholder={t('search.to')}
              className="w-full min-h-[60px] py-2.5 pr-12 pl-3.5 placeholder:text-white bg-transparent text-white focus:outline-none"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 lg:flex items-center lg:flex-2 gap-0.5">
            <div className="bg-menu_white_17 focus-within:shadow-focus-orange">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('search.departure')}
                  className="w-full min-h-[60px] py-2.5 pr-12 pl-3.5 bg-transparent placeholder:text-white text-white focus:outline-none"
                  value={departDate ? format(departDate, 'dd MMM yyyy', { locale: enUS }) : ''}
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
            <div className="bg-menu_white_17 flex-1">
              <div className="relative focus-within:shadow-focus-orange">
                <input
                  type="text"
                  placeholder={t('search.return')}
                  className="w-full min-h-[60px] py-2.5 pr-12 pl-3.5 bg-transparent placeholder:text-white focus:outline-none"
                  value={returnDate ? format(returnDate, 'dd MMM yyyy', { locale: enUS }) : ''}
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
          </div>
          <div className="lg:flex-1">
            <PassengerAvia />
          </div>
        </div>
        <div className="p-2 w-full lg:flex-1">
          <button
            onClick={handleSearch}
            className="px-6 py-4 w-full bg-white text-blue_primary font-550 uppercase text-2xl hover:opacity-70 transition-all rounded-2xl"
          >
            {t('search.findTickets')}
          </button>
        </div>
      </div>
      <div className="text-sm flex justify-between lg:flex-row flex-col items-center lg:pr-40">
        <button className="text-white underline">{t('search.complexRoute')}</button>
      </div>
    </CommonHeader>
  );
};