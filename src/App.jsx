import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Navigation, Footer } from './components/ExportComponents';
import GlobalStyles from './components/styles/Global';
import { light } from './components/styles/Theme.styled';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navigation setSelectedTheme={setSelectedTheme} />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
