import { Button } from '../../../ExportComponents';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledPositionList,
  StyledPositionCard,
} from '../../../styles/Positions.styled';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PositionCard = ({ data }) => {
  return (
    <StyledPositionCard>
      <div className="content">
        <h4 className="title-s">{data.position}</h4>
        <p>{data.location}</p>
      </div>
      <Button className="btn-primary" to="#">
        Apply
      </Button>
    </StyledPositionCard>
  );
};

const PositionCards = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StyledPositionList
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {data.map((data) => (
        <PositionCard key={uuidv4()} data={data} />
      ))}
    </StyledPositionList>
  );
};

export default PositionCards;
