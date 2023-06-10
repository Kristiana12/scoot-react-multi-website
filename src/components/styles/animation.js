import { easeOut } from 'framer-motion';

export const PageTransition = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const NavigationAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
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
      delay: 0.4,
    },
  },
};

export const FaqToggle = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.6 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};
