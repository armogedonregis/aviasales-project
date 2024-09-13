'use client';
import { useTranslations } from 'next-intl';

export const NewsletterSignup = () => {
    const t = useTranslations('footer');

    return (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-start mb-2">
                <span className="text-red-500 text-2xl mr-2">❤️</span>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: t('newsletter.description') }} />
            </div>
            <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="w-full p-2 border rounded bg-white"
            />
        </div>
    );
};