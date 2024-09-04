import { useState } from "react";
import Link from "next/link";
import { LogoIcon } from "../icons/logo";
import { useRouter } from "next/router";

export const SearchHeader = () => {
    const [departure, setDeparture] = useState("Москва");
    const [arrival, setArrival] = useState("Стамбул");
    const [date, setDate] = useState("11 сентября, ср");
    const [returnDate, setReturnDate] = useState("");
    const [passengers, setPassengers] = useState("1 пассажир");

    const router = useRouter();

    const handleSearch = () => {
        // Здесь можно добавить логику поиска
    };

    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/">
                        <LogoIcon />
                    </Link>
                    <nav className="flex space-x-4">
                        {["Авиабилеты", "Отели", "Короче", "Избранное", "Бизнес"].map((item, index) => (
                            <Link key={index} href="#" className={`text-sm ${index === 0 ? 'bg-white text-blue-600 px-3 py-1 rounded-full' : ''}`}>
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4 text-sm">
                        <Link href="/profile">Профиль</Link>
                        <Link href="/support">Поддержка</Link>
                        <select className="bg-blue-600 text-white">
                            <option>RUB</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-lg p-1">
                    <div className="flex flex-1 items-center bg-white rounded-lg overflow-hidden">
                        <input
                            type="text"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            className="px-3 py-2 text-sm text-black flex-1"
                        />
                        <div className="bg-gray-200 px-2 py-2 text-sm text-gray-600">MOW</div>
                        <div className="px-2 py-2 text-blue-600">⇄</div>
                        <input
                            type="text"
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            className="px-3 py-2 text-sm text-black flex-1"
                        />
                        <div className="bg-gray-200 px-2 py-2 text-sm text-gray-600">IST</div>
                    </div>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-white text-black px-3 py-2 text-sm w-full pr-8"
                            placeholder="Туда"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600">×</span>
                    </div>
                    <input
                        type="text"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="bg-white text-black px-3 py-2 text-sm flex-1"
                        placeholder="Обратно"
                    />
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="bg-white text-black px-3 py-2 text-sm w-full pr-8"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                    </div>
                    <button 
                        onClick={handleSearch}
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold"
                    >
                        Найти билеты
                    </button>
                </div>
                <div className="mt-2 text-sm">
                    <button className="text-white underline">Составить сложный маршрут</button>
                </div>
            </div>
        </header>
    );
};