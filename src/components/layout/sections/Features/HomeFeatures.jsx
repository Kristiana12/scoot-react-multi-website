// import useReusableCards from '../../hooks/useReusableCards';
import Payments from '../../../../assets/images/payments.jpg';
import NearYou from '../../../../assets/images/near-you.jpg';
import Telemetry from '../../../../assets/images/telemetry.jpg';
import PaymentsPlaceholder from '../../../../assets/images/payments-low-quality.jpg';
import NearYouPlaceholder from '../../../../assets/images/near-you-low-quality.jpg';
import TelemetryPlaceholder from '../../../../assets/images/telemetry-low-quality.jpg';
import useTheme from '../../../../hooks/useThemeHook';
import { Cards } from '../../../ExportComponents';

const HomeFeatures = () => {
  const { selectedTheme } = useTheme();
  const features = [
    {
      image: Telemetry,
      imagePlaceholder: TelemetryPlaceholder,
      imageAlt: 'Woman smiling while typing on her phone',
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
      title: 'Easy to use riding telemetry',
      titleClass: 'section-title-l',
      paragraph:
        "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
      button: 'Learn More',
      buttonClass: 'btn-primary',
      urlLocation: '/about',
      className: 'features-card card',
    },
    {
      image: NearYou,
      imagePlaceholder: NearYouPlaceholder,
      imageAlt: 'City buildings',
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
      title: 'Coming to a city near you',
      titleClass: 'section-title-l',
      paragraph:
        'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
      button: 'Learn More',
      buttonClass: 'btn-primary',
      urlLocation: '/about',
      className: 'features-card card',
    },
    {
      image: Payments,
      imagePlaceholder: PaymentsPlaceholder,
      imageAlt: 'Man taking out money from his purse',
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
      title: 'Zero hassle payments',
      titleClass: 'section-title-l',
      paragraph:
        'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
      button: 'Learn More',
      buttonClass: 'btn-primary',
      urlLocation: '/about',
      className: 'features-card card',
    },
  ];

  return <Cards dataArr={features} sectionClass="section-features" />;
};

export default HomeFeatures;
