import { styled } from 'styled-components';
import devices from './devices';

export const StyledLocationSection = styled.section`
  padding: 4.5rem 1rem 0;

  @media ${devices.tablet} {
    .location-map {
      position: relative;
    }
  }
`;

export const StyledLocationList = styled.ul`
  margin: 2.5rem auto 4.3rem;
  text-align: center;
`;

export const StyledLocationCity = styled.li`
  background-color: ${({ theme }) => theme.colors.backgroundOpacity};
  padding: 1.375rem;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.5rem;
  font-weight: 600;

  @media ${devices.tablet} {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 0.8125rem;
    padding: 10px 30px;

    &::after {
      position: absolute;
      content: '';
      border: 12px solid ${({ theme }) => theme.colors.primary};
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
    }

    //Place the countries
    //New York
    &:first-child {
      top: 17%;
      left: 13%;

      @media ${devices.tabletL} {
        top: 18%;
        left: 14%;
      }

      @media ${devices.laptop} {
        top: 21.5%;
        left: 16%;
      }
    }

    //London
    &:nth-child(2) {
      top: 5%;
      left: 37%;

      @media ${devices.tabletL} {
        top: 7%;
        left: 39%;
      }

      @media ${devices.laptop} {
        top: 9%;
        left: 39.5%;
      }
    }

    //Jakarta
    &:nth-child(3) {
      bottom: 42%;
      right: 13%;

      @media ${devices.tabletL} {
        bottom: 42%;
        right: 16%;
      }

      @media ${devices.laptop} {
        bottom: 40.5%;
        right: 16%;
      }
    }
  }

  //Yokohoma
  &:nth-child(4) {
    top: 18%;
    right: 6%;

    @media ${devices.tabletL} {
      top: 21%;
      right: 9%;
    }
    @media ${devices.laptop} {
      top: 22%;
      right: 9%;
    }
  }

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media ${devices.tablet} {
      margin-bottom: 0;
    }
  }
`;
