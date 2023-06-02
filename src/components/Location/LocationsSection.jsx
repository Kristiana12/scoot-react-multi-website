import { StyledLocationSection } from '../styles/Location.styled';
import { LocationMap, Cards } from '../ExportComponents';

const LocationsSection = () => {
  const cardContent = [
    {
      title: 'Your City Not Listed?',
      titleClass: 'section-title-l',
      paragraph:
        'If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.',
      button: 'Message Us',
      buttonClass: 'btn-primary',
    },
  ];

  return (
    <>
      <StyledLocationSection>
        <LocationMap />
      </StyledLocationSection>
      <Cards dataArr={cardContent} sectionClass="section-city-undefined" />
    </>
  );
};

export default LocationsSection;
