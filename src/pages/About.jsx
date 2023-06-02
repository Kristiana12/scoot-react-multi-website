import HeroImageMobile from '../assets/images/about-hero-mobile.jpg';
import HeroImageTablet from '../assets/images/about-hero-tablet.jpg';
import HeroImageDesktop from '../assets/images/about-hero-desktop.jpg';
import {
  Container,
  AboutFeatures,
  Header,
  ValuesSection,
  Faq,
} from '../components/ExportComponents';

const About = () => {
  const headerContent = {
    heroImages: {
      mobile: HeroImageMobile,
      tablet: HeroImageTablet,
      desktop: HeroImageDesktop,
    },
    title: 'About',
  };

  return (
    <>
      <Header data={headerContent} />
      <Container>
        <AboutFeatures />
        <ValuesSection sectionTitle="Our values" />
        <Faq />
      </Container>
    </>
  );
};

export default About;
