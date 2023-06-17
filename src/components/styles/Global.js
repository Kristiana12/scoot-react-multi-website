import { createGlobalStyle, css } from 'styled-components';
import devices from './devices';

const GlobalStyles = createGlobalStyle`
    *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, #root {
  overflow-x: hidden;
}

body {
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

h1,h2,h3,h4,h5,h6, a {
  font-family: 'Space Mono', monospace;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.heading}
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
  padding: 7.5rem 0.5rem 0;
  max-width: 1140px;
  margin: 0 auto;

  @media ${devices.tablet} {
    padding:7.5rem 2rem 0;

  }

  @media ${devices.desktop} {
  padding:7.5rem 0 0;
  }
}

header {
  padding: 0 1.5rem;
}

main {
  padding-bottom: 5.5rem;
  min-height: calc(100vh - 96px);

  &.error-page {
    display: flex;
    align-items: center;
    justify-content: center;
  }

}



::selection {
  color: ${({ theme }) => theme.colors.textContrast};
  background-color: ${({ theme }) => theme.colors.primary};
}

body::-webkit-scrollbar {
  width: 3px;
}
 
body::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors.footer};
}
 
body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.primary};
  height: 30px;
}

label {
    color: ${({ theme }) => theme.colors.heading};
    font-weight: 600;
    font-size: 1rem;
  }

textarea {
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
}

input {
    font-family: inherit;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.6rem 0.2rem;
    font-size: 1rem;
  }

input:focus {
    outline: none;
}


//Utility classes
.section-title {
  text-align: center;
    font-size: 1.875rem;
    color: ${({ theme }) => theme.colors.heading};
    @media ${devices.tablet} {
      font-size: 3rem;
    }
}

.title-s {
  font-size: 1.125rem;

  @media ${devices.tablet} {
      font-size: 1.5rem;

    }
}

.title-m {
  font-size: 1.5rem;

  @media ${devices.tablet} {
      font-size: 2.5rem;

    }
}

.btn-secondary {
  padding: 0.5rem 3rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textContrast};
  border: 2px solid transparent;
  transition: color 0.3s, background-color 0.3s, border 0.3s;

    &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.textContrast};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
}

.background-color {
  background-color: ${({ theme }) => theme.colors.backgroundOpacity};
}

.error-message {
  color: crimson;
  font-size: 13px;
}

.success-message {
  color: ${({ theme }) => theme.colors.heading};
  padding: 5rem 1.5rem;
  max-width: 750px;
  margin: 0 auto;
}
`;

export default GlobalStyles;
