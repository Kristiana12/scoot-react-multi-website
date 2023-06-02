import { styled } from 'styled-components';
import devices from '../styles/devices';
import useTheme from '../../hooks/useThemeHook';
import SunSVG from '../../assets/theme/sun.svg';
import MoonSVG from '../../assets/theme/moon.svg';

const ThemeToggleButton = ({ onClick }) => {
  const { selectedTheme, toggleTheme } = useTheme();

  return (
    <ToggleBtn
      title="toggle Theme"
      onClick={() => {
        toggleTheme();
        onClick();
      }}
    >
      <img
        src={`${selectedTheme.name === 'light-theme' ? MoonSVG : SunSVG}`}
        alt="toggle theme"
        title="Toggle Theme"
      />
    </ToggleBtn>
  );
};

const ToggleBtn = styled.button`
  margin-bottom: 1.5rem;
  width: 26px;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: auto;
  }

  @media ${devices.tablet} {
    margin-bottom: 2.5rem;
  }
  @media ${devices.laptop} {
    margin-bottom: 0;
  }
`;

export default ThemeToggleButton;
