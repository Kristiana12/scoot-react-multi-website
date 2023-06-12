import { Cards } from '../../../ExportComponents';
import DiscoverImage from '../../../../assets/images/discover.jpg';
import SecurityImage from '../../../../assets/images/security.jpg';
import DiscoverImagePlaceholder from '../../../../assets/images/discover-low-quality.jpg';
import SecurityImagePlaceholder from '../../../../assets/images/security-low-quality.jpg';
import useTheme from '../../../../hooks/useThemeHook';

const ProductsFeatures = () => {
  const { selectedTheme } = useTheme();
  const features = [
    {
      image: DiscoverImage,
      imagePlaceholder: DiscoverImagePlaceholder,
      imageAlt: 'A woman looking on a map while seated on a scooter',
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
      title: 'Start discovering today',
      titleClass: 'section-title-l',
      paragraph:
        'Unleash your inner adventurer and experience the city in a whole new way with our scooter rentals. Say goodbye to crowded buses and expensive taxi rides!',
      button: 'Book now',
      buttonClass: 'btn-primary',
      urlLocation: '/contact',
      className: 'features-card card',
    },
    {
      image: SecurityImage,
      imagePlaceholder: SecurityImagePlaceholder,
      imageAlt: 'Man is repairing a scooter',
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
      title: 'Your Safety, Our Priority',
      titleClass: 'section-title-l',
      paragraph:
        'We take great pride in offering reliable and well-maintained scooters to ensure a smooth and worry-free ride. In the rare event of any mechanical or technical problem, our expert technicians are just a call away, ready to provide immediate assistance.',
      button: 'Book now',
      buttonClass: 'btn-primary',
      urlLocation: '/contact',
      className: 'features-card card',
    },
  ];

  return <Cards dataArr={features} sectionClass="section-features" />;
};

export default ProductsFeatures;
