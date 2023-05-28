import { styled } from 'styled-components';
import { light, dark } from '../styles/Theme.styled';
import devices from '../styles/devices';

const ThemeToggleButton = ({ setSelectedTheme }) => {
  const toggleThemeHandler = () => {
    setSelectedTheme((prevTheme) =>
      prevTheme.name === 'light-theme' ? dark : light
    );
  };

  return (
    <ToggleBtn title="toggle Theme" onClick={toggleThemeHandler}>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch" onClick={toggleThemeHandler}></label>
    </ToggleBtn>
  );
};

const ToggleBtn = styled.div`
  margin-bottom: 1.5rem;
  @media ${devices.tablet} {
    margin-bottom: 0;
  }

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primary};
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.textContrast};
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + label {
    background: ${({ theme }) => theme.colors.primary};
  }

  input:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 16px;
  }
`;

export default ThemeToggleButton;
