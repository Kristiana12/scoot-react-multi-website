import { Cards } from '../../../ExportComponents';
import JoinUs from '../../../../assets/images/join-us.jpg';
import JoinUsPlaceholder from '../../../../assets/images/join-us-low-quality.jpg';
import useTheme from '../../../../hooks/useThemeHook';

const CareerFeatures = () => {
  const { selectedTheme } = useTheme();

  const features = [
    {
      image: JoinUs,
      imagePlaceholder: JoinUsPlaceholder,
      imageAlt: 'Man standing in front of colleagues with a tablet in his hand',
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
      title: 'Care to join our mission?',
      titleClass: 'section-title-l',
      paragraph:
        'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!',
      button: 'Say Hello',
      buttonClass: 'btn-primary',
      urlLocation: '/contact',
      className: 'features-card card',
    },
  ];

  return <Cards dataArr={features} sectionClass="section-features" />;
};

export default CareerFeatures;
