import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import AppleStoreImage from '../../assets/icons/app-store.svg';
import GooglePlayImage from '../../assets/icons/google-play.svg';
import devices from '../styles/devices';
import useTheme from '../../hooks/useThemeHook';
import { Container } from '../ExportComponents';

const AppStore = () => {
  const { selectedTheme } = useTheme();
  return (
    <StyledAppStore>
      <StyledMainContainer className="small">
        <StyledTitle>Sign up and Scoot off today</StyledTitle>
        <StyledStoreContainer>
          <StyledLink to="https://www.apple.com/at/store" target="_blank">
            <img
              src={AppleStoreImage}
              alt="Open Apple store"
              title="Apple Store"
            />
          </StyledLink>
          <StyledLink to="https://play.google.com/store/games" target="_blank">
            <img
              src={GooglePlayImage}
              alt="Open Google play"
              title="Google Play"
            />
          </StyledLink>
        </StyledStoreContainer>
        <StyledImageContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="1158" height="158">
            <g
              fill="none"
              fillRule="evenodd"
              opacity=".1"
              transform="matrix(-1 0 0 1 1159 8)"
            >
              <circle
                cx="173.5"
                cy="173.5"
                r="173.5"
                style={{ fill: `${selectedTheme.colors.backgroundIcon}` }}
              />
              <circle
                cx="576.5"
                cy="173.5"
                r="173.5"
                style={{ stroke: `${selectedTheme.colors.backgroundIcon}` }}
                strokeWidth="15"
              />
              <circle
                cx="979.5"
                cy="173.5"
                r="173.5"
                style={{ stroke: `${selectedTheme.colors.backgroundIcon}` }}
                strokeWidth="15"
              />
            </g>
          </svg>
        </StyledImageContainer>
      </StyledMainContainer>
    </StyledAppStore>
  );
};

const StyledAppStore = styled.section`
  padding: 3.875rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.navigationBackground};
  position: relative;
  z-index: 2;
`;

const StyledMainContainer = styled(Container)`
  @media ${devices.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

const StyledStoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.85rem;

  @media ${devices.desktop} {
    margin-left: auto;
    gap: 1.125rem;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1.85rem;
  color: ${({ theme }) => theme.colors.textContrast};
  max-width: 460px;
  margin: auto;
  margin-bottom: 2.5rem;

  @media ${devices.tablet} {
    font-size: 3rem;
  }
  @media ${devices.desktop} {
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const StyledImageContainer = styled.div`
  position: absolute;
  right: -200px;
  bottom: 0;
  z-index: -1;
`;

export default AppStore;
