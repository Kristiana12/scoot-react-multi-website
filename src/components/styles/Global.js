import { createGlobalStyle } from 'styled-components';
import devices from './devices';

const GlobalStyles = createGlobalStyle`
    *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6, a {
  font-family: 'Space Mono', monospace;
}

p, button {
  font-family: 'Lexend Deca', sans-serif;
} 

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

//Utility classes
.btn-primary {
  padding: 0.875rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textContrast};
  font-weight: bold;
  border: 2px solid transparent;
  transition: color 0.3s, background-color 0.3s, border 0.3s;

  @media ${devices.tablet} {
      padding: 0.875rem 2.5rem;
    }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.textContrast};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
}


`;

export default GlobalStyles;
