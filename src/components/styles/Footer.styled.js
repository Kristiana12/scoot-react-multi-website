import { styled } from 'styled-components';
import devices from '../styles/devices';

export const StyledFooter = styled.footer`
  padding: 4rem 0 5.25rem;
  background-color: ${({ theme }) => theme.colors.footer};
  text-align: center;

  @media ${devices.tablet} {
    padding: 3.25rem 1.5rem;
  }
`;

export const StyledFooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 0 1.5rem;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: auto;
  }

  ul {
    @media ${devices.tablet} {
      flex-direction: row;
    }
  }
`;

export const StyledSocialList = styled.ul`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;

  @media ${devices.tablet} {
    margin-top: 0;
  }
`;
