import { useTranslations } from "next-intl";
import { ITicket } from "../../interface/ticket";

interface AviaSearchTicketProps {
    ticket: ITicket;
    onSelect: (ticket: ITicket) => void;
}

export const AviaSearchTicket = ({ ticket, onSelect }: AviaSearchTicketProps) => {
    const t = useTranslations('aviaSearch');
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/4 sm:pr-4 flex flex-col justify-between mb-4 sm:mb-0">
                    <div>
                        <div className="flex justify-between items-center sm:block">
                            <div className="text-2xl font-bold mb-2">{ticket.price}₽</div>
                            <div className="flex sm:hidden">
                                <button className="mr-2 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="text-sm text-blue-600 mr-2">Багаж +{ticket.baggagePrice}₽</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <button onClick={() => onSelect(ticket)} className="w-full bg-orange-500 rounded-2xl text-white py-2 font-semibold mb-2">
                            {t('selectTicket')}
                        </button>
                    </div>
                    {ticket.remainingTickets && (
                        <div className="text-xs text-red-500 text-center">
                            Осталось {ticket.remainingTickets} билета по этой цене
                        </div>
                    )}
                </div>
                <div className="w-full sm:w-3/4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img src={ticket.airlineLogo} alt={ticket.airline} className="h-6 mr-2" />
                            <span className="text-lg font-semibold">{ticket.airline}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <div className="text-xl font-semibold">{ticket.departureTime}</div>
                            <div className="text-sm text-gray-500">{ticket.departureCity}</div>
                            <div className="text-xs text-gray-400">{ticket.departureDate}</div>
                            <div className="text-xs text-blue-600">{ticket.departureAirport}</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-sm text-gray-500">В пути: {ticket.duration}</div>
                            <div className="w-32 h-px bg-gray-300 my-2"></div>
                            <div className="text-xs text-blue-600">{ticket.direct ? 'Прямой' : `${ticket.stops} пересадка`}</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-xl font-semibold">{ticket.arrivalTime}</div>
                            <div className="text-sm text-gray-500">{ticket.arrivalCity}</div>
                            <div className="text-xs text-gray-400">{ticket.arrivalDate}</div>
                            <div className="text-xs text-blue-600">{ticket.arrivalAirport}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};