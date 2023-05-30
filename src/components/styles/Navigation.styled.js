import styled from 'styled-components';
import devices from './devices';

export const StyledHeader = styled.header`
  padding: 1.375rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${devices.laptop} {
    gap: 1.5rem;
  }

  button#menu-button {
    position: absolute;
    top: 30px;
    left: 22px;

    @media ${devices.laptop} {
      position: static;
    }
  }
`;

export const StyledNavigation = styled.nav`
  position: fixed;
  z-index: 100;
  left: -100%;
  top: 79px;
  width: 80%;
  min-height: calc(100vh - 79px);
  padding: 4rem 2rem 1.5rem;
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
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-weight: bold;
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
