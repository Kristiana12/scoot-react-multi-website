import { useLocation } from 'react-router-dom';
import useTheme from '../../hooks/useThemeHook';
import { Button, ResponsiveImages } from '../ExportComponents';
import IconCircles from '../../assets/patterns/white-circles.svg';
import {
  StyledContent,
  StyledHeader,
  StyledTitle,
} from '../styles/Header.styled';

//Animations
import { motion } from 'framer-motion';
import { HeaderAnimation } from '../styles/animation';

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
      {data.icon2 && <div className="icon-line">{data.icon2}</div>}
    </>
  );
};

const HeaderContent = ({ data }) => {
  return (
    <StyledContent
      className="content"
      variants={HeaderAnimation}
      initial="hidden"
      animate="visible"
    >
      <StyledTitle>{data.title}</StyledTitle>
      {data.paragraph && <motion.p>{data.paragraph}</motion.p>}
      {data.button && (
        <Button
          to={data.urlLocation ? data.urlLocation : '#'}
          className={data.buttonClass ? data.buttonClass : ''}
        >
          {data.button}
        </Button>
      )}
    </StyledContent>
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
