import { styled } from 'styled-components';
import devices from '../styles/devices';
import { motion } from 'framer-motion';

export const StyledHeader = styled.header`
  //ALL PAGES
  color: ${({ theme }) => theme.colors.textContrast};
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  h1 {
    color: ${({ theme }) => theme.colors.textContrast};
  }

  & > .content {
    position: relative;
    z-index: 1;
    /* max-width: 1440px; */
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    picture {
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      object-position: right;
    }
  }

  .icon-circles {
    display: none;
    position: absolute;
    z-index: 1;
    right: -30px;
    bottom: 45px;

    @media ${devices.tablet} {
      display: block;
    }
  }

  //Just for HOME PAGE
  &.home {
    & > .content {
      padding-top: 7rem;
      padding-bottom: 10rem;

      @media ${devices.tablet} {
        padding-top: 8.5rem;
        padding-bottom: 13.5rem;
      }

      @media ${devices.desktop} {
        padding-bottom: 7.5rem;
      }

      p {
        margin: 1.5rem 0 2.125rem;

        @media ${devices.desktop} {
          margin: 2.5rem;
        }
      }

      @media ${devices.desktop} {
        p,
        a {
          margin-left: 3.5rem;
        }
      }
    }

    .icon {
      position: absolute;
      left: calc(25vw - 400px);
      bottom: 30px;
      z-index: 1;

      @media ${devices.tablet} {
        left: -110px;
        bottom: 45px;
      }

      @media ${devices.desktop} {
        left: calc(10vw + 620px);
        bottom: 169px;
      }
    }

    .icon-line {
      display: none;
      @media ${devices.desktop} {
        display: block;
        position: absolute;
        z-index: 1;
        top: 325px;
        left: 0;
      }
    }

    .icon-circles {
      @media ${devices.desktop} {
        bottom: 28%;
      }
    }
  }

  //For Other Pages
  &.page {
    padding: 3.75rem 1.5rem;

    .content {
      @media ${devices.tablet} {
        text-align: left;
        width: 90%;
      }
    }
    .hero-image {
      img {
        height: 100%;
        @media ${devices.mobile} {
          object-position: center;
        }
      }
    }
  }
`;

export const StyledContent = styled(motion.div)`
  width: min(95%, 320px);
  margin: 0 auto;
  text-align: center;

  @media ${devices.tablet} {
    width: min(90%, 575px);
  }

  @media ${devices.desktop} {
    text-align: left;
    margin-left: 12%;
  }
`;

export const StyledTitle = styled(motion.h1)`
  font-size: 2.5rem;

  @media ${devices.tablet} {
    font-size: 3.5rem;
  }
`;
