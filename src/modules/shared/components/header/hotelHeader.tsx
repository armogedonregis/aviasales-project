import { useTranslations } from "next-intl";
import { CommonHeader } from "./commonHeader";
import { useRouter } from "next/navigation";
import { PassengerAvia } from "../passengerSelectors/passengerAvia";
import { useState } from "react";
import { format } from "date-fns/format";
import DatePicker from "../datePicter";

interface HotelHeaderProps {
  isTransitioning?: boolean;
}

export const HotelHeader: React.FC<HotelHeaderProps> = ({ isTransitioning }) => {
  const t = useTranslations('header.hotelSearch');

  const router = useRouter();
  const [fromCity, setFromCity] = useState("");
  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [showDepartDatePicker, setShowDepartDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const handleSearch = () => {
    router.push('/hotel-search');
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
      title={t('title')}
    >
      <div className="grid grid-cols-1 mt-6 lg:grid-cols-4 w-full gap-0.5">
        <div className="focus-within:shadow-focus-orange h-[60px] rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl bg-white">
          <input
            type="text"
            placeholder={t('cityOrHotel')}
            className="w-full min-h-[60px] py-2.5 pr-12 pl-3.5 bg-transparent text-black focus:outline-none"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          />
        </div>
        <div className="flex gap-0.5 h-[60px]">
          <div className="bg-white">
            <div className="relative focus-within:shadow-focus-orange">
              <input
                type="text"
                placeholder={t('checkIn')}
                className="w-full min-h-[60px] py-2.5 pr-12 pl-3.5 bg-transparent text-black focus:outline-none"
                value={departDate ? format(departDate, 'dd MMM yyyy') : ''}
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
          <div className="bg-white">
            <div className="relative focus-within:shadow-focus-orange">
              <input
                type="text"
                placeholder={t('checkOut')}
                className="w-full min-h-[60px] py-2.5 pr-12 pl-3.5 bg-transparent text-black focus:outline-none"
                value={returnDate ? format(returnDate, 'dd MMM yyyy') : ''}
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
        <div className="">
          <PassengerAvia />
        </div>
        <div className="">
          <button
            onClick={handleSearch}
            className="px-6 h-[60px] w-full mt-2 lg:mt-0 lg:w-auto lg:ml-1.5 bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors rounded-2xl"
          >
            {t('findHotels')}
          </button>
        </div>
      </div>
    </CommonHeader>
  );
};