import { styled } from 'styled-components';
import devices from '../styles/devices';

const Container = ({ children, className }) => {
  const classes = className ? `container ${className}` : 'container';
  return <StyledContainer className={classes}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: min(95%, 1440px);
  margin: 0 auto;
  overflow: hidden;

  @media ${devices.laptop} {
    width: min(100%, 1440px);
  }

  &.small {
    width: min(90%, 1100px);

    @media ${devices.desktop} {
      width: min(100%, 1100px);
    }
  }
`;

export default Container;
