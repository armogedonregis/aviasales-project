import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PassengerSelector from "../UI/passenger";
import DatePicker from "../datePicter";
import { LogoIcon } from "../icons/logo";

const menuItems = [
    { label: "Авиабилеты", icon: "✈️" },
    { label: "Отели", icon: "🏨" },
    { label: "Короче", icon: "🕒" },
    { label: "Избранное", icon: "❤️" },
    { label: "Для бизнеса", icon: "💼" },
];

export const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const menuRef = useRef<HTMLUListElement>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDatePickerTwo, setShowDatePickerTwo] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const updateIndicator = () => {
            if (menuRef.current) {
                const activeItem = menuRef.current.children[activeIndex] as HTMLElement;
                setIndicatorStyle({
                    width: `${activeItem.offsetWidth}px`,
                    transform: `translateX(${activeItem.offsetLeft}px)`,
                });
            }
        };

        updateIndicator();
        window.addEventListener('resize', updateIndicator);

        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeIndex]);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };
    const handleDateSelectTwo = (date: Date) => {
        setSelectedDate(date);
        setShowDatePickerTwo(false);
    };

    return (
        <header className={`bg-blue-600 text-white transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <LogoIcon />
                {isScrolled ? (
                    <nav className="flex items-center space-x-4">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className={`px-3 py-1 rounded-full text-sm ${index === 0 ? "bg-white text-blue-600" : "text-white hover:bg-blue-500"}`}
                            >
                                {item.icon} {item.label}
                            </button>
                        ))}
                    </nav>
                ) : null}
                <div className="flex items-center space-x-4">
                    <Link href="/profile" className="text-sm">
                        <span className="mr-1"><svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon"><path d="M8.102 5.224C8 5.605 8 6.07 8 7v2c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.121 2.12C10.605 13 11.07 13 12 13c.93 0 1.395 0 1.777-.102a3 3 0 0 0 2.12-2.121C16 10.395 16 9.93 16 9V7c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C13.395 3 12.93 3 12 3c-.93 0-1.395 0-1.777.102a3 3 0 0 0-2.12 2.122ZM11 15a6 6 0 0 0-6 6h14a6 6 0 0 0-6-6h-2Z"></path></svg></span>
                        Профиль
                    </Link>
                    <Link href="/support" className="text-sm">
                    <span className="mr-1"><svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 1 0-7.586-4.155L3 20l1 1 3.155-1.414A8.958 8.958 0 0 0 12 21Zm1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.14-8.645c.668.454 1.11 1.189 1.11 2.145 0 .767-.355 1.3-.78 1.682-.272.245-.634.472-.92.651-.097.061-.186.117-.259.166-.35.233-.545.419-.641.628-.072.155-.129.412-.015.873h-1.528c-.084-.56-.024-1.058.18-1.502.28-.604.772-.98 1.172-1.247.158-.105.295-.191.418-.268.236-.148.42-.262.59-.416.2-.18.283-.335.283-.567 0-.443-.183-.72-.453-.905-.298-.202-.743-.312-1.237-.272-1.02.081-1.81.71-1.81 1.677h-1.5c0-2.033 1.71-3.054 3.19-3.172.756-.06 1.56.092 2.2.527Z"></path></svg></span>
                    Поддержка
                    </Link>
                    <div className="flex items-center">
                    <span className="mr-1"><svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-test-id="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-16c-.025 0-.17.01-.42.292-.248.28-.518.744-.765 1.402-.195.52-.363 1.128-.496 1.806h3.362c-.133-.678-.301-1.286-.496-1.806-.247-.658-.517-1.121-.766-1.402C12.17 5.01 12.025 5 12 5Zm-3.058.992A13.93 13.93 0 0 0 8.286 8.5h-2.35a7.03 7.03 0 0 1 3.149-2.866c-.05.117-.097.237-.143.358ZM8.05 10.5H5.161a7.026 7.026 0 0 0 0 3h2.89a22.209 22.209 0 0 1 0-3Zm.236 5h-2.35a7.027 7.027 0 0 0 3.148 2.866 10.953 10.953 0 0 1-.42-1.199 15.35 15.35 0 0 1-.378-1.667Zm2.033 0h3.362c-.133.678-.301 1.286-.496 1.806-.247.658-.517 1.121-.766 1.402-.25.282-.394.292-.419.292-.03 0-.225-.019-.543-.444-.307-.41-.616-1.064-.871-1.946-.1-.344-.19-.716-.267-1.11Zm3.626-2h-3.89a20.15 20.15 0 0 1 0-3h3.89a20.127 20.127 0 0 1 0 3Zm1.769 2c-.16.927-.381 1.775-.656 2.508-.046.121-.093.24-.143.358a7.03 7.03 0 0 0 3.149-2.866h-2.35Zm3.125-2h-2.89a22.163 22.163 0 0 0 0-3h2.89a7.026 7.026 0 0 1 0 3Zm-3.924-7.866A7.03 7.03 0 0 1 18.064 8.5h-2.35a13.925 13.925 0 0 0-.656-2.508 9.56 9.56 0 0 0-.143-.358Z"></path></svg></span>
                        <select className="bg-blue-600 text-sm">
                            <option>RUB</option>
                        </select>
                    </div>
                </div>
            </div>
            {!isScrolled && (
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-6 text-center">Тут покупают дешёвые авиабилеты</h1>
                    <nav className="mb-6 flex justify-center">
                        <ul ref={menuRef} className="flex bg-blue-700 rounded-full relative p-1">
                            <div
                                className="absolute bg-white rounded-full transition-all duration-300 ease-in-out"
                                style={{
                                    ...indicatorStyle,
                                    height: 'calc(100% - 8px)',
                                    top: '4px',
                                    bottom: '4px',
                                }}
                            />
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative z-10">
                                    <button
                                        className={`px-4 py-2 rounded-full flex flex-col items-center ${index === activeIndex ? "text-blue-600" : "text-white"}`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <span className="text-2xl mb-1">{item.icon}</span>
                                        <span className="text-xs">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex space-x-2">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Москва"
                                className="w-full px-4 h-[60px] text-black focus:outline-none rounded-lg pl-4 pr-16"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                                MOW
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Когда"
                                    className="w-full px-4 h-[60px] text-black focus:outline-none rounded-lg"
                                    value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                                    onClick={() => setShowDatePicker(!showDatePicker)}
                                    readOnly
                                />
                                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500">🗓</span>
                            </div>
                            {showDatePicker && (
                                <div className="absolute z-20 mt-2">
                                    <DatePicker onSelectDate={handleDateSelect} initialDate={new Date(2024, 8, 6)} />
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Обратно"
                                    className="w-full px-4 h-[60px] text-black focus:outline-none rounded-lg"
                                    value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                                    onClick={() => setShowDatePickerTwo(!showDatePicker)}
                                    readOnly
                                />
                                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500">🗓</span>
                            </div>
                            {showDatePickerTwo && (
                                <div className="absolute z-20 mt-2">
                                    <DatePicker onSelectDate={handleDateSelectTwo} isReturnDate initialDate={new Date(2024, 8, 6)} />
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <PassengerSelector />
                        </div>
                        <button className="px-8 h-[60px] bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors rounded-lg">
                            Найти билеты
                        </button>
                    </div>

                    <div className="mt-4 text-sm flex justify-between items-center">
                        <button className="text-white underline">Составить сложный маршрут</button>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>Открыть Ostrovok.ru в новой вкладке</span>
                        </label>
                    </div>
                </div>
            )}
        </header>
    );
};