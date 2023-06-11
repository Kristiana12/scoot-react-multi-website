import { PositionCards, SectionInView } from '../../../ExportComponents';
import { StyledPositionSection } from '../../../styles/Positions.styled';

const FreePositions = () => {
  const positions = [
    {
      position: 'General Manager',
      location: 'Jakarta, Indonesia',
    },
    {
      position: 'UI/UX Designer',
      location: 'Yokohama, Japan',
    },
    {
      position: 'Blog Content Copywriter',
      location: 'New York, United States',
    },
    {
      position: 'Graphic Designer',
      location: 'New York, United States',
    },
    {
      position: 'Fleet Supervisor',
      location: 'Jakarta, Indonesia',
    },
    {
      position: 'UX Analyst',
      location: 'London, United Kingdom',
    },
  ];

  return (
    <SectionInView StyledSection={StyledPositionSection}>
      <PositionCards data={positions} />
    </SectionInView>
  );
};

export default FreePositions;
