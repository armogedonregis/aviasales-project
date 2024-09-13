import { NavigationHeader } from './navigationHeader';
import { HeaderUserMenu } from './headerUserMenu';
import { HeaderLogo } from './headerLogo';
import { AnimatePresence, motion } from 'framer-motion';

interface BaseHeaderProps {
  children?: React.ReactNode;
  showNavigation?: boolean;
  isTransitioning?: boolean;
}

export const BaseHeader = ({ children, showNavigation = true, isTransitioning }: BaseHeaderProps) => {
  return (
    <motion.header
      className="bg-head_bg text-white"
      initial={{ height: showNavigation ? 'auto' : 'auto' }}
      animate={{
        height: showNavigation ? 'auto' : '100%',
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <HeaderLogo />

        <AnimatePresence mode="wait">
          {showNavigation && (
            <motion.div
              key="navigation"
              initial={isTransitioning ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <NavigationHeader
                variant="header"
                layoutId="navigation"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <HeaderUserMenu />
      </div>
      {children}
    </motion.header>
  )
};