import { useState } from "react";
import Link from "next/link";
import { LogoIcon } from "../icons/logo";
import { useRouter } from "next/router";

export const SearchHeader = () => {
    const [departure, setDeparture] = useState("Moscou");
    const [arrival, setArrival] = useState("Istanbul");
    const [date, setDate] = useState("11 septembre, mer");
    const [returnDate, setReturnDate] = useState("");
    const [passengers, setPassengers] = useState("1 passager");


    const router = useRouter();

    const handleSearch = () => {

    };

    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/">
                        Skypass
                    </Link>
                    <div className="flex items-center space-x-4">
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </button>
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </button>
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center text-blue-600 mb-2">
                        <div className="font-semibold">{departure} - {arrival}</div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-sm text-gray-500">{date}</div>
                </div>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm whitespace-nowrap">Escales</button>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm whitespace-nowrap">Bagages et tarif</button>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm whitespace-nowrap">Horaires</button>
                </div>
            </div>
        </header>
    );
};