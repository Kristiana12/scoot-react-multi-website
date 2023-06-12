import useTheme from '../../../../hooks/useThemeHook';
import BetterLiving from '../../../../assets/images/better-living.jpg';
import DigitalEra from '../../../../assets/images/digital-era.jpg';
import BetterLivingPlaceholder from '../../../../assets/images/better-living-low-quality.jpg';
import DigitalEraPlaceholder from '../../../../assets/images/digital-era-low-quality.jpg';
import { Cards } from '../../../ExportComponents';

const AboutFeatures = () => {
  const { selectedTheme } = useTheme();
  const features = [
    {
      image: DigitalEra,
      imagePlaceholder: DigitalEraPlaceholder,
      imageAlt: 'Bus driving in the city',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="741" height="151">
          <g
            fill="none"
            fillRule="evenodd"
            style={{ stroke: `${selectedTheme.colors.primary}` }}
            strokeLinejoin="bevel"
            strokeWidth="15"
          >
            <path d="M740.969 8H182.854v99.369H6.591" />
            <path d="M44.64 145.64L6.214 107.214 44.64 68.787" />
          </g>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="445" height="445">
          <circle
            cx="302.5"
            cy="222.5"
            r="222.5"
            style={{ fill: `${selectedTheme.colors.background}` }}
            fillRule="evenodd"
            transform="translate(-80)"
          />
        </svg>
      ),
      title: 'Better urban living',
      titleClass: 'section-title-l',
      paragraph:
        'We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.',
      className: 'features-card card about',
    },
    {
      image: BetterLiving,
      imagePlaceholder: BetterLivingPlaceholder,
      imageAlt: 'Woman staring at her phone screen',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="741" height="151">
          <g
            fill="none"
            fillRule="evenodd"
            style={{ stroke: `${selectedTheme.colors.primary}` }}
            strokeLinejoin="bevel"
            strokeWidth="15"
          >
            <path d="M740.969 8H182.854v99.369H6.591" />
            <path d="M44.64 145.64L6.214 107.214 44.64 68.787" />
          </g>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="445" height="445">
          <circle
            cx="302.5"
            cy="222.5"
            r="222.5"
            style={{ fill: `${selectedTheme.colors.background}` }}
            fillRule="evenodd"
            transform="translate(-80)"
          />
        </svg>
      ),
      title: 'Mobility for the digital era',
      titleClass: 'section-title-l',
      paragraph:
        'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
      className: 'features-card card about',
    },
  ];

  return <Cards dataArr={features} sectionClass="section-features" />;
};

export default AboutFeatures;
