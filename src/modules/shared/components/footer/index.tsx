import { useTranslations } from 'next-intl';
import { CategoryList } from "./categoryList";
import { NewsletterSignup } from "./newsLetterSignup";
import { SocialIcons } from "./socialIcons";
import { Link } from '@/lib/i18n/routing';

export const Footer = () => {
    const t = useTranslations('footer');

    const categories = t.raw('categories') as { title: string; items: string[] }[];
    const socialIcons = t.raw('socialIcons') as { name: string; label: string }[];
    const links = t.raw('links') as string[];

    return (
        <footer className="bg-white py-4 md:py-8 border-t">
            <div className="container mx-auto px-4">
                <div className="hidden md:block">
                    <CategoryList categories={categories} />
                </div>
                <div className="md:hidden flex flex-col-reverse gap-6">
                    <NewsletterSignup />
                    <div>
                        <CategoryList categories={categories} isMobile={true} />
                    </div>
                </div>
                <div className="hidden lg:flex gap-6 mb-8">
                    <div className='flex-2'>
                        <NewsletterSignup />
                    </div>
                    <div className="text-sm flex flex-1 items-center gap-4 bg-gray-100 pl-6 pr-3 py-3 rounded-xl">
                        <div>
                            <p className="text-lg">{t('app.convenience')}</p>
                            <p className="text-gray-500">{t('app.description')}</p>
                        </div>
                        <img src="/assets/images/qr-code.png" alt={t('qrCode.alt')} className="w-24 h-24" />
                    </div>
                </div>
                <SocialIcons icons={socialIcons} />
                <div className="flex flex-wrap justify-center gap-2 mb-4 text-xs text-gray-500">
                    {Array.isArray(links) ? links.map((link, index) => (
                        <Link key={index} href="#" className="hover:underline">{link}</Link>
                    )) : null}
                </div>
                <div className="text-center text-xs text-gray-500">
                    {t('copyright', { year: new Date().getFullYear() })}
                </div>
            </div>
        </footer>
    );
};