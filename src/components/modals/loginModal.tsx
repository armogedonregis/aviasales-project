import { Dialog, Transition, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FcGoogle } from 'react-icons/fc';
import VK from '/public/assets/vector/vk.svg';
import { SiMaildotru, SiApple, SiOdnoklassniki } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';

/**
 * Интерфейс пропсов для компонента LoginModal
 * @interface LoginModalProps
 * @property {boolean} isOpen - Флаг, указывающий, открыто ли модальное окно
 * @property {() => void} onClose - Функция для закрытия модального окна
 */
interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Компонент LoginModal
 * 
 * Отображает модальное окно для входа в систему с различными вариантами авторизации
 * 
 * @component
 * @param {LoginModalProps} props - Пропсы компонента
 * @returns {React.ReactElement} Возвращает React элемент
 */
const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    /**
     * Состояние для отображения дополнительных вариантов входа
     * @type {boolean}
     */
    const [showAllOptions, setShowAllOptions] = useState(false);

    
    /**
     * Закрываем расширенное меню при открытии модалки
     */
    useEffect(() => {
        if (isOpen) {
            setShowAllOptions(false)
        }
    }, [isOpen])

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex justify-between items-center mb-4">
                                    <DialogTitle as="h3" className="text-xl font-medium leading-6 text-gray-900">
                                        Войдите в профиль
                                    </DialogTitle>
                                    <button
                                        type="button"
                                        className="text-gray-400 hover:text-gray-500"
                                        onClick={onClose}
                                    >
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mb-6">
                                    Чтобы обращаться в поддержку и следить за ценами на нужные билеты
                                </p>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100">
                                        <FcGoogle className="h-5 w-5 mr-2" />
                                        Войти через Google
                                    </button>
                                    <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                                        <VK className="h-5 w-5 mr-2 text-white" />
                                        Войти с VK ID
                                    </button>
                                    {showAllOptions && (
                                        <>
                                            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600">
                                                <SiMaildotru className="h-5 w-5 mr-2" />
                                                Mail.ru
                                            </button>
                                            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900">
                                                <SiApple className="h-5 w-5 mr-2" />
                                                Apple
                                            </button>
                                            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600">
                                                <SiOdnoklassniki className="h-5 w-5 mr-2" />
                                                Одноклассники
                                            </button>
                                            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900">
                                                <FaFacebookF className="h-5 w-5 mr-2" />
                                                F*****k
                                            </button>
                                        </>
                                    )}
                                    {!showAllOptions && (
                                        <button
                                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100"
                                            onClick={() => setShowAllOptions(true)}
                                        >
                                            <span className="mr-2">↓</span>
                                            Ещё 5 способов
                                        </button>
                                    )}
                                </div>
                                <div className="mt-6 flex items-center">
                                    <input
                                        id="subscribe"
                                        name="subscribe"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-500">
                                        Подписаться на рассылку Авиасейлс
                                    </label>
                                </div>
                                <p className="mt-2 text-xs text-gray-400">
                                    Авторизуясь, вы соглашаетесь с <a href="#" className="text-blue-600 hover:underline">Лицензионным соглашением</a> и <a href="#" className="text-blue-600 hover:underline">Политикой конфиденциальности</a>
                                </p>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default LoginModal;