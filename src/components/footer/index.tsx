import { useState } from "react";

export const Footer = () => {
    const categories = [
        { title: "СТРАНЫ", items: ["Россия", "Таиланд", "Черногория", "Кипр", "Болгария", "Грузия", "Все страны →"] },
        { title: "ГОРОДА", items: ["Москва", "Санкт-Петербург", "Адлер", "Екатеринбург", "Лондон", "Все города →"] },
        { title: "АВИАКОМПАНИИ", items: ["Аэрофлот", "Air France", "Alitalia", "Air Baltic", "Emirates", "KLM", "Все авиакомпании →"] },
        { title: "АЭРОПОРТЫ", items: ["Шереметьево", "Курумоч", "Домодедово", "Толмачево", "Владивосток", "Гамбург", "Все аэропорты →"] },
        { title: "СЕРВИСЫ", items: ["Куда угодно", "Журнал ПСКР", "Поддержка"] },
        { title: "НАПРАВЛЕНИЯ", items: ["Москва – Сочи", "Москва – Тиват", "Москва – Минеральные Воды", "Санкт-Петербург – Москва", "Москва – Бангкок"] },
    ];

    const [openCategory, setOpenCategory] = useState<number | null>(null);

    const toggleCategory = (index: number) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    const socialIcons = [
        { name: "vk", label: "ВКонтакте" },
        { name: "telegram", label: "Telegram" },
        { name: "twitter", label: "Twitter" },
        { name: "tiktok", label: "TikTok" },
        { name: "zen", label: "Дзен" },
        { name: "viber", label: "Viber" },
        { name: "youtube", label: "YouTube" }
    ];

    const links = ["О нас", "Партнёрская программа", "Реклама", "Пресс-центр", "Вакансии", "Поддержка", "Юридические документы"];

    return (
        <footer className="bg-white py-4">
            <div className="container mx-auto px-4">
                <div className="mb-4">
                    {categories.map((category, index) => (
                        <div key={index} className="border-b">
                            <button
                                className="w-full py-3 flex justify-between items-center text-left"
                                onClick={() => toggleCategory(index)}
                            >
                                <span className="font-semibold">{category.title}</span>
                                <span className={`transform transition-transform ${openCategory === index ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {openCategory === index && (
                                <ul className="py-2">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="py-1">
                                            <a href="#" className={`text-sm ${item.includes('→') ? 'text-blue-500' : ''}`}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                        <span className="text-red-500 text-2xl mr-2">❤️</span>
                        <p className="text-sm">
                            Знаем, как экономить на отдыхе,<br />
                            ловить скидки и летать без визы.<br />
                            И вам расскажем
                        </p>
                    </div>
                    <input type="email" placeholder="На какую почту слать письма" className="w-full p-2 border rounded mb-2" />
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                    {socialIcons.map((icon) => (
                        <a key={icon.name} href="#" className="text-blue-500 flex gap-2 items-center">
                            <img src={`/assets/vector/${icon.name}.svg`} alt={icon.label} className="w-6 h-6 mb-1" />
                            <span className="text-xs lg:inline hidden">{icon.label}</span>
                        </a>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-4 text-xs text-gray-500">
                    {links.map((link, index) => (
                        <a key={index} href="#" className="hover:underline">{link}</a>
                    ))}
                </div>
                <div className="text-center text-xs text-gray-500 mb-2">
                    ©2024, Skypass — дешевые авиабилеты
                </div>
            </div>
        </footer>
    );
};