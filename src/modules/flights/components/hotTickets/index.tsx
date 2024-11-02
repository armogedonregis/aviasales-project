'use client'

import { useTranslations } from "next-intl";
import { ITicket } from "../../interface/ticket";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

interface HotTicketsProps {
    tickets: ITicket[];
}

export const HotTickets = ({ tickets }: HotTicketsProps) => {
    const t = useTranslations('aviaSearch');

    const sliderRef = useRef<Slider>(null);
    const [activeSlide, setActiveSlide] = useState(0);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '180px',
        beforeChange: (current: number, next: number) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1536, // 2xl
                settings: {
                    slidesToShow: 3,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 1280, // xl
                settings: {
                    slidesToShow: 3,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 1024, // lg
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 768, // md
                settings: {
                    slidesToShow: 1,
                    centerPadding: '25px',
                }
            },
            {
                breakpoint: 640, // sm
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                }
            }
        ]
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <div className="pt-6 pb-8">
            <div className="">
                <div className="container mx-auto px-5 lg:px-[150px]">
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-[35px] font-550 text-white uppercase">HOT TICKETS</h2>
                        <div className="flex gap-1">
                            <button
                                className="w-[35px] h-[36px] flex items-center justify-center bg-[#2892F5] rounded-full hover:bg-[#1d7fd9] transition-colors"
                                onClick={goToPrev}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 19L8 12L15 5"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                className="w-[35px] h-[36px] flex items-center justify-center bg-[#2892F5] rounded-full hover:bg-[#1d7fd9] transition-colors"
                                onClick={goToNext}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5L16 12L9 19"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="text-[22px] text-white mb-4">They'll Take It Apart Soon!</p>
                </div>

                <Slider ref={sliderRef} {...settings} className="hot-tickets-slider">
                    {tickets.map((ticket, index) => (
                        <div key={index} className="px-1">
                            <div className={`p-3 rounded-[20px] transition-colors ${index === activeSlide ? 'bg-blue_primary' : 'bg-white'
                                }`}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-[30px] font-550 ${index === activeSlide ? 'text-white' : 'text-black'
                                            }`}>
                                            €{ticket.price}
                                        </span>
                                        <span className={`text-[22px] line-through ${index === activeSlide ? 'text-white/70' : 'text-[#202020B2]'
                                            }`}>
                                            €458
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[20px] font-550 ${index === activeSlide ? 'text-white' : 'text-[#202020]'
                                            }`}>
                                            {ticket.airline}
                                        </span>
                                        <img src={ticket.airlineLogo} alt={ticket.airline} className="h-5" />
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <div className={`text-[20px] font-550 ${index === activeSlide ? 'text-white' : 'text-[#202020]'
                                            }`}>
                                            {ticket.departureCity} - {ticket.arrivalCity}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-[18px] font-medium ${index === activeSlide ? 'text-white' : 'text-[#202020]'
                                            }`}>
                                            {ticket.duration} / Direct
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <button className={`text-[20px] px-3 py-1 rounded-[20px] transition-colors ${index === activeSlide
                                        ? 'bg-white text-blue_primary hover:bg-white/90'
                                        : 'bg-blue_primary text-white hover:bg-blue-600'
                                        }`}>
                                        Sep 16, Mon
                                    </button>
                                    <div>
                                        <div className={`text-lg font-semibold ${index === activeSlide ? 'text-white' : 'text-[#202020]'
                                            }`}>
                                            {ticket.departureTime}
                                        </div>
                                        <div className={`text-lg font-550 ${index === activeSlide ? 'text-white' : 'text-[#202020]'
                                            }`}>
                                            {ticket.departureAirport}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="flex justify-center mt-4">
                    <button className="text-white text-[22px] font-550 w-full lg:w-[425px] h-[55px] bg-[#9CCDFC] px-4 py-1.5 rounded-[17px] hover:bg-white/20 transition-colors">
                        More Hot Tickets
                    </button>
                </div>
            </div>
        </div>
    );
};