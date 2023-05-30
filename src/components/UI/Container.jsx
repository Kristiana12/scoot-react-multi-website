import { styled } from 'styled-components';

const Container = ({ children, className }) => {
  const classes = className ? `container ${className}` : 'container';
  return <StyledContainer className={classes}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: min(100%, 1440px);
  margin: 0 auto;
  overflow: hidden;

  &.small {
    width: min(90%, 1100px);
  }
`;

export default Container;
