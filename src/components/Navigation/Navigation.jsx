import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledNavigation,
  StyledHeader,
  StyledMenuButton,
} from '../styles/Navigation.styled';
import { ThemeToggleButton, Button } from '../ExportComponents';
import Logo from '../../assets/logo.svg';
import LogoDark from '../../assets/logo-dark.svg';
import useTheme from '../../hooks/useThemeHook';
import useNavigation from '../../hooks/useNavigation';
//animation
import { NavigationAnimation } from '../styles/animation';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { selectedTheme } = useTheme();
  const navigation = useNavigation('header', setIsExpanded);

  const SVGMenu = isExpanded ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <g style={{ fill: selectedTheme.colors.primary }} fillRule="evenodd">
        <path d="M3.19.733l13.923 13.924-2.61 2.61L.579 3.343z" />
        <path d="M.579 14.657L14.503.733l2.61 2.61L3.19 17.267z" />
      </g>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16">
      <g style={{ fill: selectedTheme.colors.primary }} fillRule="evenodd">
        <path d="M0 0h19.692v3.692H0zM0 6.154h19.692v3.692H0zM0 12.308h19.692V16H0z" />
      </g>
    </svg>
  );

  const menuHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  //Close Menu when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click target is outside the navigation menu
      if (
        isExpanded &&
        !event.target.closest('#main-menu') &&
        !event.target.closest('#menu-button')
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isExpanded]);

  return (
    <StyledHeader
      variants={NavigationAnimation}
      initial="hidden"
      animate="visible"
    >
      <StyledMenuButton
        style={{
          background: `${
            isExpanded
              ? selectedTheme.colors.navigationBackground
              : selectedTheme.colors.body
          }`,
        }}
        id="menu-button"
        onClick={menuHandler}
        aria-controls="main-menu"
        aria-expanded={isExpanded}
      >
        {SVGMenu}
      </StyledMenuButton>

      <div className="logo">
        <NavLink to="/">
          <img
            src={selectedTheme.name === 'light-theme' ? Logo : LogoDark}
            alt="scoot"
          />
        </NavLink>
      </div>

      <StyledNavigation
        id="main-menu"
        aria-label="Main Menu"
        className={isExpanded ? 'show' : ''}
      >
        <ThemeToggleButton onClick={menuHandler} />
        {navigation}
        <Button to="/products" className="btn-primary" onClick={menuHandler}>
          Get Scootin
        </Button>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Navigation;
