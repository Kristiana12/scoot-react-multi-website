import { styled } from 'styled-components';
import useResponsiveImages from './useResponsiveImage';
import { Button } from '../components/ExportComponents';
import devices from '../components/styles/devices';
import { useLocation } from 'react-router-dom';
import IconCircles from '../assets/patterns/white-circles.svg';
import useTheme from './useThemeHook';

const useHeroSection = ({
  heroImages,
  title,
  buttonClass,
  paragraph,
  button,
  icon,
  className,
  urlLocation,
}) => {
  const result = useResponsiveImages(heroImages);
  const location = useLocation();
  const { selectedTheme } = useTheme();
  return (
    <StyledSection className={location.pathname === '/' ? 'home' : 'page'}>
      <StyledContent className={className ? `${className} content` : 'content'}>
        <StyledTitle>{title}</StyledTitle>
        {paragraph && <p>{paragraph}</p>}
        {button && (
          <Button
            to={urlLocation ? urlLocation : '#'}
            className={buttonClass ? buttonClass : ''}
          >
            {button}
          </Button>
        )}
      </StyledContent>
      {heroImages && <div className="hero-image">{result}</div>}
      {icon && <div className="icon">{icon}</div>}
      <div className="icon-circles">
        <img src={IconCircles} alt="" arina-hidden="true" />
      </div>
      {location.pathname === '/' && (
        <div className="icon-line">
          <svg xmlns="http://www.w3.org/2000/svg" width="203" height="15">
            <path
              fill="none"
              style={{ stroke: `${selectedTheme.colors.primary}` }}
              strokeWidth="15"
              d="M203 7.5H.5"
            />
          </svg>
        </div>
      )}
    </StyledSection>
  );
};

export default useHeroSection;

const StyledSection = styled.header`
  //ALL PAGES
  color: ${({ theme }) => theme.colors.textContrast};
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;

  & > .content {
    position: relative;
    z-index: 1;
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
        padding-bottom: 11.5rem;
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
          margin-left: 5rem;
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
        left: 52.5%;
        bottom: 230px;
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
    padding: 3.75rem 0;

    .content {
      @media ${devices.tablet} {
        text-align: left;
        width: 80%;
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

const StyledContent = styled.div`
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

const StyledTitle = styled.h1`
  font-size: 2.5rem;

  @media ${devices.tablet} {
    font-size: 3.5rem;
  }
`;
