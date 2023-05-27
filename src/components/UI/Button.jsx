import { StyledButton } from '../styles/Button.styled';

const Button = ({ children, className }) => {
  const classes = className ? className : '';
  return <StyledButton className={classes}>{children}</StyledButton>;
};

export default Button;
