import styled from 'styled-components';
import devices from './devices';
import { motion } from 'framer-motion';

export const StyledHeader = styled(motion.header)`
  padding: 1.375rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;

  @media ${devices.laptop} {
    gap: 1.5rem;
  }

  @media ${devices.desktop} {
    padding: 1.375rem 0;
  }

  button#menu-button {
    position: fixed;
    top: 0;
    left: 0;
    padding: 23.1px 36px;
    background-color: ${({ theme }) => theme.colors.body};
    z-index: 150;

    @media ${devices.laptop} {
      position: static;
    }
  }
`;

export const StyledNavigation = styled.nav`
  position: fixed;
  z-index: 100;
  left: -100%;
  top: 77px;
  top: 0;
  width: 80%;
  min-height: 100vh;
  padding: 6.5rem 2rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.navigationBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media ${devices.tablet} {
    width: 100%;
    align-items: center;
  }

  @media ${devices.laptop} {
    position: static;
    min-height: auto;
    flex-direction: row;
    padding: 0;
    background-color: inherit;
  }

  &.show {
    left: 0;
  }

  ul {
    gap: 1.5rem;
    font-size: 1.125rem;
    margin-bottom: auto;

    @media ${devices.tablet} {
      gap: 2.5rem;
      text-align: center;
    }

    @media ${devices.laptop} {
      font-size: 1rem;
      align-items: center;
      flex-direction: row;
      margin: auto auto auto 3.5rem;
    }
  }
`;

export const StyledMenuButton = styled.button`
  @media ${devices.laptop} {
    display: none;
  }
`;
