import { easeInOut, easeOut } from 'framer-motion';

export const NavigationAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const HeaderAnimation = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

export const SectionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};
