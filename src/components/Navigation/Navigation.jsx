import { StyledNavigation, StyledHeader } from '../styles/Navigation.styled';
import { useState, useEffect } from 'react';
import { NavigationLink, Logo, ThemeToggleButton } from '../ExportComponents';
import { useTheme, styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import devices from '../styles/devices';

const Navigation = ({ setSelectedTheme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //Pass theme colors to the component
  const theme = useTheme();

  const links = ['about', 'location', 'careers'];
  const NavigationLinks = links.map((link, i) => (
    <NavigationLink key={i} link={link} setIsExpanded={setIsExpanded} />
  ));

  const SVG = isExpanded ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <g style={{ fill: theme.colors.primary }} fillRule="evenodd">
        <path d="M3.19.733l13.923 13.924-2.61 2.61L.579 3.343z" />
        <path d="M.579 14.657L14.503.733l2.61 2.61L3.19 17.267z" />
      </g>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16">
      <g style={{ fill: theme.colors.primary }} fillRule="evenodd">
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
    <StyledHeader>
      <StyledMenuButton
        id="menu-button"
        onClick={menuHandler}
        aria-controls="main-menu"
        aria-expanded={isExpanded}
      >
        {SVG}
      </StyledMenuButton>

      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="scoot" />
        </NavLink>
      </div>

      <StyledNavigation
        id="main-menu"
        aria-label="Main Menu"
        className={isExpanded ? 'show' : ''}
      >
        <ThemeToggleButton setSelectedTheme={setSelectedTheme} />
        <ul>{NavigationLinks}</ul>
        <NavLink to="/location" className="btn-primary" onClick={menuHandler}>
          Get Scootin
        </NavLink>
      </StyledNavigation>
    </StyledHeader>
  );
};

const StyledMenuButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;

  @media ${devices.tablet} {
    display: none;
  }
`;

export default Navigation;
