import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import { StyledTitle, StyledSection } from '../styles/Card.styled';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = dataArr.map((data) => <Card key={uuidv4()} data={data} />);

  return (
    <StyledSection
      className={sectionClass}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {sectionTitle && <h3 className="section-title">{sectionTitle}</h3>}
      {cards}
    </StyledSection>
  );
};

export default Cards;
