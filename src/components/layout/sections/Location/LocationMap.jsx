import { ResponsiveImages } from '../../../ExportComponents.js';
import { v4 as uuidv4 } from 'uuid';
import WorldMapMobile from '../../../../assets/images/world-map-mobile.png';
import WorldMapTablet from '../../../../assets/images/world-map-tablet.png';
import WorldMapDesktop from '../../../../assets/images/world-map-desktop.png';
import {
  StyledLocationList,
  StyledLocationCity,
} from '../../../styles/Location.styled';

const LocationMap = () => {
  const images = {
    mobile: WorldMapMobile,
    tablet: WorldMapTablet,
    desktop: WorldMapDesktop,
  };

  const cities = ['New York', 'London', 'Jakarta', 'Yokohoma'];

  return (
    <div className="location-map">
      {<ResponsiveImages images={images} />}
      <StyledLocationList>
        {cities.map((city) => (
          <StyledLocationCity key={uuidv4()}>{city}</StyledLocationCity>
        ))}
      </StyledLocationList>
    </div>
  );
};

export default LocationMap;
