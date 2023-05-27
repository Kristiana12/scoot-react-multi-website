import { Navigation, Footer } from './components/ExportComponents';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './components/styles/Theme.styled';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Location,
  Career,
  ErrorPage,
} from './pages/ExportPagesComponents.jsx';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
