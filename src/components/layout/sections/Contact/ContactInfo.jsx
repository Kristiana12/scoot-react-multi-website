import { Cards } from '../../../ExportComponents';
import useTheme from '../../../../hooks/useThemeHook';

const ContactInfo = () => {
  const { selectedTheme } = useTheme();

  const contactInfo = [
    {
      icon: (
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_246_7)">
            <circle
              cx="48"
              cy="48"
              r="48"
              style={{ fill: `${selectedTheme.colors.primary}` }}
            />
            <path
              d="M48 46.5C46.0109 46.5 44.1032 45.7098 42.6967 44.3033C41.2902 42.8968 40.5 40.9891 40.5 39C40.5 37.0109 41.2902 35.1032 42.6967 33.6967C44.1032 32.2902 46.0109 31.5 48 31.5C49.9891 31.5 51.8968 32.2902 53.3033 33.6967C54.7098 35.1032 55.5 37.0109 55.5 39C55.5 39.9849 55.306 40.9602 54.9291 41.8701C54.5522 42.7801 53.9997 43.6069 53.3033 44.3033C52.6069 44.9997 51.7801 45.5522 50.8701 45.9291C49.9602 46.306 48.9849 46.5 48 46.5ZM48 18C42.4305 18 37.089 20.2125 33.1508 24.1508C29.2125 28.089 27 33.4305 27 39C27 54.75 48 78 48 78C48 78 69 54.75 69 39C69 33.4305 66.7875 28.089 62.8492 24.1508C58.911 20.2125 53.5695 18 48 18Z"
              style={{ fill: `${selectedTheme.colors.iconColor}` }}
            />
          </g>
          <defs>
            <clipPath id="clip0_246_7">
              <rect width="96" height="96" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Address',
      titleClass: 'section-title-s',
      paragraph: 'Boulevard St 584, NY 10065',
      className: 'contact-info card',
    },
    {
      icon: (
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_246_18)">
            <circle
              cx="48"
              cy="48"
              r="48"
              style={{ fill: `${selectedTheme.colors.primary}` }}
            />
            <path
              d="M68.7 27H26.3C23.385 27 21.0265 29.4187 21.0265 32.375L21 64.625C21 67.5813 23.385 70 26.3 70H68.7C71.615 70 74 67.5813 74 64.625V32.375C74 29.4187 71.615 27 68.7 27ZM68.7 37.75L47.5 51.1875L26.3 37.75V32.375L47.5 45.8125L68.7 32.375V37.75Z"
              style={{ fill: `${selectedTheme.colors.iconColor}` }}
            />
          </g>
          <defs>
            <clipPath id="clip0_246_18">
              <rect width="96" height="96" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Email',
      titleClass: 'section-title-s',
      paragraph: 'scoot-rentals@gmail.com',
      className: 'contact-info card',
    },
    {
      icon: (
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_246_23)">
            <circle
              cx="48"
              cy="48"
              r="48"
              style={{ fill: `${selectedTheme.colors.primary}` }}
            />
            <g clip-path="url(#clip1_246_23)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M58.3111 72.5659C54.8911 72.44 45.1987 71.1005 35.048 60.9521C24.8996 50.8014 23.5625 41.1114 23.4342 37.689C23.2442 32.4735 27.239 27.4076 31.8536 25.4292C32.4093 25.1893 33.0178 25.0979 33.6195 25.1641C34.2212 25.2303 34.7953 25.4518 35.2855 25.8069C39.0855 28.5761 41.7075 32.7656 43.959 36.0597C44.4544 36.7835 44.6662 37.6642 44.5541 38.534C44.4419 39.4039 44.0137 40.202 43.351 40.7765L38.7174 44.2179C38.4935 44.3795 38.3359 44.6169 38.2739 44.886C38.2119 45.1551 38.2496 45.4375 38.3801 45.6809C39.4299 47.588 41.2966 50.4285 43.4341 52.566C45.574 54.7035 48.5475 56.6937 50.5876 57.8622C50.8434 58.0058 51.1445 58.046 51.429 57.9744C51.7135 57.9029 51.9597 57.725 52.1171 57.4775L55.1334 52.8866C55.6879 52.15 56.5059 51.6565 57.4162 51.5096C58.3264 51.3626 59.2582 51.5735 60.0164 52.0981C63.358 54.4114 67.2577 56.9882 70.1125 60.6434C70.4964 61.1371 70.7405 61.725 70.8195 62.3454C70.8985 62.9658 70.8093 63.5961 70.5614 64.1702C68.5735 68.8086 63.5432 72.7582 58.3111 72.5659Z"
                style={{ fill: `${selectedTheme.colors.iconColor}` }}
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_246_23">
              <rect width="96" height="96" fill="white" />
            </clipPath>
            <clipPath id="clip1_246_23">
              <rect
                width="57"
                height="57"
                fill="white"
                transform="translate(19 20)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Phone',
      titleClass: 'section-title-s',
      paragraph: '+73 0467-534-2343-23',
      className: 'contact-info card',
    },
  ];

  return <Cards dataArr={contactInfo} sectionClass="section-contact" />;
};

export default ContactInfo;
