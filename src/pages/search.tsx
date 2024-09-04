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
        <div className="flex justify-between items-start mb-2">
            <div className={`text-xs font-semibold ${flight.cheapest ? 'text-green-500 bg-green-100' : flight.twoDirectFlights ? 'text-purple-500 bg-purple-100' : ''} rounded-full px-2 py-0.5 inline-block`}>
                {flight.cheapest ? 'Самый дешёвый' : flight.twoDirectFlights ? 'Всего два прямых' : ''}
            </div>
            <button className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
        </div>
        <div className="flex justify-between items-center mb-2">
            <div className="text-2xl font-bold">{flight.price}₽</div>
            <div className="text-sm text-gray-500">{flight.baggage ? `С багажом ${flight.baggagePrice}кг` : 'Без багажа'}</div>
        </div>
        <div className="flex items-center mb-2">
            <img src={flight.airlineLogo} alt={flight.airline} className="h-6 mr-2" />
            <div className="flex-1">
                <div className="flex justify-between">
                    <div className="text-sm font-semibold">{flight.departureTime}</div>
                    <div className="text-sm font-semibold">{flight.arrivalTime}</div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                    <div>{flight.departureAirport}</div>
                    <div>{flight.arrivalAirport}</div>
                </div>
            </div>
        </div>
        <div className="text-xs text-gray-500 mb-2">
            {flight.duration} / {flight.direct ? 'Прямой' : `${flight.stops} пересадка`}
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
            <main className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-4">
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <div className="font-semibold">MOW - IST</div>
                            <button className="text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-sm text-gray-500">11 сентября</div>
                    </div>
                    <div className="flex space-x-2 mb-4 overflow-x-auto">
                        <button className="bg-white rounded-full px-4 py-2 text-sm whitespace-nowrap">Пересадки</button>
                        <button className="bg-white rounded-full px-4 py-2 text-sm whitespace-nowrap">Багаж и тариф</button>
                        <button className="bg-white rounded-full px-4 py-2 text-sm whitespace-nowrap">Время</button>
                    </div>
                    {flights.map((flight, index) => (
                        <SearchResult key={index} flight={flight} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}