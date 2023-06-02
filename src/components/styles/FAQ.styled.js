import { styled } from 'styled-components';
import devices from '../styles/devices';

export const StyledFAQSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.heading};

  @media ${devices.laptop} {
    padding: 7.5rem 1.5rem 2.5rem;
    gap: 4.5rem;
  }
`;
export const StyledFAQ = styled.div`
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, max-content);
  }

  h4 {
    text-align: center;
    margin-bottom: 2rem;

    @media ${devices.laptop} {
      grid-row: 1 / -1;
      text-align: left;
    }
  }
`;

export const StyledFAQCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background2};
  padding: 2rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  .faq-chevron {
    cursor: pointer;
  }
`;

export const StyledAnswer = styled.div`
  margin-top: 1.5rem;
`;
