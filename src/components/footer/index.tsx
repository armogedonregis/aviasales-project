import { useState } from "react";

export const Footer = () => {
    const categories = [
        { title: "PAYS", items: ["Russie", "Thaïlande", "Monténégro", "Chypre", "Bulgarie", "Géorgie", "Tous les pays →"] },
        { title: "VILLES", items: ["Moscou", "Saint-Pétersbourg", "Adler", "Ekaterinbourg", "Londres", "Toutes les villes →"] },
        { title: "COMPAGNIES AÉRIENNES", items: ["Aeroflot", "Air France", "Alitalia", "Air Baltic", "Emirates", "KLM", "Toutes les compagnies →"] },
        { title: "AÉROPORTS", items: ["Sheremetyevo", "Kurumoch", "Domodedovo", "Tolmachevo", "Vladivostok", "Hambourg", "Tous les aéroports →"] },
        { title: "SERVICES", items: ["N'importe où", "Magazine PSKR", "Support"] },
        { title: "DESTINATIONS", items: ["Moscou – Sotchi", "Moscou – Tivat", "Moscou – Eaux Minérales", "Saint-Pétersbourg – Moscou", "Moscou – Bangkok"] },
    ];

    const [openCategory, setOpenCategory] = useState<number | null>(null);

    const toggleCategory = (index: number) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    const socialIcons = [
        { name: "vk", label: "VKontakte" },
        { name: "telegram", label: "Telegram" },
        { name: "twitter", label: "Twitter" },
        { name: "tiktok", label: "TikTok" },
        { name: "zen", label: "Zen" },
        { name: "viber", label: "Viber" },
        { name: "youtube", label: "YouTube" }
    ];

    const links = ["À propos", "Programme partenaire", "Publicité", "Centre de presse", "Carrières", "Support", "Documents juridiques"];

    return (
<footer className="bg-white py-4 md:py-8 border-t">
            <div className="container mx-auto px-4">
                <div className="hidden md:grid grid-cols-6 gap-8 mb-8">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-4">{category.title}</h3>
                            <ul>
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="mb-2">
                                        <a href="#" className={`text-sm ${item.includes('→') ? 'text-blue-500' : 'text-gray-600'}`}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="md:hidden">
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <div className="flex items-start mb-2">
                            <span className="text-red-500 text-2xl mr-2">❤️</span>
                            <p className="text-sm">
                                Nous savons comment économiser sur les vacances,<br />
                                attraper des réductions et voler sans visa.<br />
                                Et nous vous le dirons
                            </p>
                        </div>
                        <input
                            type="email"
                            placeholder="À quelle adresse envoyer les e-mails"
                            className="w-full p-2 border rounded bg-white"
                        />
                    </div>
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
                <div className="bg-white p-4 rounded-lg hidden lg:flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <span className="text-red-500 text-2xl mr-2">❤️</span>
                        <p className="text-sm">
                            Nous savons comment économiser sur les vacances,<br />
                            attraper des réductions et voler sans visa.<br />
                            Et nous vous le dirons
                        </p>
                    </div>
                    <div className="flex-1 mx-8">
                        <input type="email" placeholder="À quelle adresse envoyer les e-mails" className="w-full p-2 border rounded" />
                    </div>
                    <div className="text-sm">
                        <p>C&lsquo;est plus pratique dans l&lsquo;application</p>
                        <p className="text-gray-500">La recherche y est super rapide et il est plus facile de suivre les prix des billets</p>
                    </div>
                    <img src="/qr-code.png" alt="Code QR" className="w-24 h-24" />
                </div>
                <div className="flex justify-center space-x-6 mb-4 mt-4">
                    {socialIcons.map((icon) => (
                        <a key={icon.name} href="#" className="text-blue-500">
                            <img src={`/assets/vector/${icon.name}.svg`} alt={icon.label} className="w-6 h-6" />
                        </a>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-4 text-xs text-gray-500">
                    {links.map((link, index) => (
                        <a key={index} href="#" className="hover:underline">{link}</a>
                    ))}
                </div>
                <div className="text-center text-xs text-gray-500">
                    ©2024, Skypass — billets d&lsquo;avion pas chers
                </div>
            </div>
        </footer>
    );
};