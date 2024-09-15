'use client';

import { ITicket } from "../../interface/ticket";

export const AviaTicketModal = ({ ticket, onClose }: { ticket: ITicket; onClose: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Детали билета</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Дешёвый тариф</h3>
                    <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Ручная кладь 1×10 кг</span>
                        <span className="ml-auto text-gray-500">36×30×27 см</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Без багажа</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Обмен платный</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Без возврата</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Добавить багаж +{ticket.baggagePrice}₽</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">{ticket.departureCity} — {ticket.arrivalCity}</h3>
                    <p className="text-sm text-gray-500 mb-2">{ticket.duration} в пути</p>
                    <div className="flex items-start mb-2">
                        <img src={ticket.airlineLogo} alt={ticket.airline} className="w-6 h-6 mr-2" />
                        <div>
                            <p className="font-semibold">{ticket.airline}</p>
                            <p className="text-sm text-gray-500">{ticket.duration} в полёте</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">{ticket.departureTime}</p>
                            <p className="text-sm text-gray-500">{ticket.departureDate}</p>
                            <p className="text-sm text-gray-500">{ticket.departureCity}, {ticket.departureAirport}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold">{ticket.arrivalTime}</p>
                            <p className="text-sm text-gray-500">{ticket.arrivalDate}</p>
                            <p className="text-sm text-gray-500">{ticket.arrivalCity}, {ticket.arrivalAirport}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold">{ticket.price}₽</p>
                        <p className="text-sm text-gray-500">На сайте КупиБилет</p>
                    </div>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold">
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};