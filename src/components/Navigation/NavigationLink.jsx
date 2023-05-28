import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import devices from '../styles/devices';

const NavigationLink = ({ link, setIsExpanded }) => {
  const clickHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <li className="menu-item">
      <StyledNavLink onClick={clickHandler} to={`/${link}`}>
        {link}
      </StyledNavLink>
    </li>
  );
};

const StyledNavLink = styled(NavLink)`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textContrast};
  position: relative;

  @media ${devices.tablet} {
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

export default NavigationLink;
