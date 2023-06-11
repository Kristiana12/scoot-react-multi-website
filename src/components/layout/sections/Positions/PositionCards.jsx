import { Button } from '../../../ExportComponents';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledPositionList,
  StyledPositionCard,
} from '../../../styles/Positions.styled';

const PositionCard = ({ data }) => {
  return (
    <StyledPositionCard>
      <div className="content">
        <h4 className="title-s">{data.position}</h4>
        <p>{data.location}</p>
      </div>
      <Button className="btn-primary" to="/contact">
        Apply
      </Button>
    </StyledPositionCard>
  );
};

const PositionCards = ({ data }) => {
  return (
    <StyledPositionList>
      {data.map((data) => (
        <PositionCard key={uuidv4()} data={data} />
      ))}
    </StyledPositionList>
  );
};

export default PositionCards;
