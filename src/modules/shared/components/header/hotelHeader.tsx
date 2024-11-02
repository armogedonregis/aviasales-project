import { useTranslations } from "next-intl";
import { CommonHeader } from "./commonHeader";
import { useRouter } from "next/navigation";
import { PassengerAvia } from "../passengerSelectors/passengerAvia";
import { useState } from "react";
import { format } from "date-fns/format";
import DatePicker from "../datePicter";
import { BaseHeader } from "./baseHeader";
import { motion } from "framer-motion";
import { useTrySky } from "../trySky/trySkyContext";

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
  const { isTrySkyOpen, openTrySky, closeTrySky } = useTrySky();

  const handleTrySkyClick = () => {
    if (isTrySkyOpen) {
      closeTrySky();
    } else {
      openTrySky();
    }
  };

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
    <BaseHeader
      isTransitioning={isTransitioning}
    >
      <div className="container mx-auto px-[150px] pt-[80px]">
        <motion.h1
          className="text-4xl md:text-[76px] font-450 mb-12 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {t('title')} {"  "}
          <motion.span
            className="font-550 text-4xl md:text-[76px] inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTrySkyOpen ? 1 : 0, y: isTrySkyOpen ? 0 : 20 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            {"   with AI"}
          </motion.span>
        </motion.h1>
        <div className="flex lg:flex-row flex-col w-full items-center gap-0.5 mt-6">
          <div className="grid grid-cols-1 lg:flex lg:items-center gap-0.5">
            <button onClick={handleTrySkyClick} className="lg:flex lg:items-center lg:justify-center rounded-tl-2xl rounded-bl-2xl lg:min-w-[157px] min-h-[77px] bg-skai-button">
              <span className="mr-2 lg:inline hidden">
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 0L23.606 8.39396L32 11.5L23.606 14.606L20.5 23L17.394 14.606L9 11.5L17.394 8.39396L20.5 0Z" fill="white" />
                  <path d="M7 16L8.89064 21.1094L14 23L8.89064 24.8906L7 30L5.10936 24.8906L0 23L5.10936 21.1094L7 16Z" fill="white" />
                  <circle cx="7.5" cy="4.5" r="1.5" fill="white" />
                </svg>
              </span>
              <span className="text-2xl font-650">SKAI</span>
            </button>
            <div className="flex items-center lg:flex-1 rounded-t-2xl lg:rounded-r-none lg:rounded-l-none bg-menu_white_17">
              <input
                type="text"
                placeholder={t('cityOrHotel')}
                className="w-full text-[22px] min-h-[77px] lg:min-w-[166px] py-2.5 pr-12 pl-3.5 placeholder:text-white bg-transparent text-white focus:outline-none"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
              />
            </div>
            <div className="bg-menu_white_17">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('checkIn')}
                  className="w-full text-[22px] min-h-[77px] lg:min-w-[166px] py-2.5 pr-12 pl-3.5 bg-transparent placeholder:text-white text-white focus:outline-none"
                  value={departDate ? format(departDate, 'dd MMM yyyy') : ''}
                  onClick={() => setShowDepartDatePicker(!showDepartDatePicker)}
                  readOnly
                />
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
            <div className="bg-menu_white_17">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('checkOut')}
                  className="w-full text-[22px] min-h-[77px] min-w-[166px] py-2.5 pr-12 pl-3.5 bg-transparent placeholder:text-white focus:outline-none"
                  value={returnDate ? format(returnDate, 'dd MMM yyyy') : ''}
                  onClick={() => setShowReturnDatePicker(!showReturnDatePicker)}
                  readOnly
                />
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
            <div>
              <PassengerAvia />
            </div>
            <div>
              <button
                onClick={handleSearch}
                className="px-6 py-4 w-full min-h-[77px] min-w-[350px] bg-btn-tickets text-white rounded-tr-3xl rounded-br-3xl font-550 uppercase text-2xl hover:opacity-70 transition-all"
              >
                {t('findHotels')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseHeader>
  );
};