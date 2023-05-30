import { styled } from 'styled-components';
import devices from '../styles/devices';
import useTheme from '../../hooks/useThemeHook';
import SunSVG from '../../assets/theme/sun.svg';
import MoonSVG from '../../assets/theme/moon.svg';

const ThemeToggleButton = () => {
  const { selectedTheme, toggleTheme } = useTheme();

  return (
    <ToggleBtn title="toggle Theme" onClick={toggleTheme}>
      <img
        src={`${selectedTheme.name === 'light-theme' ? SunSVG : MoonSVG}`}
        alt="toggle theme"
        title="Toggle Theme"
      />
    </ToggleBtn>
  );
};

const ToggleBtn = styled.button`
  margin-bottom: 1.5rem;

  @media ${devices.tablet} {
    margin-bottom: 2.5rem;
  }
  @media ${devices.laptop} {
    margin-bottom: 0;
  }
`;

export default ThemeToggleButton;
