import { useLocation } from 'react-router-dom';
import useTheme from '../../hooks/useThemeHook';
import { Button, ResponsiveImages } from '../ExportComponents';
import IconCircles from '../../assets/patterns/white-circles.svg';
import {
  StyledContent,
  StyledHeader,
  StyledTitle,
} from '../styles/Header.styled';

const HeaderImage = ({ data }) => {
  return (
    <>
      {data.heroImages && (
        <div className="hero-image">
          <ResponsiveImages images={data.heroImages} />
        </div>
      )}
    </>
  );
};

const HeaderIcon = ({ data }) => {
  const { selectedTheme } = useTheme();
  return (
    <>
      {data.icon && <div className="icon">{data.icon}</div>}
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
    </>
  );
};

const HeaderContent = ({ data }) => {
  return (
    <>
      <StyledContent className="content">
        <StyledTitle>{data.title}</StyledTitle>
        {data.paragraph && <p>{data.paragraph}</p>}
        {data.button && (
          <Button
            to={data.urlLocation ? data.urlLocation : '#'}
            className={data.buttonClass ? data.buttonClass : ''}
          >
            {data.button}
          </Button>
        )}
      </StyledContent>
      data
    </>
  );
};

const Header = ({ data }) => {
  const location = useLocation();
  return (
    <StyledHeader className={location.pathname === '/' ? 'home' : 'page'}>
      <HeaderContent data={data} />
      <HeaderImage data={data} />
      <HeaderIcon data={data} />
    </StyledHeader>
  );
};

export default Header;
