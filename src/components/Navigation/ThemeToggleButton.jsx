import { styled } from 'styled-components';
import { light, dark } from '../styles/Theme.styled';

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
  position: absolute;
  top: 14px;
  right: 22px;

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 20px;
    background: ${({ theme }) => theme.colors.heading};
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
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + label {
    background: ${({ theme }) => theme.colors.heading};
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
