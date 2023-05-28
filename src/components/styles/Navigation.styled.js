import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1.375rem 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    position: absolute;
    top: 30px;
    left: 22px;
  }
`;

export const StyledNavigation = styled.nav`
  position: fixed;
  left: -100%;
  top: 76px;
  width: 80%;
  min-height: calc(100vh - 76px);
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.heading};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.show {
    left: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-weight: bold;
    font-size: 1.125rem;
  }
`;
