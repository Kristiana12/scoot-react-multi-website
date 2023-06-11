import {
  StyledContactLocations,
  StyledLocationsList,
} from '../../../styles/Form.styled';
import { v4 as uuidv4 } from 'uuid';
import { SectionInView } from '../../../ExportComponents';

const ContactLocations = () => {
  const locations = [
    {
      country: 'United States',
      postalCode: 10001,
      city: 'New York',
    },
    {
      country: 'United Kingdom',
      postalCode: 'E1 7DA',
      city: 'London',
    },
    {
      country: 'Indonesia',
      postalCode: 12190,
      city: 'Jakarta',
    },
    {
      country: 'Japan',
      postalCode: 220090,
      city: 'Yokohoma',
    },
  ];

  return (
    <SectionInView StyledSection={StyledContactLocations}>
      <h3 className="title-m">Our Locations</h3>
      <p className="paragraph">
        We work globally and have offices in New York, London, Jakarta and
        Yokohoma.
      </p>
      <StyledLocationsList>
        {locations.map((location) => (
          <div className="locations-list--item" key={uuidv4()}>
            <h4 className="title-s">{location.country}</h4>
            <p>{location.postalCode}</p>
            <p>{location.city}</p>
          </div>
        ))}
      </StyledLocationsList>
    </SectionInView>
  );
};

export default ContactLocations;
