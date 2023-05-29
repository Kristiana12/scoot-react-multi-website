import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import { light, dark } from '../components/styles/Theme.styled';

const useTheme = () => {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setSelectedTheme((prevTheme) => (prevTheme === light ? dark : light));
  };

  return { selectedTheme, toggleTheme };
};

export default useTheme;
