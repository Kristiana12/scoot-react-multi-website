import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import { StyledTitle, StyledSection } from '../styles/Card.styled';
import SectionInView from '../layout/sections/SectionInView';

const Card = ({ data }) => {
  return (
    <div className={data.className}>
      <div className="image">
        {data.image && <img src={data.image} alt="" />}
        {data.icon && <div className="card-icon">{data.icon}</div>}
        {data.icon2 && <div className="card-icon2">{data.icon2}</div>}
      </div>
      <div className="content">
        <StyledTitle className={data.titleClass}>{data.title}</StyledTitle>
        <p>{data.paragraph}</p>
        {data.button && (
          <Button to={data.urlLocation} className={data.buttonClass}>
            {data.button}
          </Button>
        )}
      </div>
    </div>
  );
};

const Cards = ({ dataArr, sectionClass, sectionTitle }) => {
  const cards = dataArr.map((data) => <Card key={uuidv4()} data={data} />);

  return (
    <SectionInView StyledSection={StyledSection} className={sectionClass}>
      {sectionTitle && <h3 className="section-title">{sectionTitle}</h3>}
      {cards}
    </SectionInView>
  );
};

export default Cards;
