const size = {
  mobile: '499px',
  tablet: '768px',
  tabletL: '930px',
  laptop: '1024px',
  desktop: '1440px',
  desktopL: '2560px',
};

const devices = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

export default devices;
