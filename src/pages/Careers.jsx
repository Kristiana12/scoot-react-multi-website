import HeroImageMobile from '../assets/images/careers-location-hero-mobile.jpg';
import HeroImageTablet from '../assets/images/careers-locations-hero-tablet.jpg';
import HeroImageDesktop from '../assets/images/careers-locations-hero-desktop.jpg';
import {
  Header,
  CareerFeatures,
  Container,
  ValuesSection,
  FreePositions,
} from '../components/ExportComponents';

const Careers = () => {
  const headerContent = {
    heroImages: {
      mobile: HeroImageMobile,
      tablet: HeroImageTablet,
      desktop: HeroImageDesktop,
    },
    title: 'Careers',
  };

  return (
    <>
      <Header data={headerContent} sectionClass="section-features" />
      <Container>
        <CareerFeatures />
        <ValuesSection sectionTitle="Why join us?" />
        <FreePositions />
      </Container>
    </>
  );
};

export default Careers;
