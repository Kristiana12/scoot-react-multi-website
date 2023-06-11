import HeroImgMobile from '../assets/images/home-hero-mobile.jpg';
import HeroImgTablet from '../assets/images/home-hero-tablet.jpg';
import HeroImgDesktop from '../assets/images/home-hero-desktop.jpg';
import useTheme from '../hooks/useThemeHook';
import {
  Services,
  HomeFeatures,
  Container,
} from '../components/ExportComponents';
import { Header } from '../components/ExportComponents';

const Home = () => {
  const { selectedTheme } = useTheme();

  const content = {
    title: 'Scooter sharing made simple',
    paragraph:
      'Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!',
    button: 'Get Scootin',
    buttonClass: 'btn-primary',
    heroImages: {
      mobile: HeroImgMobile,
      tablet: HeroImgTablet,
      desktop: HeroImgDesktop,
    },
    icon: (
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
    ),
    icon2: (
      <svg xmlns="http://www.w3.org/2000/svg" width="203" height="15">
        <path
          fill="none"
          style={{ stroke: `${selectedTheme.colors.primary}` }}
          strokeWidth="15"
          d="M203 7.5H.5"
        />
      </svg>
    ),
    className: 'home-hero',
    urlLocation: '/products',
  };

  return (
    <>
      <Header data={content} />
      <Container>
        <Services />
        <HomeFeatures />
      </Container>
    </>
  );
};

export default Home;
