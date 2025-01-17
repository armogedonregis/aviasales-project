'use client';
import { useTranslations } from 'next-intl';

export const NewsletterSignup = () => {
    const t = useTranslations('footer');

    return (
        <div className="bg-blue_primary px-3 py-3 rounded-lg grid items-center grid-cols-1 lg:grid-cols-2 gap-10 lg:px-4 lg:py-6">
            <div className="flex items-start mb-2">
                <span className="text-red-500 text-2xl mr-2">❤️</span>
                <p className="text-sm text-white font-medium" dangerouslySetInnerHTML={{ __html: t('newsletter.description') }} />
            </div>
            <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="w-full p-2 border rounded-3xl h-10 bg-white placeholder:text-blue_primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-menu_input_focus focus:border-transparent"
            />
        </div>
    );
};