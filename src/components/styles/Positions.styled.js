import { styled } from 'styled-components';
import devices from './devices';

export const StyledPositionSection = styled.section`
  max-width: 1140px;
  margin: 0 auto;
`;
export const StyledPositionList = styled.div`
  text-align: center;

  @media ${devices.tablet} {
    text-align: left;
  }
`;

export const StyledPositionCard = styled.div`
  padding: 2.25rem 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.background2};

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.25rem 4rem 2.25rem 2.5rem;
  }

  @media ${devices.laptop} {
    padding: 2.25rem 3rem;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  p {
    margin: 5px auto 1rem;
  }
`;
