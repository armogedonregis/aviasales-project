export const Footer = () => {
    const categories = [
        { title: "СТРАНЫ", items: ["Россия", "Таиланд", "Черногория", "Кипр", "Болгария", "Грузия", "Все страны →"] },
        { title: "ГОРОДА", items: ["Москва", "Санкт-Петербург", "Адлер", "Екатеринбург", "Лондон", "Все города →"] },
        { title: "АВИАКОМПАНИИ", items: ["Аэрофлот", "Air France", "Alitalia", "Air Baltic", "Emirates", "KLM", "Все авиакомпании →"] },
        { title: "АЭРОПОРТЫ", items: ["Шереметьево", "Курумоч", "Домодедово", "Толмачево", "Владивосток", "Гамбург", "Все аэропорты →"] },
        { title: "СЕРВИСЫ", items: ["Куда угодно", "Журнал ПСКР", "Поддержка"] },
        { title: "НАПРАВЛЕНИЯ", items: ["Москва – Сочи", "Москва – Тиват", "Москва – Минеральные Воды", "Санкт-Петербург – Москва", "Москва – Бангкок"] },
    ];

    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-6 gap-4 mb-8">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold mb-2">{category.title}</h3>
                            <ul className="text-sm">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="mb-1">
                                        <a href="#" className={`hover:text-blue-500 ${item.includes('→') ? 'text-blue-500' : ''}`}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="bg-white p-4 rounded-lg flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <span className="text-red-500 text-2xl mr-2">❤️</span>
                        <p className="text-sm">
                            Знаем, как экономить на отдыхе,<br />
                            ловить скидки и летать без визы.<br />
                            И вам расскажем
                        </p>
                    </div>
                    <div className="flex-1 mx-8">
                        <input type="email" placeholder="На какую почту слать письма" className="w-full p-2 border rounded" />
                    </div>
                    <div className="text-sm">
                        <p>В приложении удобнее</p>
                        <p className="text-gray-500">Там суперыбстрый поиск и легче следить за ценами на билеты</p>
                    </div>
                    <img src="/qr-code.png" alt="QR Code" className="w-24 h-24" />
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    {["ВКонтакте", "Telegram", "Twitter", "TikTok", "Дзен", "Viber", "YouTube"].map((social, index) => (
                        <a key={index} href="#" className="text-blue-500 hover:underline">{social}</a>
                    ))}
                </div>
                <div className="text-center text-sm text-gray-500">
                    <a href="#" className="hover:underline">О нас</a> • 
                    <a href="#" className="hover:underline"> Партнёрская программа</a> • 
                    <a href="#" className="hover:underline"> Реклама</a> • 
                    <a href="#" className="hover:underline"> Пресс-центр</a> • 
                    <a href="#" className="hover:underline"> Вакансии</a> • 
                    <a href="#" className="hover:underline"> Поддержка</a> • 
                    <a href="#" className="hover:underline"> Юридические документы</a>
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">
                    © 2007–2024, Авиасейлс — дешевые авиабилеты
                </div>
            </div>
        </footer>
    );
};