import { useTranslations } from "next-intl";
import { CommonHeader } from "./commonHeader";
import { useRouter } from "next/navigation";

interface HotelHeaderProps {
  isTransitioning?: boolean;
}

export const HotelHeader: React.FC<HotelHeaderProps> = ({ isTransitioning }) => {
  const router = useRouter();
  const t = useTranslations('header');

  const handleSearch = () => {
    router.push('/hotel-search');
  };
  return (
    <CommonHeader
      isTransitioning={isTransitioning}
      title={t('hotelSearch.title')}
    >
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-6">
        <div className="flex-1 relative">

        </div>
        {/* Инпуты для дат и гостей */}
        <button onClick={handleSearch} className="w-full md:w-auto px-8 h-[60px] bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors rounded-lg">
          {t('hotelSearch.findHotels')}
        </button>
      </div>
      {/* Дополнительные элементы, если нужны */}
    </CommonHeader>
  );
};