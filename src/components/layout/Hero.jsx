import { styled } from 'styled-components';
import { Button } from '../ExportComponents';
import useTheme from '../../hooks/useThemeHook';

const HeroSection = () => {
  const { selectedTheme } = useTheme();
  const svgArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="452" height="151">
      <g
        fill="none"
        fillRule="evenodd"
        style={{ stroke: `${selectedTheme.colors.primary}` }}
        strokeLinejoin="bevel"
        strokeWidth="15"
      >
        <path d="M407.952 145.444l38.426-38.426-38.426-38.426" />
        <path d="M0 8h270.115v99.369h176.263" />
      </g>
    </svg>
  );

  return (
    <StyledSection>
      <h1>Scooter sharing made simple</h1>
      <p>
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>
      <div className="action-btn">
        <Button>Get Scootin</Button>
      </div>
      <div className="icon">{svgArrow}</div>
    </StyledSection>
  );
};

export default HeroSection;

const StyledSection = styled.section``;
