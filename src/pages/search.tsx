import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Head from "next/head";
import { useState } from "react";
import { SearchHeader } from "@/components/header/searchHeader";


const Filters = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="font-semibold mb-4">Фильтры</h2>

            <button className="w-full text-left text-blue-600 mb-4">
                ❤️ Сохранить поиск
            </button>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Пересадки</h3>
                <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span>Прямые рейсы</span>
                    <span className="ml-auto text-gray-500">37 999₽</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>1 пересадка</span>
                    <span className="ml-auto text-gray-500">43 811₽</span>
                </label>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Длительность пересадок</h3>
                <input type="range" className="w-full" min="0" max="24" step="1" />
                <div className="flex justify-between text-sm text-gray-500">
                    <span>До 24ч</span>
                </div>
            </div>

            <button className="text-blue-600 mb-4">Если комфорт важнее</button>

            <label className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>Без ночных пересадок</span>
            </label>

            {[
                "Вылет в Стамбул",
                "Багаж и тариф",
                "Авиакомпании",
                "Альянсы",
                "Время в пути",
                "Аэропорты пересадок",
                "Аэропорты в Москве",
                "Аэропорты в Стамбуле",
                "Стоимость",
                "Агентства",
                "Способы оплаты",
                "Сортировка"
            ].map((filter, index) => (
                <div key={index} className="mb-2">
                    <button className="flex justify-between items-center w-full text-left">
                        <span>{filter}</span>
                        <span>▼</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

interface Flight {
    price: number;
    airline: string;
    airlineLogo: string;
    departureTime: string;
    arrivalTime: string;
    departureCity: string;
    arrivalCity: string;
    departureDate: string;
    arrivalDate: string;
    departureAirport: string;
    arrivalAirport: string;
    duration: string;
    direct: boolean;
    stops: number;
    cheapest: boolean;
    twoDirectFlights: boolean;
    baggage: boolean;
    baggagePrice: number;
}

const SearchResult = ({ flight }: { flight: Flight }) => (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between">
        <div className="w-1/4 pr-4">
          <div className={`text-xs font-semibold mb-1 ${flight.cheapest ? 'text-green-500 bg-green-100' : flight.twoDirectFlights ? 'text-purple-500 bg-purple-100' : ''} rounded-full px-2 py-0.5 inline-block`}>
            {flight.cheapest ? 'Самый дешёвый' : flight.twoDirectFlights ? 'Всего два прямых' : ''}
          </div>
          <div className="text-3xl font-bold mb-2">{flight.price}₽</div>
          <div className="flex items-center bg-gray-100 rounded-full p-1 mb-2 text-xs">
            <span className="mr-2">{flight.baggage ? 'Багаж включён' : `Багаж +${flight.baggagePrice}₽`}</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={flight.baggage} readOnly />
              <div className="relative w-8 h-4 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors w-full">
            Обновить
          </button>
        </div>
        <div className="flex-1 pl-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <img src={flight.airlineLogo} alt={flight.airline} className="h-6 mr-2" />
              <span className="text-sm font-semibold">{flight.airline}</span>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-semibold">{flight.departureTime}</div>
              <div className="text-sm text-gray-500">{flight.departureCity}</div>
              <div className="text-sm text-gray-500">{flight.departureDate}</div>
              <div className="text-sm font-semibold text-blue-500">{flight.departureAirport}</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-xs text-gray-500 mb-1">В пути: {flight.duration}</div>
              <div className="relative w-40">
                <div className="border-t border-gray-300 my-2"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                  <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.64 14.26l2.86.95 4.02-4.02-8-4.59 1.16-1.16c.1-.1.26-.14.41-.1l9.3 2.98c1.58-1.58 3.15-3.2 4.77-4.75.31-.33.7-.58 1.16-.73.45-.16.87-.27 1.25-.34.55-.05.98.4.93.93-.07.38-.18.8-.34 1.25-.15.46-.4.85-.73 1.16l-4.75 4.78 2.97 9.29c.05.15 0 .29-.1.41l-1.17 1.16-4.57-8.02L8.8 17.5l.95 2.84L8.6 21.5l-2.48-3.62L2.5 15.4l1.14-1.14z" />
                  </svg>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.36 9.74l-2.86-.95-4.02 4.02 8 4.59-1.16 1.16c-.1.1-.26.14-.41.1l-9.3-2.98c-1.58 1.58-3.15 3.2-4.77 4.75-.31.33-.7.58-1.16.73-.45.16-.87.27-1.25.34-.55.05-.98-.4-.93-.93.07-.38.18.8.34-1.25.15-.46.4-.85.73-1.16l4.75-4.78-2.97-9.29c-.05-.15 0-.29.1-.41l1.17-1.16 4.57 8.02 4.02-4.02-.95-2.84 1.15-1.15 2.48 3.62 3.62 2.48-1.14 1.14z" />
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-400">{flight.direct ? 'Прямой' : `${flight.stops} пересадка`}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-semibold">{flight.arrivalTime}</div>
              <div className="text-sm text-gray-500">{flight.arrivalCity}</div>
              <div className="text-sm text-gray-500">{flight.arrivalDate}</div>
              <div className="text-sm font-semibold text-blue-500">{flight.arrivalAirport}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default function Search() {
    const [flights] = useState<Flight[]>([
        {
            price: 37999,
            airline: 'Аэрофлот',
            airlineLogo: '/assets/images/SU.avif',
            departureTime: '09:10',
            arrivalTime: '14:15',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'SVO',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: true,
            twoDirectFlights: false,
            baggage: false,
            baggagePrice: 7340
        },
        {
            price: 85316,
            airline: 'S7 Airlines',
            airlineLogo: '/assets/images/S7.avif',
            departureTime: '10:05',
            arrivalTime: '15:10',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'DME',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: false,
            twoDirectFlights: true,
            baggage: true,
            baggagePrice: 0
        },
        {
            price: 37999,
            airline: 'Аэрофлот',
            airlineLogo: '/assets/images/SU.avif',
            departureTime: '09:10',
            arrivalTime: '14:15',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'SVO',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: true,
            twoDirectFlights: false,
            baggage: false,
            baggagePrice: 7340
        },
        {
            price: 85316,
            airline: 'S7 Airlines',
            airlineLogo: '/assets/images/S7.avif',
            departureTime: '10:05',
            arrivalTime: '15:10',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'DME',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: false,
            twoDirectFlights: true,
            baggage: true,
            baggagePrice: 0
        },
        {
            price: 37999,
            airline: 'Аэрофлот',
            airlineLogo: '/assets/images/SU.avif',
            departureTime: '09:10',
            arrivalTime: '14:15',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'SVO',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: true,
            twoDirectFlights: false,
            baggage: false,
            baggagePrice: 7340
        },
        {
            price: 85316,
            airline: 'S7 Airlines',
            airlineLogo: '/assets/images/S7.avif',
            departureTime: '10:05',
            arrivalTime: '15:10',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'DME',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: false,
            twoDirectFlights: true,
            baggage: true,
            baggagePrice: 0
        },
        {
            price: 37999,
            airline: 'Аэрофлот',
            airlineLogo: '/assets/images/SU.avif',
            departureTime: '09:10',
            arrivalTime: '14:15',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'SVO',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: true,
            twoDirectFlights: false,
            baggage: false,
            baggagePrice: 7340
        },
        {
            price: 85316,
            airline: 'S7 Airlines',
            airlineLogo: '/assets/images/S7.avif',
            departureTime: '10:05',
            arrivalTime: '15:10',
            departureCity: 'Москва',
            arrivalCity: 'Стамбул',
            departureDate: '11 сен, ср',
            arrivalDate: '11 сен, ср',
            departureAirport: 'DME',
            arrivalAirport: 'IST',
            duration: '5ч 5м',
            direct: true,
            stops: 0,
            cheapest: false,
            twoDirectFlights: true,
            baggage: true,
            baggagePrice: 0
        },
    ]);

    return (
        <>
            <Head>
                <title>Поиск билетов - Skypass</title>
                <meta name="description" content="Результаты поиска авиабилетов" />
            </Head>
            <SearchHeader />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Результаты поиска</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4">
                        <Filters />
                    </div>
                    <div className="lg:w-3/4">
                        {flights.map((flight, index) => (
                            <SearchResult key={index} flight={flight} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}