'use client'

import { Link, usePathname } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';

const navItems = [
  { key: 'settings', icon: '⚙️', href: '/my/settings' },
  { key: 'notifications', icon: '🔔', href: '/my/notifications' },
  { key: 'documents', icon: '📄', href: '/my/documents' },
];

export const ProfileSidebar = () => {
  const t = useTranslations('myAccount');
  const pathname = usePathname();

  return (
    <nav className="bg-white/10 rounded-lg p-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.key}>
            <Link 
              href={item.href}
              className={`flex items-center p-2 rounded-lg ${
                pathname === item.href ? 'bg-white text-blue_primary' : 'text-white hover:text-blue_primary hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {t(`nav.${item.key}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};