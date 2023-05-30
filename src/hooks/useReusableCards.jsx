import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/ExportComponents';
import { styled } from 'styled-components';
import devices from '../components/styles/devices';

const useReusableCards = (cardArr, sectionClass) => {
  const cards = cardArr.map((card) => (
    <div className={card.className} key={uuidv4()}>
      <div className="image">
        {card.image && <img src={card.image} alt="" />}
        {card.icon && <div className="card-icon">{card.icon}</div>}
        {card.icon2 && <div className="card-icon2">{card.icon2}</div>}
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

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .card {
    width: min(90%, 310px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  //Services
  &.section-services {
    @media ${devices.desktop} {
      flex-direction: row;
      gap: 1.875rem;
      width: min(90%, 1110px);
      margin: 0 auto;
    }

    & .service-card {
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

  //Features
  &.section-features {
    gap: 8rem;

    .features-card {
      width: min(90%, 570px);
      align-items: center;
      gap: 2rem;
      position: relative;

      .image {
        width: 310px;
        height: 310px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1.5rem;

        @media ${devices.tablet} {
          width: 445px;
          height: 445px;
        }
      }

      .card-icon {
        position: absolute;
        top: 250px;
        left: 0;
        transform: translateY(-50%);

        @media ${devices.tablet} {
          top: 380px;
          left: -30px;
        }
      }

      .card-icon2 {
        display: none;

        @media ${devices.tablet} {
          display: block;
          position: absolute;
          top: 0;
          right: -75%;
          z-index: -1;
        }
      }
    }

    .features-card:nth-child(2) {
      .card-icon {
        transform: rotateY(180deg);
        right: 60px;
        top: 0;

        @media ${devices.tablet} {
          right: 54%;
        }
      }

      .card-icon2 {
        @media ${devices.tablet} {
          right: 100%;
        }
      }
    }

    .features-card:nth-child(3) {
      .card-icon {
        top: 65px;
        left: 60px;

        @media ${devices.tablet} {
          top: 120px;
          left: 50%;
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

  &.section-title-l {
    font-size: 1.85rem;
    @media ${devices.tablet} {
      font-size: 3rem;
    }
  }
`;

export default useReusableCards;
