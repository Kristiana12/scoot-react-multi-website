import { StyledLocationSection } from '../../../styles/Location.styled';
import { LocationMap, Cards, Container } from '../../../ExportComponents';

const LocationsSection = () => {
  const cardContent = [
    {
      title: 'Your city not listed?',
      titleClass: 'section-title-l',
      paragraph:
        'If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.',
      button: 'Message Us',
      buttonClass: 'btn-primary',
      urlLocation: '/contact',
      className: 'location-card',
    },
  ];

  return (
    <Container>
      <StyledLocationSection>
        <LocationMap />
      </StyledLocationSection>
      <Cards dataArr={cardContent} sectionClass="section-city-undefined" />
    </Container>
  );
};

export default LocationsSection;
