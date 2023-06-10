import {
  StyledContactLocations,
  StyledLocationsList,
} from '../../../styles/Form.styled';
import { v4 as uuidv4 } from 'uuid';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StyledContactLocations
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
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
    </StyledContactLocations>
  );
};

export default ContactLocations;
