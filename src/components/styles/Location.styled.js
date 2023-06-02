import { styled } from 'styled-components';

export const StyledLocationSection = styled.section`
  padding: 4.5rem 2rem 0;
`;

export const StyledLocationList = styled.ul`
  margin: 2.5rem auto 4.3rem;
  text-align: center;
`;
export const StyledLocationCity = styled.li`
  background-color: ${({ theme }) => theme.colors.backgroundOpacity};
  padding: 1.375rem;
  color: ${({ theme }) => theme.colors.heading};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
