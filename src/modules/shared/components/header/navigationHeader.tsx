import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/i18n/routing';

interface NavItemProps {
  href?: string;
  icon: React.ReactElement;
  text: string;
  isActive: boolean;
  isExternal?: boolean;
  hideOnMobile?: boolean;
  onClick?: () => void;
  variant: 'header' | 'home';
  additionalClassName?: string;
}

interface NavigationProps {
  variant: 'header' | 'home';
  layoutId?: string;
}

export const NavigationHeader: React.FC<NavigationProps> = ({ variant, layoutId }) => {
  const pathname = usePathname();
  const t = useTranslations('header.navigation');

  const menuItems = [
    {
      href: "/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.197 11.38 6.5 13.5 5 15l-.999-3.003-3-1.002 1.5-1.499 2.12.305 1.714-1.928L1.001 5a2.5 2.5 0 0 1 2.738-1.026l4.94 1.347 1.807-1.807a6.102 6.102 0 0 1 2.38-1.47.86.86 0 0 1 1.089 1.089 6.102 6.102 0 0 1-1.469 2.38L10.68 7.321l1.442 5.288a2 2 0 0 1-.82 2.19L11 15 8.127 9.664l-1.93 1.716Z" />
        </svg>
      ),
      text: t('flights'),
      isActive: (path: string) => path === '/' || path.startsWith('/search')
    },
    {
      href: "/hotels",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 2.5h-13v4H4v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1h2v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1h2.5v-4ZM2 8a2 2 0 0 0-2 2v3h1.5l1-2h11l1 2H16v-3a2 2 0 0 0-2-2H2Z" />
        </svg>
      ),
      text: t('hotels')
    },
    {
      href: "/guides",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.5 6.5a5.5 5.5 0 1 0-11 0c0 4.5 5 8.5 5 8.5h1s5-4 5-8.5ZM8 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
      ),
      text: t('guides')
    },
    {
      href: "/favorites",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.498 3.026A3.538 3.538 0 0 0 1.5 5.611c0 2.889 4.092 7.083 6.138 8.889h.723c2.046-1.806 6.14-6 6.14-8.89 0-.03 0-.06-.002-.088a3.537 3.537 0 0 0-.998-2.496 3.334 3.334 0 0 0-5.059.288L8 3.888l-.443-.574a3.334 3.334 0 0 0-5.059-.288Z" />
        </svg>
      ),
      text: t('favorites'),
      hideOnMobile: true
    },
  ];

  const activeIndex = useMemo(() => {
    const index = menuItems.findIndex(item =>
      typeof item.isActive === 'function' ? item.isActive(pathname) : item.href === pathname
    );
    return index >= 0 ? index : 0;
  }, [menuItems, pathname]);


  const businessMenuItem = {
    href: "/business",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.334 6.596A4 4 0 0 1 11.079 4h1.842a4 4 0 0 1 3.745 2.596L17.193 8H21v3a3 3 0 0 1-3 3h-4v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H6a3 3 0 0 1-3-3V8h3.807l.527-1.404ZM8.943 8h6.114l-.263-.702A2 2 0 0 0 12.92 6h-1.842a2 2 0 0 0-1.873 1.298L8.943 8Z" />
        <path d="M20 16v4H4v-4h16Z" />
      </svg>
    ),
    text: t('business'),
    isExternal: true,
    hideOnMobile: true
  };

  const trySkyMenuItem = {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.91 8.91L24 12L14.91 15.09L12 24L9.09 15.09L0 12L9.09 8.91L12 0Z" />
      </svg>
    ),
    text: "Try sky",
    hideOnMobile: true,
    additionalClassName: '!flex-row !gap-2',
    onClick: () => {
      console.log('Open Try sky modal');
    }
  };


  return (
    <motion.nav
      layoutId={layoutId}
      className={`flex justify-center ${variant === 'home' ? 'mx-auto w-full' : 'hidden lg:flex'}`}
      initial={variant === 'home' ? { y: 50, opacity: 0 } : { y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={variant === 'home' ? { y: 50, opacity: 0 } : { y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className={`flex ${variant === 'home' ? 'gap-3' : 'gap-2'}`}>
        <ul className={`hidden lg:flex bg-menu_nav_bg ${variant === 'home' ? 'rounded-xl p-1' : 'rounded-lg p-1'}`}>
          <NavItem
            {...trySkyMenuItem}
            variant={variant}
            isActive={false}
          />
        </ul>
        <ul className={`flex relative items-center lg:bg-menu_nav_bg ${variant === 'home' ? 'rounded-xl p-1 space-x-0.5' : 'rounded-lg p-1 space-x-2'}`}>
          {variant === 'home' && (
            <motion.div
              className={`absolute bg-white rounded-lg indicator-${activeIndex}`}
              layoutId="indicator"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
              style={{
                height: 'calc(100% - 8px)',
                top: 4,
              }}
            />
          )}
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              variant={variant}
              isActive={typeof item.isActive === 'function' ? item.isActive(pathname) : pathname === item.href}
            />
          ))}
        </ul>
        <ul className={`hidden lg:flex bg-menu_nav_bg ${variant === 'home' ? 'rounded-xl p-1' : 'rounded-lg p-1'}`}>
          <NavItem
            {...businessMenuItem}
            variant={variant}
            isActive={false}
            onClick={() => { }}
          />
        </ul>
      </div>
    </motion.nav>
  );
};


const NavItem: React.FC<NavItemProps> = ({ href, icon, text, isActive, isExternal, variant, onClick, hideOnMobile, additionalClassName = '' }) => {
  let ItemWrapper: any;
  let itemProps: any;

  if (href) {
    if (isExternal) {
      ItemWrapper = 'a';
      itemProps = { href, target: "_blank", rel: "nofollow noreferrer" };
    } else {
      ItemWrapper = Link;
      itemProps = { href };
    }
  } else {
    ItemWrapper = 'button';
    itemProps = { type: "button" as const };
  }

  const content = (
    <>
      <span className={`${variant === 'home' ? 'text-2xl mb-1 lg:inline hidden' : 'mr-2 lg:inline hidden'}`}>{icon}</span>
      <span className={`${variant === 'home' ? 'text-xs' : 'text-sm font-medium'}`}>{text}</span>
      {isExternal && (
        <svg className="w-3 h-3 ml-1" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.44 3.5H4V2h9.25l.75.75V12h-1.5V4.56L3.06 14 2 12.94l9.44-9.44Z" />
        </svg>
      )}
    </>
  );

  const className = `${additionalClassName} ${variant === 'home'
    ? `rounded-xl flex flex-col py-2 items-center justify-center h-full transition-colors min-w-[102px] ${isActive ? "text-black " : "text-menu_text_color bg-menu_hover lg:bg-transparent hover:bg-menu_hover_second"}`
    : `flex items-center py-2 px-2.5 rounded-lg transition-colors ${isActive ? 'bg-white text-black' : 'hover:bg-menu_hover text-white'}`
  } ${hideOnMobile ? 'hidden lg:flex' : ''} ${additionalClassName}`;  // Добавляем additionalClassName



  return (
    <motion.li className={`relative z-10 flex-shrink-0 ${variant === 'home' && 'h-full'}`} layout>
      <ItemWrapper
        href={href}
        className={className}
        onClick={onClick}
        {...itemProps}
      >
        {content}
      </ItemWrapper>
    </motion.li>
  );
};