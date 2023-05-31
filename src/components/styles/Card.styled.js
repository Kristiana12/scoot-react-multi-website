import { styled } from 'styled-components';
import devices from '../styles/devices';

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.heading};

  &.section-title-s {
    font-size: 1.25rem;
    @media ${devices.tablet} {
      font-size: 1.5rem;
    }
  }

  &.section-title-l {
    font-size: 1.85rem;
    @media ${devices.tablet} {
      font-size: 3rem;
    }
  }
`;

export const StyledSection = styled.section`
  //ALL
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .card {
    width: min(90%, 310px);
    margin: 0 auto;
    text-align: center;
  }

  .content,
  .card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  //Services
  &.section-services {
    @media ${devices.desktop} {
      flex-direction: row;
      gap: 1.875rem;
      width: min(90%, 1110px);
      margin: 0 auto;
    }

    & .service-card {
      @media ${devices.tablet} {
        text-align: left;
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: repeat(2, min-content);
        gap: 1.5rem 5rem;
        width: min(90%, 600px);
        position: relative;

        @media ${devices.desktop} {
          display: flex;
          justify-content: center;
          width: min(90%, 380px);
        }

        &::before {
          content: '';
          z-index: -1;
          position: absolute;
          top: -85%;
          left: 39px;
          width: 18px;
          height: 100%;
          background-color: ${({ theme }) => theme.colors.background};

          @media ${devices.desktop} {
            left: -10px;
            transform: rotate(270deg);
            transform-origin: bottom right;
          }
        }

        .image {
          grid-row: 1 / -1;
        }
      }
    }
  }

  //Features
  &.section-features {
    gap: 8rem;

    .features-card {
      width: min(90%, 570px);
      align-items: center;
      gap: 2rem;
      position: relative;

      @media ${devices.tabletL} {
        flex-direction: row;
        justify-content: space-between;
        width: min(90%, 1100px);
      }

      &:nth-child(odd) {
        @media ${devices.tabletL} {
          flex-direction: row-reverse;
        }
      }

      .content {
        align-items: center;

        @media ${devices.tabletL} {
          flex-basis: 445px;
          text-align: left;
          align-items: start;
        }
      }

      .image {
        width: 310px;
        height: 310px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1.5rem;

        @media ${devices.tablet} {
          width: 445px;
          height: 445px;
        }
      }

      //About Page
      &.about {
        .card-icon {
          top: 130px;
          transform: rotateX(180deg);
        }
      }
      //About Page
      &.about:nth-child(2) {
        .card-icon {
          left: -650px;
        }
      }

      //Arrow Icon 1
      .card-icon {
        position: absolute;
        top: 250px;
        left: 0;
        transform: translateY(-50%);

        @media ${devices.tablet} {
          top: 380px;
          left: -30px;
        }

        @media ${devices.tabletL} {
          top: 380px;
          left: 47%;
        }
      }

      //Background Circle
      .card-icon2 {
        display: none;

        @media ${devices.tablet} {
          display: block;
          position: absolute;
          top: 0;
          right: -75%;
          z-index: -1;
        }

        @media ${devices.tabletL} {
          right: -500px;
        }
      }
    }

    //Arrow Icon 2
    .features-card:nth-child(2) {
      .card-icon {
        transform: rotateY(180deg);
        right: 80px;
        top: 0;

        @media ${devices.tablet} {
          right: 54%;
        }

        @media ${devices.tabletL} {
          left: -77%;
        }
      }

      //Background Circle
      .card-icon2 {
        @media ${devices.tablet} {
          right: 100%;
        }

        @media ${devices.tabletL} {
          right: 1140px;
        }
      }
    }

    //Arrow Icon 3
    .features-card:nth-child(3) {
      .card-icon {
        top: 140px;
        left: 60px;

        @media ${devices.tablet} {
          top: 120px;
          left: 50%;
        }

        @media ${devices.tabletL} {
          left: 78%;
        }
      }
    }
  }
`;
