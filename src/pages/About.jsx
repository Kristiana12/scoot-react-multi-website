import useHeroSection from '../hooks/useHeroSection';
import HeroImageMobile from '../assets/images/about-hero-mobile.jpg';
import HeroImageTablet from '../assets/images/about-hero-tablet.jpg';
import HeroImageDesktop from '../assets/images/about-hero-desktop.jpg';
import { Container, AboutFeatures } from '../components/ExportComponents';

const About = () => {
  const content = {
    heroImages: {
      mobile: HeroImageMobile,
      tablet: HeroImageTablet,
      desktop: HeroImageDesktop,
    },
    title: 'About',
  };

  const heroSection = useHeroSection(content);
  return (
    <Container>
      {heroSection}
      <AboutFeatures />
    </Container>
  );
};

export default About;
