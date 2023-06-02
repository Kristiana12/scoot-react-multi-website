import { styled } from 'styled-components';
import devices from '../styles/devices';

const Container = ({ children, className }) => {
  const classes = className ? `container ${className}` : 'container';
  return <StyledContainer className={classes}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: min(100%, 1440px);
  margin: 0 auto;
  overflow: hidden;
`;

export default Container;
