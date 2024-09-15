export interface ITicket {
    price: number;
    airline: string;
    airlineLogo: string;
    departureTime: string;
    arrivalTime: string;
    departureCity: string;
    arrivalCity: string;
    departureAirport: string;
    arrivalAirport: string;
    departureDate: string;
    arrivalDate: string;
    duration: string;
    direct: boolean;
    stops: number;
    baggagePrice: number;
    remainingTickets?: number;
    tag?: string;
    baggageIncluded: boolean;
}