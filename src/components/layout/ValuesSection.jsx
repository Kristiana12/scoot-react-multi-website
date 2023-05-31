import { Cards } from '../ExportComponents';
import useTheme from '../../hooks/useThemeHook';
import OurCommunity from '../../assets/images/our-community.jpg';
import OurIntegrity from '../../assets/images/our-integrity.jpg';
import OurTech from '../../assets/images/our-tech.jpg';

const Values = () => {
  const { selectedTheme } = useTheme();
  const content = [
    {
      image: OurTech,
      icon: (
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_1496)">
            <circle
              cx="48"
              cy="48"
              r="48"
              style={{ fill: `${selectedTheme.colors.primary}` }}
            />
            <path
              d="M39.6684 48.6C39.6684 48.056 39.8684 47.584 40.2684 47.184C40.6684 46.784 41.1404 46.584 41.6844 46.584C42.2284 46.584 42.7004 46.784 43.1004 47.184C43.5004 47.584 43.7004 48.056 43.7004 48.6C43.7004 49.144 43.5004 49.616 43.1004 50.016C42.7004 50.416 42.2284 50.616 41.6844 50.616C41.1404 50.616 40.6684 50.416 40.2684 50.016C39.8684 49.616 39.6684 49.144 39.6684 48.6ZM35.4924 46.728C35.4924 44.552 36.0364 42.864 37.1244 41.664C38.2284 40.464 39.7484 39.864 41.6844 39.864C43.6204 39.864 45.1324 40.464 46.2204 41.664C47.3244 42.864 47.8764 44.552 47.8764 46.728V50.472C47.8764 52.712 47.3244 54.416 46.2204 55.584C45.1324 56.752 43.6204 57.336 41.6844 57.336C39.7484 57.336 38.2284 56.752 37.1244 55.584C36.0364 54.416 35.4924 52.712 35.4924 50.472V46.728ZM41.6844 54.456C42.2604 54.456 42.7404 54.368 43.1244 54.192C43.5084 54 43.8204 53.736 44.0604 53.4C44.3004 53.064 44.4684 52.664 44.5644 52.2C44.6604 51.736 44.7084 51.224 44.7084 50.664V46.536C44.7084 46.008 44.6524 45.512 44.5404 45.048C44.4284 44.584 44.2524 44.184 44.0124 43.848C43.7724 43.512 43.4604 43.248 43.0764 43.056C42.6924 42.848 42.2284 42.744 41.6844 42.744C41.1404 42.744 40.6764 42.848 40.2924 43.056C39.9084 43.248 39.5964 43.512 39.3564 43.848C39.1164 44.184 38.9404 44.584 38.8284 45.048C38.7164 45.512 38.6604 46.008 38.6604 46.536V50.664C38.6604 51.224 38.7084 51.736 38.8044 52.2C38.9004 52.664 39.0684 53.064 39.3084 53.4C39.5484 53.736 39.8604 54 40.2444 54.192C40.6284 54.368 41.1084 54.456 41.6844 54.456ZM54.3003 53.976V41.784H53.8683L52.2843 47.544H49.2603V47.256L51.2763 40.2H57.4683V53.976H61.6443V57H49.5483V53.976H54.3003Z"
              style={{ fill: `${selectedTheme.colors.iconColor}` }}
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1496">
              <rect width="96" height="96" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Our tech',
      titleClass: 'section-title-s',
      paragraph:
        'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
      className: 'values-card card',
    },
    {
      image: OurCommunity,
      icon: (
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_1528)">
            <circle
              cx="48"
              cy="48"
              r="48"
              style={{ fill: `${selectedTheme.colors.primary}` }}
            />
            <path
              d="M39.6684 48.6C39.6684 48.056 39.8684 47.584 40.2684 47.184C40.6684 46.784 41.1404 46.584 41.6844 46.584C42.2284 46.584 42.7004 46.784 43.1004 47.184C43.5004 47.584 43.7004 48.056 43.7004 48.6C43.7004 49.144 43.5004 49.616 43.1004 50.016C42.7004 50.416 42.2284 50.616 41.6844 50.616C41.1404 50.616 40.6684 50.416 40.2684 50.016C39.8684 49.616 39.6684 49.144 39.6684 48.6ZM35.4924 46.728C35.4924 44.552 36.0364 42.864 37.1244 41.664C38.2284 40.464 39.7484 39.864 41.6844 39.864C43.6204 39.864 45.1324 40.464 46.2204 41.664C47.3244 42.864 47.8764 44.552 47.8764 46.728V50.472C47.8764 52.712 47.3244 54.416 46.2204 55.584C45.1324 56.752 43.6204 57.336 41.6844 57.336C39.7484 57.336 38.2284 56.752 37.1244 55.584C36.0364 54.416 35.4924 52.712 35.4924 50.472V46.728ZM41.6844 54.456C42.2604 54.456 42.7404 54.368 43.1244 54.192C43.5084 54 43.8204 53.736 44.0604 53.4C44.3004 53.064 44.4684 52.664 44.5644 52.2C44.6604 51.736 44.7084 51.224 44.7084 50.664V46.536C44.7084 46.008 44.6524 45.512 44.5404 45.048C44.4284 44.584 44.2524 44.184 44.0124 43.848C43.7724 43.512 43.4604 43.248 43.0764 43.056C42.6924 42.848 42.2284 42.744 41.6844 42.744C41.1404 42.744 40.6764 42.848 40.2924 43.056C39.9084 43.248 39.5964 43.512 39.3564 43.848C39.1164 44.184 38.9404 44.584 38.8284 45.048C38.7164 45.512 38.6604 46.008 38.6604 46.536V50.664C38.6604 51.224 38.7084 51.736 38.8044 52.2C38.9004 52.664 39.0684 53.064 39.3084 53.4C39.5484 53.736 39.8604 54 40.2444 54.192C40.6284 54.368 41.1084 54.456 41.6844 54.456ZM53.6763 49.8V44.808L57.8523 43.656V43.224H49.5003V40.2H60.4443V45.48L55.9803 46.776V47.208H56.5563C57.1483 47.208 57.7323 47.304 58.3083 47.496C58.8843 47.672 59.3883 47.952 59.8203 48.336C60.2683 48.72 60.6283 49.2 60.9003 49.776C61.1723 50.336 61.3083 51 61.3083 51.768V52.056C61.3083 52.808 61.1803 53.504 60.9243 54.144C60.6843 54.784 60.3163 55.344 59.8203 55.824C59.3403 56.288 58.7403 56.656 58.0203 56.928C57.3003 57.2 56.4763 57.336 55.5483 57.336C54.6043 57.336 53.7483 57.184 52.9803 56.88C52.2123 56.576 51.5563 56.16 51.0123 55.632C50.4843 55.104 50.0763 54.496 49.7883 53.808C49.5003 53.12 49.3563 52.392 49.3563 51.624V50.616H52.5243V51.48C52.5243 52.248 52.7723 52.912 53.2683 53.472C53.7643 54.032 54.5083 54.312 55.5003 54.312C56.3483 54.312 56.9963 54.096 57.4443 53.664C57.9083 53.232 58.1403 52.664 58.1403 51.96C58.1403 51.208 57.8923 50.664 57.3963 50.328C56.9163 49.976 56.3003 49.8 55.5483 49.8H53.6763Z"
              style={{ fill: `${selectedTheme.colors.iconColor}` }}
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1528">
              <rect width="96" height="96" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Our community',
      titleClass: 'section-title-s',
      paragraph:
        'We uses local workforce with neighborhood organizations to greatly improve the overall growth and improve urban living.',
      className: 'values-card card',
    },
    {
      image: OurIntegrity,
      icon: (
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_1513)">
            <circle
              cx="48"
              cy="48"
              r="48"
              style={{ fill: `${selectedTheme.colors.primary}` }}
            />
            <path
              d="M39.6684 48.6C39.6684 48.056 39.8684 47.584 40.2684 47.184C40.6684 46.784 41.1404 46.584 41.6844 46.584C42.2284 46.584 42.7004 46.784 43.1004 47.184C43.5004 47.584 43.7004 48.056 43.7004 48.6C43.7004 49.144 43.5004 49.616 43.1004 50.016C42.7004 50.416 42.2284 50.616 41.6844 50.616C41.1404 50.616 40.6684 50.416 40.2684 50.016C39.8684 49.616 39.6684 49.144 39.6684 48.6ZM35.4924 46.728C35.4924 44.552 36.0364 42.864 37.1244 41.664C38.2284 40.464 39.7484 39.864 41.6844 39.864C43.6204 39.864 45.1324 40.464 46.2204 41.664C47.3244 42.864 47.8764 44.552 47.8764 46.728V50.472C47.8764 52.712 47.3244 54.416 46.2204 55.584C45.1324 56.752 43.6204 57.336 41.6844 57.336C39.7484 57.336 38.2284 56.752 37.1244 55.584C36.0364 54.416 35.4924 52.712 35.4924 50.472V46.728ZM41.6844 54.456C42.2604 54.456 42.7404 54.368 43.1244 54.192C43.5084 54 43.8204 53.736 44.0604 53.4C44.3004 53.064 44.4684 52.664 44.5644 52.2C44.6604 51.736 44.7084 51.224 44.7084 50.664V46.536C44.7084 46.008 44.6524 45.512 44.5404 45.048C44.4284 44.584 44.2524 44.184 44.0124 43.848C43.7724 43.512 43.4604 43.248 43.0764 43.056C42.6924 42.848 42.2284 42.744 41.6844 42.744C41.1404 42.744 40.6764 42.848 40.2924 43.056C39.9084 43.248 39.5964 43.512 39.3564 43.848C39.1164 44.184 38.9404 44.584 38.8284 45.048C38.7164 45.512 38.6604 46.008 38.6604 46.536V50.664C38.6604 51.224 38.7084 51.736 38.8044 52.2C38.9004 52.664 39.0684 53.064 39.3084 53.4C39.5484 53.736 39.8604 54 40.2444 54.192C40.6284 54.368 41.1084 54.456 41.6844 54.456ZM61.3323 53.976V57H49.5243V53.688C49.5243 52.808 49.6523 52.056 49.9083 51.432C50.1803 50.808 50.5563 50.28 51.0363 49.848C51.5323 49.416 52.1243 49.064 52.8123 48.792C53.5003 48.504 54.2763 48.264 55.1403 48.072C55.7803 47.928 56.3003 47.768 56.7003 47.592C57.1163 47.4 57.4443 47.192 57.6843 46.968C57.9243 46.728 58.0843 46.472 58.1643 46.2C58.2603 45.912 58.3083 45.592 58.3083 45.24C58.3083 44.568 58.0603 44.008 57.5643 43.56C57.0843 43.112 56.4123 42.888 55.5483 42.888C54.6363 42.888 53.9083 43.168 53.3643 43.728C52.8203 44.272 52.5483 45.032 52.5483 46.008V47.064H49.3803V45.72C49.3803 44.936 49.5163 44.192 49.7883 43.488C50.0763 42.768 50.4763 42.144 50.9883 41.616C51.5163 41.072 52.1563 40.648 52.9083 40.344C53.6603 40.024 54.5083 39.864 55.4523 39.864C56.4603 39.864 57.3403 40.016 58.0923 40.32C58.8443 40.608 59.4683 40.992 59.9643 41.472C60.4763 41.952 60.8523 42.512 61.0923 43.152C61.3483 43.776 61.4763 44.424 61.4763 45.096V45.384C61.4763 46.792 61.0763 47.96 60.2763 48.888C59.4923 49.816 58.2043 50.488 56.4123 50.904C55.6603 51.08 55.0363 51.264 54.5403 51.456C54.0603 51.632 53.6843 51.832 53.4123 52.056C53.1403 52.28 52.9483 52.528 52.8363 52.8C52.7403 53.056 52.6923 53.352 52.6923 53.688V53.976H61.3323Z"
              style={{ fill: `${selectedTheme.colors.iconColor}` }}
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1513">
              <rect width="96" height="96" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Our integrity',
      titleClass: 'section-title-s',
      paragraph:
        'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
      className: 'values-card card',
    },
  ];
  return <Cards dataArr={content} sectionClass="section-values" />;
};

export default Values;
