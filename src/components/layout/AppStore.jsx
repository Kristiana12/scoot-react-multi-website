import AppleStoreImage from '../../assets/icons/app-store.svg';
import GooglePlayImage from '../../assets/icons/google-play.svg';
import useTheme from '../../hooks/useThemeHook';
import {
  StyledAppStore,
  StyledMainContainer,
  StyledStoreContainer,
  StyledTitle,
  StyledLink,
  StyledImageContainer,
} from '../styles/AppStore.styles';

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

export default AppStore;
