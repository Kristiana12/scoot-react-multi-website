import { createGlobalStyle } from 'styled-components';

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
  line-height: 1.2;
}

p, button {
  font-family: 'Lexend Deca', sans-serif;
  font-size: 1rem;
  line-height: 1.9;
} 

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

section {
  padding-top: 7.5rem;
}

::selection {
  color: ${({ theme }) => theme.colors.textContrast};
  background-color: ${({ theme }) => theme.colors.primary};
}
//Utility classes

`;

export default GlobalStyles;
