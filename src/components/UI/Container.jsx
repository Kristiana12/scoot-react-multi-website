import { styled } from 'styled-components';

const Container = ({ children, className }) => {
  const classes = className ? `container ${className}` : 'container';
  return <StyledContainer className={classes}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;

  &.small {
    max-width: 1140px;
  }
`;

export default Container;
