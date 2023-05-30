import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/ExportComponents';
import { styled } from 'styled-components';
import devices from '../components/styles/devices';

const useReusableCards = (cardArr, sectionClass) => {
  const cards = cardArr.map((card) => (
    <div className={card.className} key={uuidv4()}>
      <div className="image">
        {card.image && <img src="" alt="" />}
        {card.icon && <div className="card-icon">{card.icon}</div>}
      </div>
      <StyledTitle className={card.titleClass}>{card.title}</StyledTitle>
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
  display: flex;
  flex-direction: column;
  gap: 3rem;

  //Services
  &.section-services {
    @media ${devices.desktop} {
      flex-direction: row;
      gap: 1.875rem;
      width: min(90%, 1110px);
      margin: 0 auto;
    }

    & .service-card {
      text-align: center;
      width: min(90%, 310px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media ${devices.tablet} {
        text-align: left;
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: repeat(2, min-content);
        gap: 1.5rem 5rem;
        width: min(90%, 600px);
        position: relative;

        @media ${devices.desktop} {
          display: flex;
          justify-content: center;
          width: min(90%, 380px);
        }

        &::before {
          content: '';
          z-index: -1;
          position: absolute;
          top: -85%;
          left: 39px;
          width: 18px;
          height: 100%;
          background-color: ${({ theme }) => theme.colors.background};

          @media ${devices.desktop} {
            left: -10px;
            transform: rotate(270deg);
            transform-origin: bottom right;
          }
        }

        .image {
          grid-row: 1 / -1;
        }
      }
    }
  }
`;

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.heading};

  &.section-title-s {
    font-size: 1.25rem;
    @media ${devices.tablet} {
      font-size: 1.5rem;
    }
  }
`;

export default useReusableCards;
