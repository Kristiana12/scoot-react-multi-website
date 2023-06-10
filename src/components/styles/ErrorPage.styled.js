import { styled } from 'styled-components';
import devices from './devices';

export const StyledMain = styled.div`
  padding: 2rem 0 0;
  flex: 1;

  .container {
    @media ${devices.laptop} {
      display: flex;
      align-items: center;
    }
  }
`;

export const StyledHeader = styled.header`
  max-width: 500px;
  margin: 0 auto;

  @media ${devices.laptop} {
    max-width: 580px;

    flex: 2;
  }
`;

export const StyledContent = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  @media ${devices.laptop} {
    text-align: left;
  }

  p {
    margin: 1.5rem 0 2rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
`;
