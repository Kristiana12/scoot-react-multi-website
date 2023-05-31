import HeroImageMobile from '../assets/images/about-hero-mobile.jpg';
import HeroImageTablet from '../assets/images/about-hero-tablet.jpg';
import HeroImageDesktop from '../assets/images/about-hero-desktop.jpg';
import {
  Container,
  AboutFeatures,
  Header,
  ValuesSection,
} from '../components/ExportComponents';

const About = () => {
  const content = {
    heroImages: {
      mobile: HeroImageMobile,
      tablet: HeroImageTablet,
      desktop: HeroImageDesktop,
    },
    title: 'About',
  };

  return (
    <Container>
      <Header data={content} />
      <AboutFeatures />
      <ValuesSection />
    </Container>
  );
};

export default About;
