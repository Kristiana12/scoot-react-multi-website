import { styled } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import devices from '../components/styles/devices';
import { v4 as uuidv4 } from 'uuid';

const useNavigation = (navigationLocation, setIsExpanded) => {
  const clickHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const links = ['about', 'locations', 'products', 'careers', 'contact'];

  //Main Navigation
  const mainNavigationLinks = links.map((link) => (
    <li key={uuidv4()}>
      <StyledNavLink onClick={clickHandler} to={`/${link}`}>
        {link}
      </StyledNavLink>
    </li>
  ));

  //Footer Navigation
  const footerLinks = links.map((link) => (
    <li key={uuidv4()}>
      <StyledLink to={`/${link}`}>{link}</StyledLink>
    </li>
  ));

  return (
    <StyledListContainer>
      {navigationLocation === 'header' ? mainNavigationLinks : footerLinks}
    </StyledListContainer>
  );
};

const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: bold;

  li {
    text-transform: capitalize;
  }
`;

//Main Navigation
const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textContrast};
  position: relative;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-4px);
  }

  @media ${devices.laptop} {
    color: ${({ theme }) => theme.colors.text};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 0;
    transition: height 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover::after {
    height: 3px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

//Footer Navigation
const StyledLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.4s, transform 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;

export default useNavigation;
