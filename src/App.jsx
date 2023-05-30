import { ThemeProvider } from 'styled-components';
import { Navigation, Footer, Container } from './components/ExportComponents';
import GlobalStyles from './components/styles/Global';
import { useLocation, Outlet } from 'react-router-dom';
import useTheme from './hooks/useThemeHook';
import Home from './pages/Home';

function App() {
  const { selectedTheme } = useTheme();
  let location = useLocation();

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Container className="small">
        <Navigation />
      </Container>
      <main>{location.pathname === '/' ? <Home /> : <Outlet />}</main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
