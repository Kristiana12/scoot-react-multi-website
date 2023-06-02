import HeroImageMobile from '../assets/images/careers-location-hero-mobile.jpg';
import HeroImageTablet from '../assets/images/careers-locations-hero-tablet.jpg';
import HeroImageDesktop from '../assets/images/careers-locations-hero-desktop.jpg';
import {
  Header,
  CareerFeatures,
  Container,
  ValuesSection,
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
    <Container>
      <Header data={headerContent} sectionClass="section-features" />
      <CareerFeatures />
      <ValuesSection sectionTitle="Why join us?" />
    </Container>
  );
};

export default Careers;
