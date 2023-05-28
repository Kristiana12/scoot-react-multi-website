import { Navigation, Footer } from './components/ExportComponents';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './components/styles/Theme.styled';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Navigation />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
