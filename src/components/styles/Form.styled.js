import { styled } from 'styled-components';
import devices from './devices';

export const StyledContactSection = styled.section`
  padding: 7.5rem 0 4rem;
  text-align: center;
  max-width: 100%;

  h2 {
    padding-left: 0.5rem;
  }

  .paragraph {
    padding-left: 0.5rem;
    margin: 1.5rem auto 2.5rem;
    max-width: 440px;

    @media ${devices.tablet} {
      margin: 1.5rem auto 5rem;
    }
  }
`;

export const StyledForm = styled.form`
  padding: 3rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
  max-width: 1140px;
  margin: 0 auto;

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 1.5rem;

    > div:nth-child(3) {
      grid-column: 1 / -1;
    }

    button {
      grid-column: 1 / -1;
      justify-self: end;
    }
  }

  @media ${devices.desktop} {
    padding: 3rem 0 2rem;
  }
`;

export const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledContactLocations = styled(StyledContactSection)`
  padding: 0 0.5rem;
  max-width: 1140px;
  margin: 0 auto;

  @media ${devices.desktop} {
    padding: 0;
  }
`;

export const StyledLocationsList = styled.div`
  margin-top: 3rem;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  div:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 0.85rem;
  }
`;
