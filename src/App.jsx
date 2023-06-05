import { ThemeProvider } from 'styled-components';
import { Navigation, Footer, Container } from './components/ExportComponents';
import GlobalStyles from './components/styles/Global';
import { useLocation, Outlet } from 'react-router-dom';
import useTheme from './hooks/useThemeHook';
import Home from './pages/Home';
import ScrollToTop from './components/styles/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/styles/animation';

function App() {
  const { selectedTheme } = useTheme();
  let location = useLocation();

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <ScrollToTop />
      <Container className="small">
        <Navigation />
      </Container>
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={PageTransition}
          initial="hidden"
          animate="visible"
        >
          {location.pathname === '/' ? <Home /> : <Outlet />}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
