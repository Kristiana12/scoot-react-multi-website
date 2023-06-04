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

body {
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
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
  padding:7.5rem 2rem 0;
  max-width: 1140px;
  margin: 0 auto;

  @media ${devices.desktop} {
  padding:7.5rem 0 0;
  }


}

header, footer {
  padding: 0 1.5rem;
}

main {
  padding-bottom: 5.5rem;

  @media ${devices.laptop} {
  padding-bottom: 7.5rem;
    
  }
}

::selection {
  color: ${({ theme }) => theme.colors.textContrast};
  background-color: ${({ theme }) => theme.colors.primary};
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

@keyframes showFAQ {
  0%{
    transform: translateY(-10px);
  }
    20% {
      height: auto;
      margin-top: 1.5rem;
    }

    50% {
      cursor: auto;
  visibility: visible;
  transform: translateY(-4px);
    }
    100% {
      opacity: 1;
    transform: translateY(0px);

    }
  }

`;

export default GlobalStyles;
