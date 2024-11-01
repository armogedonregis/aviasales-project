import { BaseHeader } from "./baseHeader";
import { NavigationHeader } from "./navigationHeader";
import { AnimatePresence, motion } from "framer-motion";

interface CommonHeaderProps {
  isTransitioning?: boolean;
  showNavigation?: boolean;
  title?: string;
  variant?: 'home' | 'header';
  children: React.ReactNode;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({ title, children, showNavigation = false, variant = 'home' }) => {
  return (
    <BaseHeader showNavigation={showNavigation}>
      <AnimatePresence mode="wait">
        <motion.div
          key="common-content"
          className={`container mx-auto px-4 lg:pt-20 pt-8 pb-8`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {title && (
            <motion.h1
              className="text-4xl md:text-[56px] font-450 mb-6 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {title}
            </motion.h1>
          )
          }
          {!showNavigation && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <NavigationHeader
                variant={variant}
                layoutId="navigation"
              />
            </motion.div>
          )
          }
          {children}
        </motion.div>
      </AnimatePresence>
    </BaseHeader>
  );
};