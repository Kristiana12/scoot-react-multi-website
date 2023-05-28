import { StyledNavigation, StyledHeader } from '../styles/Navigation.styled';
import { useState, useRef, useEffect } from 'react';
import { NavigationLink, Logo } from '../ExportComponents';
import { useTheme, styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const links = ['about', 'location', 'careers'];
  const NavigationLinks = links.map((link, i) => (
    <NavigationLink key={i} link={link} setIsExpanded={setIsExpanded} />
  ));

  const menuHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  //Close Menu when clicked outside
  const menuRef = useRef();

  useEffect(() => {
    const menu = (e) => {
      if (!menuRef.current.contains(e.target)) setIsExpanded(false);
    };

    document.addEventListener('click', menu, true);
  }, []);

  return (
    <StyledHeader>
      <StyledMenuButton
        onClick={menuHandler}
        aria-controls="Main menu"
        aria-expanded={isExpanded}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16">
          <g style={{ fill: theme.colors.primary }} fillRule="evenodd">
            <path d="M0 0h19.692v3.692H0zM0 6.154h19.692v3.692H0zM0 12.308h19.692V16H0z" />
          </g>
        </svg>
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
        ref={menuRef}
      >
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
`;

export default Navigation;
