import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import devices from '../styles/devices';

const Button = ({ children, className, to, onClick }) => {
  const classes = className ? className : '';
  return (
    <StyledButton to={to} className={classes} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(NavLink)`
  &.btn-primary {
    display: inline-block;
    padding: 0.875rem 2.5rem;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textContrast};
    font-weight: 600;
    border: 2px solid transparent;
    transition: color 0.3s, background-color 0.3s, border 0.3s, box-shadow 0.4s,
      transform 0.4s;

    @media ${devices.tablet} {
      padding: 0.875rem 2.5rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.textContrast};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      box-shadow: 0 5px 5px ${({ theme }) => theme.colors.shadow};
      transform: translateY(-4px);
    }
  }
`;

export default Button;
