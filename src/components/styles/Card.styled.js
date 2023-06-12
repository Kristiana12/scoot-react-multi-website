import { styled } from 'styled-components';
import devices from '../styles/devices';
import { motion } from 'framer-motion';

export const StyledTitle = styled.h2`
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

export const StyledSection = styled(motion.section)`
  //ALL
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${devices.tablet} {
    gap: 3.5rem;
  }

  h3 {
    @media ${devices.laptop} {
      flex: 100%;
    }
  }

  .card {
    max-width: 310px;
    margin: 0 auto;
    text-align: center;
  }

  .content,
  .card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  //Contact
  &.section-contact {
    @media ${devices.laptop} {
      flex-direction: row;
      gap: 1.875rem;
    }

    .content span {
      display: inline-block;

      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  }

  //Services
  &.section-services {
    @media ${devices.desktop} {
      flex-direction: row;
      gap: 1.875rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    & .service-card {
      @media ${devices.tablet} {
        text-align: left;
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: repeat(2, min-content);
        gap: 1.5rem 5rem;
        max-width: 600px;
        position: relative;

        @media ${devices.desktop} {
          display: flex;
          justify-content: center;
          max-width: 380px;
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
    max-width: 100%;

    .features-card {
      max-width: 500px;
      align-items: center;
      gap: 2rem;
      position: relative;

      @media ${devices.tabletL} {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1140px;
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
        width: 290px;
        height: 290px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1.5rem;

        //for the react-lazy-loading-image-component
        & > span {
          display: block;
          width: 100%;
          height: 100%;
        }

        @media ${devices.mobile} {
          width: 310px;
          height: 310px;
        }

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
          left: 49%;
        }
      }

      //Background Circle
      .card-icon2 {
        display: none;

        @media ${devices.tablet} {
          display: block;
          position: absolute;
          top: 0;
          right: -89%;
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
          right: 1180px;
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

  //Values - Products
  &.section-values,
  &.section-products {
    padding: 7.5rem 0.5rem 0;
    gap: 5rem;

    @media ${devices.laptop} {
      display: grid;
      grid-template-columns: repeat(3, minmax(200px, 1fr));

      h3 {
        grid-column: 1 / -1;
      }
    }

    @media ${devices.laptop} {
      gap: 5rem 0;
    }

    .values-card,
    .product-card {
      gap: 4rem;

      @media ${devices.tablet} {
        width: min(100%, 490px);
      }
    }

    .product-card {
      .content {
        align-items: center;
      }
      .image img {
        box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
      }
    }

    .image {
      position: relative;
      img {
        width: 240px;
        height: 240px;
        border-radius: 50%;
      }

      .card-icon {
        position: absolute;
        left: 50%;
        bottom: -48px;
        transform: translateX(-50%);
      }
    }
  }

  //Locations - Booking
  &.section-city-undefined,
  &.section-booking {
    padding: 3rem 1.5rem;
    text-align: center;
    max-width: 680px;
    margin: 0 auto;

    &.section-booking {
      padding: 8.5rem 1.5rem 0;
    }

    @media ${devices.desktop} {
      padding: 3rem 0;
      max-width: 1140px;
    }

    .content {
      align-items: center;

      @media ${devices.desktop} {
        flex-direction: row;
        text-align: left;
        align-items: start;
        justify-content: space-between;
        gap: 2.5rem;

        p {
          flex-basis: 495px;
          justify-self: center;
        }

        a {
          justify-self: end;
          margin-left: auto;
        }
      }

      h2 {
        text-transform: capitalize;
        @media ${devices.tablet} {
          max-width: 450px;
        }
        @media ${devices.desktop} {
          flex-basis: 350px;
        }
      }
    }
  }
`;
