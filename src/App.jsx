import { Navigation, Footer } from './components/ExportComponents';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './components/styles/Theme.styled';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Navigation />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
