import { createContext, useState } from 'react';
import { light } from '../components/styles/Theme.styled';

const ThemeContext = createContext(light);

const AppThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(light);
  const theme = {
    selectedTheme,
    setSelectedTheme,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext };
export default AppThemeProvider;
