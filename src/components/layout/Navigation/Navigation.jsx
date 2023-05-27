import { StyledNavigation } from '../../styles/Navigation.styled';
import { useState } from 'react';
import { Button, NavigationLink } from '../../ExportComponents';
import { useTheme } from 'styled-components';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const links = ['about', 'location', 'career'];
  const NavigationLinks = links.map((link, i) => (
    <NavigationLink key={i} link={link} />
  ));

  const menuHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <header>
      <Button
        onClick={menuHandler}
        aria-controls="Main menu"
        aria-expanded={isExpanded}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16">
          <g style={{ fill: theme.colors.primary }} fillRule="evenodd">
            <path d="M0 0h19.692v3.692H0zM0 6.154h19.692v3.692H0zM0 12.308h19.692V16H0z" />
          </g>
        </svg>
      </Button>
      <StyledNavigation id="main-menu" aria-label="Main Menu">
        <ul>{NavigationLinks}</ul>
      </StyledNavigation>
    </header>
  );
};

export default Navigation;
