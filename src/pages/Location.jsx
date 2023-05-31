import HeroImageMobile from '../assets/images/careers-location-hero-mobile.jpg';
import HeroImageTablet from '../assets/images/careers-locations-hero-tablet.jpg';
import HeroImageDesktop from '../assets/images/careers-locations-hero-desktop.jpg';
import { Header } from '../components/ExportComponents';
const Location = () => {
  const content = {
    heroImages: {
      mobile: HeroImageMobile,
      tablet: HeroImageTablet,
      desktop: HeroImageDesktop,
    },
    title: 'Locations',
  };
  return <Header data={content} />;
};

export default Location;
