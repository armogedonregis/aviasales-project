import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon, HeartIcon } from '@heroicons/react/20/solid';
import { Squares2X2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LoginModal from '@/components/modals/loginModal';
import { ProfileIcon, SupportIcon, FrenchFlag, DutchFlag, EnglishFlag } from '@/components/icons';
import SettingsIcon from "/public/assets/vector/settingsIcon.svg";
import NotificationsIcon from "/public/assets/vector/notificationsIcon.svg";
import DocumentsIcon from "/public/assets/vector/documentsIcon.svg";
import { Link, useRouter } from '@/lib/i18n/routing';

interface Language {
    code: 'fr' | 'nl' | 'en';
    name: string;
    flag: React.ReactNode;
}

const languages: Language[] = [
    { code: 'fr', name: 'Français', flag: <FrenchFlag /> },
    { code: 'nl', name: 'Nederlands', flag: <DutchFlag /> },
    { code: 'en', name: 'English', flag: <EnglishFlag /> }, 
];

const DEFAULT_LANG = 'fr';

export const HeaderUserMenu: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [currentLang, setCurrentLang] = useState(DEFAULT_LANG);
    const t = useTranslations('header');
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const buttonCloseRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        const lang = pathname.split('/')[1];
        const newLang = languages.some(l => l.code === lang) ? lang : DEFAULT_LANG;
        setCurrentLang(newLang);
        setSelectedLanguage(languages.find(l => l.code === newLang) || languages[0]);
    }, [pathname]);

    const handleLanguageChange = useCallback((newLang: Language) => {
        if (newLang.code === currentLang) return;
    
        setSelectedLanguage(newLang);
        setCurrentLang(newLang.code);

        const pathWithoutLocale = '/' + pathname.split('/').slice(2).join('/');
    
        // Используем router для смены языка
        router.push(pathWithoutLocale, { locale: newLang.code });
    }, [currentLang, router, pathname]);

    const handleLoginClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoginModalOpen(true);
    }, []);

    const handleCloseLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
        if (buttonCloseRef.current) {
            buttonCloseRef.current();
        }
    }, []);

    return (
        <div className="flex items-center text-sm space-x-1">
            <Menu as="div" className="relative inline-block text-left z-50">
                {({ close }) => (
                    <>
                        <MenuButton className="flex items-center hover:bg-menu_hover rounded-lg p-1.5 lg:px-3 lg:py-2">
                            <span className="lg:mr-1"><ProfileIcon /></span>
                            <span className="lg:inline hidden">{t('userMenu.profile')}</span>
                        </MenuButton>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems modal={false} className="fixed lg:block flex flex-col top-0 lg:absolute right-0 lg:top-auto lg:mt-2 w-full h-full lg:h-auto lg:w-72 lg:origin-top-right lg:rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="flex justify-between items-center py-2 mb-5 px-3 lg:p-4 border-b lg:hidden">
                                    <h2 className="text-base text-center w-full text-black font-semibold">{t('userMenu.profile')}</h2>
                                    <button onClick={() => close()} className="text-gray-700 rounded-full w-7 h-7 flex items-center justify-center bg-gray-100 hover:text-gray-700">
                                        <XMarkIcon className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="px-6 lg:p-4 space-y-1">
                                    <MenuItem>
                                        {({ focus }) => (
                                            <Link href="/my/settings" className={`${focus ? 'bg-menu_item_hover' : ''} flex w-full items-center rounded-md px-3 py-2 text-sm font-bold text-gray-700`}>
                                                <span className="mr-3 rounded-lg w-8 h-8 inline-flex items-center justify-center bg-menu_icon_wrapper text-menu_icon_color"><SettingsIcon /></span>
                                                {t('userMenu.settings')}
                                            </Link>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ focus }) => (
                                            <Link href="/my/notifications" className={`${focus ? 'bg-menu_item_hover' : ''} flex w-full items-center rounded-md px-3 py-2 text-sm font-bold text-gray-700`}>
                                                <span className="mr-3 rounded-lg w-8 h-8 inline-flex items-center justify-center bg-menu_icon_wrapper text-menu_icon_color"><NotificationsIcon /></span>
                                                {t('userMenu.notifications')}
                                            </Link>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ focus }) => (
                                            <Link href="/my/documents" className={`${focus ? 'bg-menu_item_hover' : ''} flex w-full items-center rounded-md px-3 py-2 text-sm font-bold text-gray-700`}>
                                                <span className="mr-3 rounded-lg w-8 h-8 inline-flex items-center justify-center bg-menu_icon_wrapper text-menu_icon_color"><DocumentsIcon /></span>
                                                {t('userMenu.documents')}
                                            </Link>
                                        )}
                                    </MenuItem>
                                </div>
                                <div className="p-6 lg:p-4 lg:pt-0 mt-auto">
                                    <MenuItem>
                                        <button onClick={(e) => {
                                            handleLoginClick(e);
                                            buttonCloseRef.current = close;
                                        }} className="flex w-full items-center justify-center rounded-xl lg:rounded-md px-3 py-3 lg:py-2 text-base lg:text-sm text-white font-bold bg-head_bg hover:bg-head_bg/90">
                                            {t('userMenu.login')}
                                        </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Transition>
                    </>
                )}
            </Menu>

            <Link href="/favorites" className="flex lg:hidden items-center hover:bg-menu_hover rounded-lg p-1.5 lg:px-3 lg:py-2">
                <HeartIcon className="h-6 w-6" />
            </Link>

            <Link href="/support" className="flex items-center hover:bg-menu_hover rounded-lg p-1.5 lg:px-3 lg:py-2">
                <span className="mr-1"><SupportIcon /></span>
                <span className="lg:inline hidden">{t('userMenu.support')}</span>
            </Link>

            <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
                <div className="relative z-40">
                    <ListboxButton className="text-white hover:bg-menu_hover rounded-lg flex items-center space-x-2 p-1.5 lg:px-3 lg:py-2">
                        <span>{selectedLanguage.flag}</span>
                        <span className="w-20 text-left lg:inline hidden">{selectedLanguage.name}</span>
                        <ChevronDownIcon className="w-5 h-5 lg:inline hidden" />
                    </ListboxButton>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ListboxOptions modal={false} className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {languages.map((language) => (
                                <ListboxOption
                                    key={language.code}
                                    value={language}
                                    className="relative cursor-default px-1.5 select-none py-2 lg:pl-10 lg:pr-4 text-gray-900 ui-active:bg-blue-100 ui-active:text-blue-900 ui-not-active:bg-white ui-not-active:text-gray-900 hover:bg-blue-50 transition-colors duration-150 ease-in-out"
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`hidden lg:block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {language.name}
                                            </span>
                                            <span className="lg:absolute inset-y-0 left-0 flex items-center lg:pl-3">
                                                {language.flag}
                                            </span>
                                        </>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Transition>
                </div>
            </Listbox>

            <button className="flex lg:hidden items-center hover:bg-menu_hover rounded-lg p-1.5">
                <Squares2X2Icon className="h-6 w-6" />
            </button>

            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
        </div>
    );
};