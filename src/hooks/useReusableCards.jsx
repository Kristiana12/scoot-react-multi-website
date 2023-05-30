import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/ExportComponents';
import { styled } from 'styled-components';

const useReusableCards = (cardArr, sectionClass) => {
  const cards = cardArr.map((card) => (
    <div className={card.className} key={uuidv4()}>
      <div className="image">
        {card.image && <img src="" alt="" />}
        {card.icon && <div className="card-icon">{card.icon}</div>}
      </div>
      <h2 className={card.titleClass}>{card.title}</h2>
      <p>{card.paragraph}</p>
      {card.button && (
        <Button to={card.urlLocation} className={card.buttonClass}>
          {card.button}
        </Button>
      )}
    </div>
  ));

  return <StyledSection className={sectionClass}>{cards}</StyledSection>;
};

const StyledSection = styled.div`
  padding-top: 7.5rem;
  text-align: center;

  &.section-services {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .service-card {
      width: min(90%, 310px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

export default useReusableCards;
